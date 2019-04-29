import * as React from 'react';
import { Link } from 'react-router-dom';
import './LeftSideMenu.css';

export default class LeftSideMenu extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  public getSideMenuTitle() {
    const title = this.props.subCategory
      ? this.props.subCategory
      : this.props.category;
    return title
      .split('-')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  }

  public render() {
    const categoryPath = this.props.subCategory
      ? `/${this.props.category}/${this.props.subCategory}/`
      : `/${this.props.category}/`;

    const statesToJsx: any = [];

    Object.keys(this.props.leftSideMenuStates).forEach(leftMenuState => {
      const title = leftMenuState
        .split('-')
        .join(' ')
        .toLocaleUpperCase();
      const path = window.location.href.split('/').pop();
      const leftMenuStatePath = categoryPath + leftMenuState;
      if (leftMenuState === path) {
        statesToJsx.push(
          <li className="selected-left-menu-item">
            <Link to={leftMenuStatePath}>{title}</Link>
          </li>
        );
      } else {
        let link;

        if (this.props.leftSideMenuStates[leftMenuState].external_link) {
          link = (
            <li>
              <a
                href={
                  this.props.leftSideMenuStates[leftMenuState].external_link
                }
                target="_blank"
              >
                {title}
              </a>
            </li>
          );
        } else {
          link = (
            <li>
              <Link to={leftMenuStatePath}>{title}</Link>
            </li>
          );
        }
        statesToJsx.push(link);
      }
    });

    return (
      <div className="col-md-3">
        <div className="sidebar sidebar-left mt-sm-30">
          <div className="widget">
            <h5 className="widget-title line-bottom">
              {this.getSideMenuTitle()}
            </h5>
            <div className="categories">
              <ul className="list list-border angle-double-right">
                {statesToJsx}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
