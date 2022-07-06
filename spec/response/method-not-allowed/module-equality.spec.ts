import {MethodNotAllowedParameter, MethodNotAllowedParameters} from '../../../dist/response/method-not-allowed.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = MethodNotAllowedParameter({
            body,
            message,
            headers
        });

        let parameters = MethodNotAllowedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


