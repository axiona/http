import {UseProxyParameter, UseProxyParameters} from '../../../dist/response/use-proxy.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UseProxyParameter({
            body,
            message,
            headers
        });

        const parameters = UseProxyParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


