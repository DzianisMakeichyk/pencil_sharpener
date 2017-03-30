import React, { Component } from 'react';
import PortfolioGrid from './Grid';
import PortfolioGridList from './datas/ProjectsList.json';
import map from 'lodash/map';
import isMediaGreaterThan from '../../web_modules/isMediaGreaterThan';
import classnames from 'classnames';
import Helmet from 'react-helmet';

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
    meta: React.PropTypes.object,
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
        currentProjectBackground: null,
      });
    }
  }

    render() {
      var BackgroundProject = {backgroundImage: 'url("./img/project_grid/' + this.state.currentProjectBackground +'.png")'};

        return (
          <div>
            <Helmet
              title={this.context.meta[0].portfolio.title}
              meta={[
                { name: 'description', content: this.context.meta[0].portfolio.description },
                { name: 'keywords', content: this.context.meta[0].portfolio.keywords },
                { name: 'twitter:title', content: this.context.meta[0].portfolio.title },
                { name: 'twitter:description', content: this.context.meta[0].portfolio.description },
                { property: 'og:title', content: this.context.meta[0].portfolio.title },
                { property: 'og:sitename', content: this.context.meta[0].portfolio.site_name },
                { property: 'og:description', content: this.context.meta[0].portfolio.description },
              ]}
            />
            <section className="height-auto vh-medium">
              <ul className="grid-portfolio">
                  {map(PortfolioGridList, (project) => (
                      <PortfolioGrid
                          key={project.slug}
                          project={project}
                          currentProjectName={this.state.currentProjectName}
                          onHoverChange={this.handleHover.bind(this)}
                      />
                  ))}
                {isMediaGreaterThan('Mobile', this.context.currentMedia) && (
                  <div className={classnames('project-img grayscale ', {'is-hover':this.state.currentProjectName})} style={BackgroundProject} ></div>
                )}
              </ul>
              </section>
            </div>
        );
    }
}

export default Portfolio;
