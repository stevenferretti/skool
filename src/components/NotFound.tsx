import * as React from 'react';
import { withRouter } from 'react-router';

const NotFound = props => {
  return (
    <section>
      <div
        className="row text-center"
        style={{ height: '600px', marginTop: '200px' }}
      >
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">Requested page not found!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(NotFound);
