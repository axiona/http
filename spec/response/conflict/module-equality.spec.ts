import {ConflictParameter, ConflictParameters} from '../../../dist/response/conflict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ConflictParameter({
            body,
            message,
            headers
        });

        const parameters = ConflictParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


