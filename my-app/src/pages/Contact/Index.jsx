import React, { Component } from 'react';
import Validator from 'validatorjs';
import FormElement from'./components/Form';
import inputDatas from'./datas/InputDatas';
import Helmet from 'react-helmet';


class Contact extends Component {
    constructor() {
        super();

        this.state = {
            inputDatas: inputDatas,
        };
    }
    static contextTypes = {
        meta: React.PropTypes.object,
    };
    componentDidMount() {
        console.log(this.props.inputDatas);
        var inputDatas = this.props.inputDatas;
        this.setState( { inputDatas: inputDatas } );
        this._initialInputVerification();

    };
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
          <div>
              <Helmet
                title={this.context.meta[0].about.title}
                meta={[
                    { name: 'description', content: this.context.meta[0].contact.description },
                    { name: 'keywords', content: this.context.meta[0].contact.keywords },
                    { name: 'twitter:title', content: this.context.meta[0].contact.title },
                    { name: 'twitter:description', content: this.context.meta[0].contact.description },
                    { property: 'og:title', content: this.context.meta[0].contact.title },
                    { property: 'og:sitename', content: this.context.meta[0].contact.site_name },
                    { property: 'og:description', content: this.context.meta[0].contact.description },
                ]}
              />
              <section className="contact">
                  {/*<ProgressElement percent={this.state.progressPercent} />*/}
                  <FormElement
                    inputs={this.state.inputDatas}
                    onChangeInputHandler={this._onChangeInputHandler}
                    onSubmitFormHandler={this._onSubmitFormHandler}
                    percent={this.state.progressPercent}
                  />
              </section>
          </div>
        );
    }
}

export default Contact;
