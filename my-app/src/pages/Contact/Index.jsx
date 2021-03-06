import React, { Component } from 'react';
import Validator from 'validatorjs';
import FormElement from'./components/Form';
import inputDatasPl from'./datas/InputDatas';
import inputDatasEn from'./datas/InputDatasEn';
import { intlShape } from 'react-intl';


class Contact extends Component {

    static contextTypes = {
        intl: intlShape.isRequired,
    };
    constructor() {
        super();
        this.state = {
            inputDatas: '',
        }
    }

    componentDidMount() {
        var inputDatas = this.props.inputDatas;
        this.setState( { inputDatas: inputDatas } );
        this._initialInputVerification();
    };

    componentWillMount() {
        if (this.context.intl.locale === 'en') {
            this.state.inputDatas = inputDatasEn;
        } else {
            this.state.inputDatas = inputDatasPl;
        }
    }

    _initialInputVerification() {

        var self = this;
        this.state.inputDatas.forEach( function ( item, index ) {
            self._setAndValidateInput( index, item.value );
        });
        this._calculatePercent();

    };

    _resetInputDatas() {

        var inputDatas = this.state.inputDatas.map( function ( item ) {
            item.value = '';
            item.pristine = true;
            item.hasError = false;
            return item;
        });
        this.setState( { inputDatas: inputDatas } );
        this._initialInputVerification();

    };

    _calculatePercent() {

        var total = this.state.inputDatas.length;
        var done = 0;
        var progressPercent;
        this.state.inputDatas.forEach( function( item ) {
            if( item.hasError === false ) {
                done += 1;
            }
        });
        progressPercent = done/total*100;
        this.setState( { progressPercent: progressPercent } );

    };

    _setAndValidateInput( index, value, noMorePristine ) {

        var pristine = noMorePristine ? false : true;
        var inputDatas = this.state.inputDatas;
        var item = inputDatas[index];
        var data = {};
        var validation;

        inputDatas[index].value = value;
        inputDatas[index].pristine = pristine;
        inputDatas[index].hasError = false;
        inputDatas[index].errorMessage = '';

        data[item.id] = value || '';

        validation = new Validator( data, item.validation.rules, item.validation.messages );
        if( validation.fails() ) {
            inputDatas[index].hasError = true;
            inputDatas[index].errorMessage  = validation.errors.first( item.id );
        }
        this.setState( { inputDatas: inputDatas } );

    };

    _onChangeInputHandler = ( index, value ) => {

        this._setAndValidateInput( index, value, true );
        this._calculatePercent();

    };

    _onSubmitFormHandler = () => {

        if ( this.state.progressPercent >= 100 ) {
            this._resetInputDatas();
            this._calculatePercent();
        }

    };

    render() {
        return (
          <section className="contact">
              <FormElement
                inputs={this.state.inputDatas}
                onChangeInputHandler={this._onChangeInputHandler}
                onSubmitFormHandler={this._onSubmitFormHandler}
                percent={this.state.progressPercent}
              />
          </section>
        );
    }
}

export default Contact;
