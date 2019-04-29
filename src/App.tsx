import { Provider } from 'mobx-react';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Admissions from './components/Admissions';
import Announcements from './components/Announcements';
import AthleticsContainer from './components/athletics/AthleticsContainer';
import AthleticsDirections from './components/athletics/AthleticsDirections';
import AthleticSponsers from './components/athletics/AthleticSponsors';
import BellSchedule from './components/BellSchedule';
import BoardCalendar from './components/BoardCalendar';
import BoardList from './components/BoardList';
import Breadcrumbs from './components/Breadcrumbs';
import Calendar from './components/Calendar';
import Clubs from './components/Clubs';
import Electives from './components/Electives';
import EmployeeList from './components/EmployeeList';
import Faqs from './components/Faqs';
import FilesAndLinksContainer from './components/files-and-links/FilesAndLinksContainer';
import Footer from './components/Footer';
import Homepage from './components/Homepage/Homepage';
import Menu from './components/Menu';
import MissionStatement from './components/MissionStatement';
import NotFound from './components/NotFound';
import ParentCouncil from './components/ParentCouncil';
import ServiceProjects from './components/ServiceProjects';
import configStore from './stores/configStore';
import { firebaseDB } from './utils/firebase';

class App extends React.Component<any, { athleticsSetupRef: any }> {
  public async componentDidMount() {
    const athleticsSetupRef = await firebaseDB
      .ref('/district/schoolathletics/setup')
      .once('value');
    this.setState({ athleticsSetupRef });
  }

  public render() {
    {
      /* Each route will add it's own container div */
    }
    const routes: IRouteDefinitions[] = [
      { path: '/', component: Homepage },
      { path: '/announcements', component: Announcements },
      { path: '/admissions', component: Admissions },
      { path: '/athletics/directions', component: AthleticsDirections },
      { path: '/calendar', component: Calendar },
      { path: '/board-calendar', component: BoardCalendar },
      { path: '/class-schedule', component: BellSchedule },
      { path: '/clubs', component: Clubs },
      { path: '/electives', component: Electives },
      { path: '/files-and-links', component: FilesAndLinksContainer },
      { path: '/parent-council', component: ParentCouncil },
      { path: '/principals-message', component: MissionStatement },
      { path: '/service-projects', component: ServiceProjects },
      { path: '/staff', component: EmployeeList },
      { path: '/board-members', component: BoardList },
      { path: '/athletics/sponsors', component: AthleticSponsers },
      { path: '/faqs', component: Faqs }
    ];

    const sportsConfig = {
      'boys-basketball': {
        'meet-the-team': {
          image: 'athletics/volleyball/volleyballTeam.webp'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      },
      'cross-country': {
        'meet-the-team': {
          image: 'athletics/volleyball/volleyballTeam.webp'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      },
      'flag-football': {
        'meet-the-team': {
          image: 'athletics/volleyball/volleyballTeam.webp'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      },
      'girls-basketball': {
        'meet-the-team': {
          image: 'athletics/girls-basketball/girlsBasketballTeam.png'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      },
      soccer: {
        'meet-the-team': {
          image: 'athletics/volleyball/volleyballTeam.webp'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      },
      volleyball: {
        'meet-the-team': {
          image: 'athletics/volleyball/volleyballTeam.webp'
        },
        schedule: {
          calendar_link:
            'google_calandar_url'
        }
      }
    };

    const stores = {
      configStore
    };

    return (
      <Provider {...stores}>
        <div id="wrapper" className="clearfix">
          <Menu />
          <div className="main-content">
            <Route
              render={props => {
                return (
                  props.location.pathname !== '/' &&
                  props.location.pathname !== '/404' && (
                    <Breadcrumbs currentPath={props.location.pathname} />
                  )
                );
              }}
            />
            <Switch>
              {routes.map(route => <Route exact {...route} key={route.path} />)}

              {this.renderSportRoutes(sportsConfig)}

              {/* Keep this NotFound always at the bottom of the Switch */}
              <Route exact path="/404" component={NotFound} />
              <Route
                render={notFoundProps => {
                  return (
                    notFoundProps.location.pathname !== '/404' && (
                      <Redirect
                        from={notFoundProps.location.pathname}
                        push
                        to="/404"
                      />
                    )
                  );
                }}
              />
            </Switch>
          </div>
          <Footer />
          <a className="scrollToTop" href="#">
            <i className="fa fa-angle-up" />
          </a>
        </div>
      </Provider>
    );
  }

  private renderSportRoutes = (sportConfig: {
    [key: string]: { [key: string]: any };
  }) => {
    const sportCategories = Object.keys(sportConfig);

    const routeList: any = [];
    sportCategories.forEach(sportCategory => {
      Object.keys(sportConfig[sportCategory]).forEach(sportSubCategory => {
        routeList.push(
          <Route
            exact
            path={`/athletics/${sportCategory}/${sportSubCategory}`}
            key={sportCategory + sportSubCategory}
            render={() => {
              return (
                <AthleticsContainer
                  category="athletics"
                  subCategory={sportCategory}
                  leftSideMenuStates={sportConfig[sportCategory]}
                />
              );
            }}
          />
        );
        routeList.push(
          <Route
            exact
            path={`/athletics/${sportCategory}`}
            key={sportCategory + 'Home'}
            render={() => {
              return (
                <AthleticsContainer
                  category="athletics"
                  subCategory={sportCategory}
                  leftSideMenuStates={sportConfig[sportCategory]}
                />
              );
            }}
          />
        );
      });
    });

    return routeList;
  };
}

interface IRouteDefinitions {
  path: string;
  component: any;
}

export default App;
