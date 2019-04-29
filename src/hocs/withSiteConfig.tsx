import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { firebaseDB } from '../utils/firebase';

export const withSiteConfig = WrappedComponent => {
  return inject('configStore')(
    observer(
      class extends React.Component<any, { siteConfig: {} }> {
        public async componentDidMount() {
          // Grabs Firebase config and store it in global state

          // TODO: make sure this updates properly
          if (!this.props.configStore.siteConfig) {
            const configRef = await firebaseDB
              .ref('/district/schoolgeneral')
              .once('value');
            this.props.configStore.setSiteConfig(configRef.val());
          }
        }

        public render() {
          return (
            <WrappedComponent
              siteConfig={this.props.configStore.siteConfig || {}}
              {...this.props}
            />
          );
        }
      }
    )
  );
};
