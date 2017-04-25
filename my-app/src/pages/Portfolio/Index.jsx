import React, { Component } from 'react';
import PortfolioGrid from './Grid';
import PortfolioGridList from './datas/ProjectsList.json';
import map from 'lodash/map';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import classnames from 'classnames';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentProjectName: null,
      currentProjectBackground: null,
    }
  };

  static contextTypes = {
    currentMedia: React.PropTypes.string,
  };

  handleHover = (projectName, projectBackground, isHovering) => {
    if (isHovering) {
      this.setState({
        currentProjectName: projectName,
        currentProjectBackground: projectBackground,
      });
    }
    else {
      this.setState({
        currentProjectName: null,
        currentProjectBackground: null,
      });
    }
  };

    render() {
      var BackgroundProject = {backgroundImage: 'url("/img/project_grid/' + this.state.currentProjectBackground +'.png")'};

        return (
          <section className="height-auto vh-medium">
            <ul className="grid-portfolio">
                {map(PortfolioGridList, (project) => (
                    <PortfolioGrid
                        key={project.slug}
                        project={project}
                        currentProjectName={this.state.currentProjectName}
                        onHoverChange={this.handleHover}
                    />
                ))}
              {isMediaGreaterThan('Mobile', this.context.currentMedia) && (
                <div className={classnames('project-img grayscale ', {'is-hover':this.state.currentProjectName})} style={BackgroundProject} ></div>
              )}
            </ul>
          </section>
        );
    }
}

export default Portfolio;
