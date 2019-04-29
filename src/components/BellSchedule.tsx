import * as React from 'react';

export default class BellSchedule extends React.Component<IBellScheduleProps> {
  constructor(props) {
    super(props);
  }

  public iterateTables(allPeriods) {
    const returnedTables: any = [];
    let x: number = 0;
    for (const i in allPeriods) {
      if (i) {
        const tabClass = x === 0 ? 'tab-pane fade in active' : 'tab-pane fade';
        const listItems = this.iterateListItems(allPeriods[i]);
        returnedTables.push(
          <div
            className={tabClass}
            id={i.replace(/\s/g, '')}
            key={i.replace(/\s/g, '')}
          >
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Period</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>{listItems}</tbody>
            </table>
          </div>
        );
        x++;
      }
    }
    return returnedTables;
  }

  public iterateListItems(category) {
    const listItems = category.map(period => {
      return (
        <tr key={period.name}>
          <td>{period.name}</td>
          <td>{period.time}</td>
        </tr>
      );
    });
    return listItems;
  }

  public iterateTabs(allPeriods) {
    const returnedTabs: any = [];
    let x: number = 0;
    for (const i in allPeriods) {
      if (i) {
        const tabClass = x === 0 ? 'active' : '';
        returnedTabs.push(
          <li className={tabClass} key={i.replace(/\s/g, '')}>
            <a href={'#' + i.replace(/\s/g, '')} data-toggle="tab">
              {i}
            </a>
          </li>
        );
        x++;
      }
    }
    return returnedTabs;
  }

  public render() {
    const defaultPeriods = {
      '6th Grade': [
        {
          name: '1st Period',
          time: '7:30 AM - 8:12 AM'
        },
        {
          name: '2nd Period',
          time: '8:14 AM - 9:04 AM'
        },
        {
          name: '3rd Period',
          time: '9:06 AM - 9:56 AM'
        },
        {
          name: 'Lunch (4th Period)',
          time: '9:58 AM - 10:30 AM'
        },
        {
          name: '5th Period',
          time: '10:32 AM - 11:22 AM'
        },
        {
          name: '6th Period',
          time: '11:24 AM - 12:14 PM'
        },
        {
          name: '7th Period',
          time: '12:16 PM - 1:06 PM'
        },
        {
          name: '8th Period',
          time: '1:08 PM - 2:00 PM'
        }
      ],
      '7th Grade': [
        {
          name: '1st Period',
          time: '7:30 AM - 8:12 AM'
        },
        {
          name: '2nd Period',
          time: '8:14 AM - 9:04 AM'
        },
        {
          name: '3rd Period',
          time: '9:06 AM - 9:56 AM'
        },
        {
          name: '4th Period',
          time: '9:58 AM - 10:50 AM'
        },
        {
          name: 'Lunch (5th Period)',
          time: '10:52 AM - 11:22 AM'
        },
        {
          name: '6th Period',
          time: '11:24 AM - 12:14 PM'
        },
        {
          name: '7th Period',
          time: '12:16 PM - 1:06 PM'
        },
        {
          name: '8th Period',
          time: '1:08 PM - 2:00 PM'
        }
      ],
      '8th Grade': [
        {
          name: '1st Period',
          time: '7:30 AM - 8:12 AM'
        },
        {
          name: '2nd Period',
          time: '8:14 AM - 9:04 AM'
        },
        {
          name: '3rd Period',
          time: '9:06 AM - 9:56 AM'
        },
        {
          name: '4th Period',
          time: '9:58 AM - 10:50 AM'
        },
        {
          name: '5th Period',
          time: '10:52 AM - 11:42 AM'
        },
        {
          name: 'Lunch (6th Period',
          time: '11:44 AM - 12:14 PM'
        },
        {
          name: '7th Period',
          time: '12:16 PM - 1:06 PM'
        },
        {
          name: '8th Period',
          time: '1:08 PM - 2:00 PM'
        }
      ]
    };
    const categorizedPeriods =
      this.props.categorizedPeriods || defaultPeriods || [];

    const tabs = this.iterateTabs(categorizedPeriods);
    const tables = this.iterateTables(categorizedPeriods);

    return (
      <section>
        <div className="container pt-20">
          <ul id="tab-list" className="nav nav-pills boot-tabs">
            {tabs}
          </ul>
          <div id="tab-content" className="tab-content">
            {tables}
          </div>
        </div>
      </section>
    );
  }
}

export interface IBellScheduleProps {
  categorizedPeriods?: {
    category: Array<{
      name: string;
      time: string;
    }>;
  };
}
