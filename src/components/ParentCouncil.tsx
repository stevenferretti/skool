import * as React from 'react';

import { Button, Glyphicon, PageHeader } from 'react-bootstrap';
import { withSiteConfig } from '../hocs/withSiteConfig';

class ParentCouncil extends React.Component<any> {
  public render() {
    return (
      <section>
        <div className="container pb-15 pt-15">
          <PageHeader className="text-center">School Parent Council</PageHeader>
          <p>Click the button below to e-mail the School Parent Council</p>
          <Button
            bsSize="large"
            bsStyle="info"
            href={`mailto:${this.props.siteConfig.parentCouncilEmail}`}
          >
            E-Mail School Parent Council &nbsp;
            <Glyphicon glyph="send" />
          </Button>
        </div>
      </section>
    );
  }
}

export default withSiteConfig(ParentCouncil);
