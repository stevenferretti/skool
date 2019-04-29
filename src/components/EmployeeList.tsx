import * as React from 'react';
import './EmployeeList.css';
import FirebaseImage from './firebase/FirebaseImage';
export default class EmployeeList extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const employees = [
      {
        name: 'FirstName LastName',
        email: 'firstname.lastname@skoolcountyschools.net',
        image: 'FirstName LastName.JPG',
        position: 'Principal',
        team: '',
        order: 1
      },
      {
        name: 'FirstName LastName',
        email: 'firstname.lastname@skoolcountyschools.net',
        image: 'FirstName LastName.JPG',
        position: 'Principal',
        team: '',
        order: 2
      },
      {
        name: 'FirstName LastName',
        email: 'firstname.lastname@skoolcountyschools.net',
        image: 'FirstName LastName.JPG',
        position: 'Principal',
        team: '',
        order: 3
      },

    ];
    return (
      <section id="team">
        <div className="container">
          <div className="row mtli-row-clearfix">
            {employees.map(employee => {
              return (
                <div
                  className="col-xs-12 col-sm-6 col-md-3 sm-text-center mb-30 mb-sm-30"
                  key={employee.email}
                >
                  <div className="team-member maxwidth400">
                    <div className="thumb">
                      <FirebaseImage
                        path={'staff/' + employee.image}
                        width={225}
                      />
                    </div>
                    <div className="details">
                      <h3 className="text-uppercase mb-0">
                        <a>{employee.name}</a>
                      </h3>
                      <h5 className="text-theme-colored2 mt-0">
                        {employee.position}
                      </h5>
                      <p>{employee.team}</p>
                      <ul className="styled-icons icon-dark">
                        {employee.email && (
                          <li>
                            <a
                              href={'mailto:' + employee.email}
                              style={{ backgroundColor: '#02B0E8' }}
                            >
                              <i className="fa fa-envelope" />
                            </a>
                          </li>
                        )}
                        {employee.site && (
                          <li>
                            <a
                              href={employee.site}
                              target="_blank"
                              style={{ backgroundColor: '#3B5998' }}
                            >
                              <i className="fa fa-globe" />
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
