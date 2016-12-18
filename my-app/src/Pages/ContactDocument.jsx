import React, { Component } from 'react';
import { Grid, container, row, Col } from 'react-bootstrap';

// const MY_API_KEY = "AIzaSyCwEpRbCdcngylFY88eAvkxWr70F9wR53E";
var map = {
    height: '250px'
};

var send = {
    display: 'none',
    margin: '0 0 0 5px'
};

class App extends Component {

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "http://maps.google.com/maps/api/js?key=AIzaSyCwEpRbCdcngylFY88eAvkxWr70F9wR53E&sensor=false";
        script.async = true;

        document.body.appendChild(script);
    };


    render() {
        return (
            <div>
                <section
                    className="jarallax"
                >
                    <div className="homepage-hero-module">
                        <div className="video-container">
                            <div className="filter"></div>
                            <video autoPlay loop className="fillHeight">
                                <source src="video/MP4/Ground-Zero.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                                <source src="video/WEBM/Ground-Zero.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                            </video>



                            <Grid bsClass={container}>
                                <div className="aligner">
                                    <div className="aligner-item page-title">
                                        <h1>Kontakt</h1>
                                    </div>
                                </div>
                            </Grid>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <Grid bsClass={container}>
                        <Grid bsClass={row}>
                            <Col sm={10} smOffset={1}>



                                <Grid bsClass={row}>
                                    <Col md={6}>
                                        <h5 className="mb10">Kontakt</h5>
                                        <dl>
                                            <dt>Email</dt>
                                            <dd>
                                                <a href="mailto:dzianis@pencilsharpener.pl">dzianis@pencilsharpener.pl</a>
                                            </dd>
                                            <dt>Telefon</dt>
                                            <dd>+48797657075</dd>
                                            <dt>Warszawa</dt>
                                            <dd>NIP: 527-277-32-56</dd>
                                        </dl>

                                        <ul className="social-link">
                                            <li><a className="icon-style" href="https://www.facebook.com/dzianismakeichyk" target="_blank" ><i className="fa fa-facebook"></i></a></li>
                                            <li><a className="icon-style" href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127" target="_blank" ><i className="fa fa-linkedin"></i></a></li>
                                            <li><a className="icon-style" href="https://www.vk.com/road66" target="_blank" ><i className="fa fa-vk"></i></a></li>
                                        </ul>

                                    </Col>

                                    <Col md={6}>
                                        <div
                                            className="map mb50 sm-mt60"
                                            id="map"
                                            data-lat="52.2296"
                                            data-lng="21.0117"
                                            data-zoom="15"
                                            style={map}></div>
                                        <form
                                            className="contact-form"
                                            id="contact-form"
                                            action="send_email.php"
                                            method="post"
                                            data-all-fields-required-msg="O czymś zapomniałeś"
                                            data-ajax-fail-msg="Ajax could not set the request"
                                            data-success-msg="Email został wysłany ;)">

                                            <label>Imię:
                                                <span>*</span>
                                            </label>
                                            <input className="contact-form-name" type="text" name="name" />

                                                <label>Email:
                                                    <span>*</span>
                                                </label>
                                                <input className="contact-form-email" type="text" name="email" />

                                                    <label>Wiadomość:
                                                        <span>*</span>
                                                    </label>
                                                    <textarea cols="30" rows="2" className="contact-form-message" name="message"></textarea>

                                                    <p className="return-msg"></p>

                                                    <div className="mt40">
                                                        <button className="btn btn-md btn-black">
            														<span>Wyślij
            															<i
                                            className="fa fa-spin fa-spinner ajax-loader"
                                            style={send}>

                                          </i>
            														</span>
                                                        </button>
                                                    </div>

                                        </form>

                                    </Col>
                                </Grid>

                            </Col>
                        </Grid>

                    </Grid>

                </section>        </div>
        );
    }
}

export default App;
