import { action, observable } from 'mobx';

class ConfigStore {
  @observable public siteConfig: {};

  @action
  public setSiteConfig = siteConfig => {
    this.siteConfig = siteConfig;
  };
}

const configStore = new ConfigStore();
export default configStore;
