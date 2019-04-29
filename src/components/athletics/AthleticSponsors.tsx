import * as React from 'react';
import { firebaseDB } from '../../utils/firebase';
import FirebaseImage from '../firebase/FirebaseImage';
import './AthleticSponsors.css';
export default class AthleticSponsors extends React.Component<
  {},
  { filesRef: any }
  > {
  public async componentDidMount() {
    const filesRef = await firebaseDB
      .ref('/district/schoolathletics/sponsors')
      .once('value');
    this.setState({ filesRef });
  }

  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.state ? this.state.filesRef.val() : '');
    const sponsors = this.state ? this.state.filesRef.val() : null;
    return (
      <section className="bg-lighter">
        <div className="container">
          <div className="row">
            {sponsors &&
              sponsors.map(sponsor => (
                <div className="col-sm-6 col-md-4 athletic-sponsor">
                  <div className="item">
                    <div className="campaign bg-white maxwidth500 mb-30">
                      <FirebaseImage path={sponsor} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
}
