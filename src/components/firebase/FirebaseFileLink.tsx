import * as React from 'react';
import { firebaseStorage } from '../../utils/firebase';
// Example: <FirebaseFileLink path="cooldocument.pdf" label="Cool Document" />
export default class FirebaseFileLink extends React.Component<
  IFirebaseFileLinkProps,
  { fileUrl: string }
  > {
  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    const fileUrl = await firebaseStorage
      .ref('district/school/documents/' + this.props.path)
      .getDownloadURL();
    this.setState({ fileUrl });
  }

  public render() {
    if (!this.state) {
      return false;
    }

    if (this.props.button) {
      return (
        this.state.fileUrl && (
          <a
            href={this.state.fileUrl}
            className="btn btn-theme-colored font-weight-600 font-11 mt-10"
          >
            More Info
          </a>
        )
      );
    } else {
      return (
        this.state.fileUrl && (
          <a href={this.state.fileUrl} target="_blank">
            {this.props.label || this.props.path}
          </a>
        )
      );
    }
  }
}

export interface IFirebaseFileLinkProps {
  path: string;
  label?: string;
  button?: boolean;
}
