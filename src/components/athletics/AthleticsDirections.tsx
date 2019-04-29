import * as React from 'react';

import { firebaseDB } from '../../utils/firebase';

export default class AthleticsDirections extends React.Component<
  {},
  { directionsRef: any }
  > {
  constructor(props) {
    super(props);
  }
  public async componentDidMount() {
    const directionsRef = await firebaseDB
      .ref('/district/schoolathletics/directions')
      .once('value');
    this.setState({ directionsRef });
  }
  public render() {
    return (
      <section className="bg-lighter">
        <div className="container">
          <div className="row">
            {this.state &&
              this.state.directionsRef &&
              this.state.directionsRef.val().map(direction => (
                <div className="col-sm-6 col-md-4" key={direction.address}>
                  <div className="item">
                    <div className="campaign bg-white maxwidth500 mb-30">
                      {/* 
                    CAN PUT IMAGES HERE LATER
                  <div className="thumb">
                    <img src="http://placehold.it/375x275" alt="" className="img-fullwidth"/>
                    <div className="campaign-overlay"/>
                  </div> */}
                      <div className="campaign-details clearfix p-30">
                        <h3 className="mt-0 mb-0">
                          <a
                            target="_blank"
                            href={`https://www.google.com/maps/dir/Current+Location/${direction.address
                              .split(' ')
                              .join('+')}`}
                          >
                            {direction.name}
                          </a>
                        </h3>
                        <a
                          target="_blank"
                          className="btn btn-theme-colored font-weight-600 font-11 mt-10"
                          href={`https://www.google.com/maps/dir/Current+Location/${direction.address
                            .split(' ')
                            .join('+')}`}
                        >
                          Directions
                        </a>
                      </div>
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
