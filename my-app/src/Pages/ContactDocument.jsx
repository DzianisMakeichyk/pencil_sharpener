import React, { Component } from 'react';
import Validator from 'validatorjs';
import FormElement from'./Contact/components/Form';
import inputDatas from'./Contact/datas/InputDatas';
import Social from './Elements/Social';


class Contact extends Component {
    constructor() {
        super();

        this.state = {
            inputDatas: inputDatas,
        };
    }
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
          <section className="height-auto contact">
              <div className="about-information ease-box">
                  <h2 className="about-name qanelas-bold is-landscape-white">
                        <span className="green">
                            Dzianis
                        </span> Makeichyk</h2>
                  <div className="about-description">
                      <div className="about-description-left">
                          <p className="green">Miasto:</p>
                          <p className="green">Mail:</p>
                          <p className="green">Telefon:</p>
                          <p className="green">NIP:</p>
                      </div>
                      <div className="about-description-right">
                          <p className="description-shot is-landscape-white">Polska, Warszawa</p>
                          <a href="mailto:dzianis@pencilsharpener.pl" className="description-shot is-landscape-white">dzianis@pencilsharpener.pl</a>
                          <p className="description-shot is-landscape-white"> +48 79767075</p>
                          <p className="description-shot is-landscape-white">527-277-32-56</p>
                      </div>
                  </div>
                  <Social />
              </div>
              {/*<ProgressElement percent={this.state.progressPercent} />*/}
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
