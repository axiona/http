import {ServiceUnavailableParameter, ServiceUnavailableParameters} from '../../../dist/response/service-unavailable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = ServiceUnavailableParameter({
            body,
            message,
            headers
        });

        const parameters = ServiceUnavailableParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


