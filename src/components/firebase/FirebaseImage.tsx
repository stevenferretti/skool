import * as React from 'react';
import { firebaseStorage } from '../../utils/firebase';
// Example: <FirebaseImage path="slide1.jpg" alt="Slide One" />
export default class FirebaseImage extends React.Component<
  IFirebaseImageProps,
  { imageUrl: string }
  > {
  public key: string;
  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    const imageUrl = await firebaseStorage
      .ref('district/school/images/' + this.props.path)
      .getDownloadURL();
    this.setState({ imageUrl });
  }

  public render() {
    if (!this.state) {
      return false;
    }

    if (this.props.link === true) {
      return this.state.imageUrl;
    }

    return (
      this.state.imageUrl && <img src={this.state.imageUrl} {...this.props} />
    );
  }
}

export interface IFirebaseImageProps
  extends Partial<React.ImgHTMLAttributes<HTMLImageElement>> {
  path: string;
  link?: boolean;
}
