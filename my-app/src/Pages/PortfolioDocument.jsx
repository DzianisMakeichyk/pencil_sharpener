import React, { Component } from 'react';
import PortfolioGrid from './PortfolioGrid/PortfolioGrid';
import PortfolioGridList from './PortfolioGrid/PortfolioGridList.json';
import map from 'lodash/map';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  };
    /*componentDidMount() {
        isPortfolio();
        isScript();
    }*/
    render() {
        return (
            <div>
                <section className="hello_portfolio">
                    <ul className="grid_portfolio">
                        {map(PortfolioGridList, (project) => (
                            <PortfolioGrid
                                key={project.name}
                                project={project}
                            />
                        ))}
                    </ul>
                  <div>
                    {map(PortfolioGrid, (this.state) && (
                       (this.state.isHovering === false) && console.log('true'))
                      )}
                  </div>
                    </section>
                </div>
        );
    }
}

export default Portfolio;
