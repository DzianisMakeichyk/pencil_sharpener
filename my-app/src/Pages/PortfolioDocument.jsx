import React, { Component } from 'react';
import PortfolioGrid from './PortfolioGrid/PortfolioGrid';
import PortfolioGridList from './PortfolioGrid/PortfolioGridList.json';
import map from 'lodash/map';
import MediaQuery from 'react-responsive';
import cx from 'classnames';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProjectName: null,
      currentProjectBackground: 'smoke_black',
    }
  };

  handleHover(projectName, projectBackground, isHovering) {
    console.log(projectBackground, isHovering);
    if (isHovering) {
      this.setState({
        currentProjectName: projectName,
        currentProjectBackground: projectBackground,
      });
    }
    else {
      this.setState({
        currentProjectName: null,
        currentProjectBackground: 'smoke_black',
      });
    }
  }

    render() {
      var BackgroundProject = {backgroundImage: 'url("./img/project_grid/' + this.state.currentProjectBackground +'.png")'};
      var hoverItem = cx([
        this.state.currentProjectName && 'is-hover',
      ]);

        return (
          <section className="height-auto vh-medium">
              <ul className="grid-portfolio">
                  {map(PortfolioGridList, (project) => (
                      <PortfolioGrid
                          key={project.name}
                          project={project}
                          currentProjectName={this.state.currentProjectName}
                          onHoverChange={this.handleHover.bind(this)}
                      />
                  ))}
                <MediaQuery minDeviceWidth={1024}>
                  <div className={'project-img ' + cx(hoverItem)} style={BackgroundProject} ></div>
                </MediaQuery>
              </ul>
            </section>
        );
    }
}

export default Portfolio;
