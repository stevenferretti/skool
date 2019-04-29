import * as React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { withSiteConfig } from '../hocs/withSiteConfig';
import FirebaseImage from './firebase/FirebaseImage';
class Footer extends React.PureComponent<any> {
  public render() {
    return (
      <footer id="footer" className="footer bg-black-111">
        <div className="container pt-70 pb-40">
          <div className="col-sm-6 col-md-3">
            <div className="widget dark">
              <FirebaseImage path={'footer_logo.png'} width={150} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="widget dark">
              <ul className="list-inline mt-5">
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-map-marker text-theme-colored2 mr-5" />
                  <a className="text-gray" href="#">
                    Adress
                  </a>
                </li>
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-phone text-theme-colored2 mr-5" />
                  <a className="text-gray" href="#">
                    Phone: {this.props.siteConfig.phone}
                  </a>
                </li>
                <li className="m-0 pl-10 pr-10">
                  <i className="fa fa-print text-theme-colored2 mr-5" />
                  <a className="text-gray" href="#">
                    Fax: {this.props.siteConfig.fax}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-5">
            <div className="widget dark">
              <h5 className="widget-title line-bottom">
                After School Transportation Schedule
              </h5>
              <p>
                Bus Riders - 2:00
                <br />
                Car Riders - 2:05
                <br />
                Walkers & Bike Riders - 2:15 (after car line ends)
                <br />
              </p>
            </div>
          </div>
          <div className="row pull-right">
            <div className="col-md-12">
              <small>
                Created with{' '}
                <Glyphicon style={{ color: 'red' }} glyph="heart" /> by{' '}
                <a
                  style={{ fontWeight: 'bold' }}
                  target="_blank"
                  href="https://skoolinc.com"
                >
                  Skool, Inc.
                </a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withSiteConfig(Footer);
