import * as React from 'react';
import { firebaseDB } from '../../utils/firebase';

export default class ImportantLinks extends React.Component<
  {},
  { linksRef: any }
  > {
  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    const linksRef = await firebaseDB
      .ref('/district/schoollinks')
      .once('value');
    this.setState({ linksRef });
  }

  public render() {
    return (
      <ul className="list-icon theme-colored">
        {this.state &&
          this.state.linksRef &&
          this.state.linksRef.val().map(link => {
            return (
              <li key={link.url}>
                <a href={link.url} target="_blank">
                  {link.label} <i className="fa fa-external-link" />
                </a>
              </li>
            );
          })}
      </ul>
    );
  }
}
