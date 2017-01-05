import React, { Component } from 'react';
import PortfolioGrid from './PortfolioGrid/PortfolioGrid';
import PortfolioGridList from './PortfolioGrid/PortfolioGridList.json';
import map from 'lodash/map';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProjectBackground: 'smoke_black',
    }
  };

  handleHover(projectBackground, isHovering) {
    console.log(projectBackground, isHovering);
    if(isHovering) {
      this.setState({
        currentProjectBackground: projectBackground,
      })
    }
  }

    render() {
      var BackgroundProject = {backgroundImage: 'url("./img/project_grid/' + this.state.currentProjectBackground +'.png")'};

        return (
          <section className="hello_portfolio">
              <ul className="grid_portfolio">
                  {map(PortfolioGridList, (project) => (
                      <PortfolioGrid
                          key={project.name}
                          project={project}
                          onHoverChange={this.handleHover.bind(this)}
                      />
                  ))}
                <div className="project_img" style={BackgroundProject} ></div>
              </ul>
            </section>
        );
    }
}

export default Portfolio;
