'use strict';
// Load modules

const Stream = require('stream');
const Os = require('os');

class GoodBunyan extends Stream.Writable {
    constructor(logger) {
        super({ objectMode: true, decodeStrings: false });
        this._logger = logger;
    }
    _write(data, encoding, callback) {
        this._logger.info(data);
        callback();
    }
}


module.exports = GoodBunyan;
