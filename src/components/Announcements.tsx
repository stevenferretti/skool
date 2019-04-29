import * as React from 'react';
import FirebaseFileLink from './firebase/FirebaseFileLink';

export default class Announcements extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    const announcements = [
      {
        file: 'top_rated.pdf',
        title: 'School Ranked 4th In The State Of Florida',
        previewText: null
      },
      {
        link: `testlink.com`,
        title: ' News',
        previewText: null
      }
    ];

    return (
      <section className="bg-lighter">
        <div className="container">
          <div className="row">
            {announcements.map(announcement => {
              if (announcement.file) {
                return (
                  <div className="col-sm-6 col-md-4" key={announcement.title}>
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
                            <a href={announcement.link}>{announcement.title}</a>
                          </h3>
                          <ul className="mb-10">
                            {/* <li className="text-theme-colored2 mr-5">
                          // ANOTHER GOOD SPOT TO PUT MORE INFO IF NEEDED
                        </li> */}
                          </ul>
                          <p>{announcement.previewText}</p>
                          <FirebaseFileLink
                            path={announcement.file || ''}
                            label="More Info"
                            button={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div className="col-sm-6 col-md-4" key={announcement.title}>
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
                          <a href={announcement.link}>{announcement.title}</a>
                        </h3>
                        <ul className="mb-10">
                          {/* <li className="text-theme-colored2 mr-5">
                        // ANOTHER GOOD SPOT TO PUT MORE INFO IF NEEDED
                      </li> */}
                        </ul>
                        <p>{announcement.previewText}</p>
                        <a
                          className="btn btn-theme-colored font-weight-600 font-11 mt-10"
                          href={announcement.link}
                        >
                          More Info
                        </a>
                      </div>
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
