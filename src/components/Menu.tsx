// Gotta disable this because the amount of classes some of the links have
// tslint:disable:max-line-length

import * as React from 'react';
import { Link } from 'react-router-dom';
import { getFirebaseImageLink } from '../utils/firebase';
import FirebaseFileLink from './firebase/FirebaseFileLink';
import './Menu.css';

export default class Menu extends React.Component<any, { logoPath: string }> {
  private $: any;

  constructor(props) {
    super(props);
    this.state = {
      logoPath: ''
    };
  }

  public async componentDidMount() {
    this.setState({
      logoPath: await getFirebaseImageLink('logo.png')
    });
  }

  public closeMenu() {
    this.$('.showhide').trigger('click');
  }

  public render() {
    return (
      <header
        id="header"
        className="header modern-header modern-header-theme-colored"
      >
        <div className="header-top bg-theme-colored2 sm-text-center">
          <div className="container">
            <div className="row center">
              <div className="col-md-12">
                <div className="widget text-white">
                  <i className="fa fa-file-text-o" />
                  NOW ACCEPTING APPLICATIONS FOR 2018-2019 SCHOOL YEAR -
                  Applications are available online or at the front office.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle p-0 pb-30 bg-light xs-text-center">
          <div className="container pt-20 pb-20">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3">
                <div className="menuzord-brand pull-left flip sm-pull-center mb-15">
                  <img
                    src={this.state.logoPath}
                    style={{ maxHeight: '76px' }}
                  />
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="widget no-border sm-text-center mt-30 mb-10 m-0">
                  <i className="fa fa-envelope text-theme-colored font-32 mt-5 mr-sm-0 sm-display-block pull-left flip sm-pull-none" />
                  <a className="font-12 text-gray text-uppercase">
                    Email Us Today
                  </a>
                  <h5 className="font-13 text-black m-0">
                    <a href="mailto:test@skool.com">
                      Click To Email
                    </a>
                  </h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="widget no-border sm-text-center mt-30 mb-10 m-0">
                  <i className="fa fa-phone-square text-theme-colored font-32 mt-5 mr-sm-0 sm-display-block pull-left flip sm-pull-none" />
                  <a className="font-12 text-gray text-uppercase">
                    Call us for more details
                  </a>
                  <h5 className="font-13 text-black m-0">(941) 485-5551</h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="widget no-border sm-text-center mt-30 mb-10 m-0">
                  <i className="fa fa-institution text-theme-colored font-32 mt-5 mr-sm-0 sm-display-block pull-left flip sm-pull-none" />
                  <a className="font-12 text-gray text-uppercase">
                    Skool
                  </a>
                  <h5 className="font-13 text-black m-0">
                    address
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="header-nav-wrapper navbar-scrolltofixed">
            <div className="container">
              <nav id="menuzord" className="menuzord red">
                <ul className="menuzord-menu">
                  <li className="active">
                    <Link onClick={this.closeMenu} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a>About Us</a>
                    <ul className="dropdown">
                      <li>
                        <Link onClick={this.closeMenu} to="/principals-message">
                          Principal's Message
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/board-members">
                          School Board Of Directors
                        </Link>
                      </li>
                      {/* 
                      // When we have calandar use this
                      <li>
                        <a>School Board Of Directors</a>
                        <ul className="dropdown">
                          <li>
                            <Link onClick={this.closeMenu} to="/board-members">
                              Members
                            </Link>
                          </li>
                          <li>
                            <Link onClick={this.closeMenu} to="/board-calendar">
                              Board Calendar
                            </Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <Link onClick={this.closeMenu} to="/staff">
                      Our Staff
                    </Link>
                  </li>
                  <li>
                    <a>Information</a>
                    <ul className="dropdown">
                      <li>
                        <Link onClick={this.closeMenu} to="/admissions">
                          Admissions
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/announcements">
                          Announcements
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/files-and-links">
                          Parent Information
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/class-schedule">
                          Class Schedule
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/faqs">
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Calendars</a>
                    <ul className="dropdown">
                      {/* Probably either link to individual wrapper calendar components or go to /calendar/:id and 
                            load them that way through the calendar component (would be more extensible in future) */}
                      <li>
                        <Link onClick={this.closeMenu} to="/calendar">
                          School Calendar
                        </Link>
                      </li>
                      <li>
                        <FirebaseFileLink
                          label="District Calendar"
                          path="districtCalendar.pdf"
                        />
                      </li>
                      {/* <li>
                        <Link onClick={this.closeMenu} to="/calendar">
                          Computer Lab Calendar
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <a>Activities</a>
                    <ul className="dropdown">
                      <li>
                        <Link onClick={this.closeMenu} to="/clubs">
                          Clubs
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/electives">
                          Electives
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/service-projects">
                          Service
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>Athletics</a>
                    <ul className="dropdown">
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/flag-football"
                        >
                          Flag Football
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/volleyball"
                        >
                          Volleyball
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/boys-basketball"
                        >
                          Boys Basketball
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/girls-basketball"
                        >
                          Girls Basketball
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/athletics/soccer">
                          Soccer
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/cross-country"
                        >
                          Cross Country
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={this.closeMenu}
                          to="/athletics/directions"
                        >
                          Directions
                        </Link>
                      </li>
                      <li>
                        <Link onClick={this.closeMenu} to="/athletics/sponsors">
                          Sponsors
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="active pull-right">
                    <Link onClick={this.closeMenu} to="/admissions">
                      Apply Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
