import {ExpectationFailedParameter, ExpectationFailedParameters} from '../../../dist/response/expectation-failed';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = ExpectationFailedParameter({
            body,
            message,
            headers
        });

        let parameters = ExpectationFailedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


