// Gotta disable this because the amount of classes some of the links have
// tslint:disable:max-line-length

import * as React from 'react';
import FirebaseImage from '../firebase/FirebaseImage';
import LeftSideMenu from './LeftSideMenu';

export default class LeftMenuContentCenter extends React.Component<
  any,
  { path: any }
> {
  public render() {
    let path: string = window.location.href.split('/').pop() as string;
    // tslint:disable-next-line:no-console
    if (
      path === this.props.subCategory &&
      this.props.leftSideMenuStates['meet-the-team']
    ) {
      path = 'meet-the-team';
    }

    return (
      <div>
        <section>
          <div className="container mt-30 mb-30 pt-30 pb-30">
            <div className="row">
              <LeftSideMenu {...this.props} />
              <div className="col-md-9 pull-right flip sm-pull-none">
                {this.props.leftSideMenuStates[path] &&
                  this.props.leftSideMenuStates[path].image && (
                    <FirebaseImage
                      path={this.props.leftSideMenuStates[path].image}
                    />
                  )}
                <p>
                  {this.props.leftSideMenuStates[path] &&
                    this.props.leftSideMenuStates[path].content &&
                    this.props.leftSideMenuStates[path].content}
                </p>
                {this.props.leftSideMenuStates[path] &&
                  this.props.leftSideMenuStates[path].calendar_link && (
                    <iframe
                      src={this.props.leftSideMenuStates[path].calendar_link}
                      width="100%"
                      height="600"
                      scrolling="no"
                    />
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
