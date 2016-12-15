import React from 'react';
import { Link } from 'react-router';
import routeMap from '../../../routeMap.json';


export default function PortfolioGrid(props) {
  var filtersClass = props.project.filters + (" portfolio-item-wrap");

  return (
    <article className={filtersClass}>
      <div className="portfolio-item">

        <div className="portfolio-img">
          <img src={"img/black/"+ props.project.name +".png"} alt={props.project.name} />
        </div>
        <div className="portfolio-content-wrap">
          <div className="potfolio-content">
            <h6 className="portfolio-title">
              <Link
                to={routeMap.project_details.replace(':slug', props.project.name)}
                className="animsition-link"
              >
                {props.project.title}
              </Link>
            </h6>
            <div className="portfolio-categories">
              {props.project.categories}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

PortfolioGrid.contextTypes = {
  router: React.PropTypes.object,
};
