import store from './store';

class RootStore {
    constructor() {
        this.store = new store(this);
    }
}

export default RootStore;