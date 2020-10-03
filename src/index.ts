import { plate_search } from './plate_search';

interface BlueFlagOptions {
    api_version?: '2020-10-14'
}

const defaultOptions: BlueFlagOptions = {
    api_version: '2020-10-14'
};

export default class BlueFlag {
    api_key: string;
    options: BlueFlagOptions;

    constructor(api_key: string, options?: BlueFlagOptions) {
        this.api_key = api_key;
        this.options = { ...defaultOptions, ...(options || {}) };
    }

    /**
     * Search for a vehicle's registration/number plate.
     */
    async plate_search() {
        return plate_search();
    }
}