import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
          <div>
                <section className="hero">
                    <div className="hero-title">
                        <span className="hero-name-title bold">
                            CREATIVE&nbsp;
                        </span>
                        <span className="hero-name-title">
                            Front End Developer.
                        </span>
                    </div>
                    <div className="hero-name">
                        <img src="./img/pencil_wolf_white.svg" className="svg-wolf" role="presentation" />
                        <h1 className="hero-pencil">
                            Pencil<br/>sharpener
                        </h1>
                        <h2 className="hero-production">
                            by Dzianis Makeichyk
                        </h2>
                    </div>
                </section>
-              </div>
        );
    }
}

export default Index;
