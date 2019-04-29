import * as React from 'react';
import { firebaseDB } from '../../utils/firebase';
import FirebaseFileLink from '../firebase/FirebaseFileLink';

export default class ImportantFiles extends React.Component<
  {},
  { filesRef: any }
  > {
  public async componentDidMount() {
    const filesRef = await firebaseDB
      .ref('/district/schoolfiles')
      .once('value');
    this.setState({ filesRef });
  }

  public getFilesByCategory() {
    const files: IFirebaseFile[] = this.state ? this.state.filesRef.val() : '';
    const filesByCategory: {
      [category: string]: Array<{ label?: string; path: string }>;
    } = {};
    files.forEach(file => {
      const { category, ...fileWithoutCategory } = file;
      if (filesByCategory[file.category]) {
        filesByCategory[file.category].push(fileWithoutCategory);
      } else {
        filesByCategory[file.category] = [fileWithoutCategory];
      }
    });
    return filesByCategory;
  }

  public render() {
    if (!this.state) {
      return false;
    }
    const files = this.state.filesRef ? this.getFilesByCategory() : undefined;
    return (
      <div>
        {files &&
          Object.keys(files).map(category => (
            <ul key={category}>
              <h3>{category}</h3>
              {files[category].map(file => (
                <li key={file.path}>
                  <FirebaseFileLink {...file} />
                </li>
              ))}
            </ul>
          ))}
      </div>
    );
  }
}

export interface IFirebaseFile {
  category: string;
  label?: string;
  path: string;
}
