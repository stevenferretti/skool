import * as React from 'react';
import LeftMenuContentCenter from '../templates/LeftMenuContentCenter';

export default class AthleticsContainer extends React.Component<any> {
  // Here we could grab specific football stuff from firebase and pass as extra props into leftmenucontentcenter, etc
  // Props to pass in could be header image, page content, etc
  // could load it into firebase by subcategory in object
  // football {about: {content: string, image: url, ...}}
  public render() {
    // tslint:disable-next-line:no-console
    console.log(this.props);
    return <LeftMenuContentCenter {...this.props} />;
  }
}
