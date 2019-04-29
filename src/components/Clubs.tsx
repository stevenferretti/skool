import * as React from 'react';

import { Panel } from 'react-bootstrap';
import { firebaseDB } from '../utils/firebase';
import FirebaseImage from './firebase/FirebaseImage';

export default class Clubs extends React.Component<any, IClubsElectivesState> {
  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    const clubsRef = await firebaseDB
      .ref('/district/schoolclubs')
      .once('value');
    this.setState({ clubsRef });
  }

  public render() {
    return (
      <div className="container pb-15 pt-15">
        <div className="row">
          {this.state &&
            this.state.clubsRef &&
            this.state.clubsRef.val().map(club => {
              return (
                <div className="col-md-3" key={club.header}>
                  {/* TODO: prob gonna have to chunk and make each chunk a new row before looping panels */}
                  <Panel style={{ width: 250, height: 400 }}>
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">
                        {club.header}
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <FirebaseImage path={club.image} width={225} />
                    </Panel.Body>
                    <Panel.Body>{club.description}</Panel.Body>
                  </Panel>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

interface IClubsElectivesState {
  clubsRef: any;
}
