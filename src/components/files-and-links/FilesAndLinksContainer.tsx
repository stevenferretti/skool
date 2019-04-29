import * as React from 'react';
import ImportantFiles from './ImportantFiles';
import ImportantLinks from './ImportantLinks';
const FilesAndLinksContainer: React.SFC = props => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-6 well">
          <h1>Important Files</h1>
          <ImportantFiles />
        </div>

        <div className="col-md-6 well">
          <h1>Getting Started</h1>
          <ImportantLinks />
        </div>
      </div>
    </div>
  </section>
);
export default FilesAndLinksContainer;
