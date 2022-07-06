import {ResetContentParameter, ResetContentParameters} from '../../../dist/response/reset-content.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = ResetContentParameter({
            body,
            message,
            headers
        });

        let parameters = ResetContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


