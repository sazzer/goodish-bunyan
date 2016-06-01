'use strict';
// Load modules

const Stream = require('stream');
const Os = require('os');

// Declare internals

const internals = {
    defaults: {
    }
};

class GoodBunyan extends Stream.Writable {
    constructor(endpoint, config) {

        config = config || {};
        const settings = Object.assign({}, internals.defaults, config);

        super({ objectMode: true, decodeStrings: false });
        this._settings = settings;
        this._endpoint = endpoint;
    }
    _write(data, encoding, callback) {
        console.log(data);
        callback();
    }
}


module.exports = GoodBunyan;
