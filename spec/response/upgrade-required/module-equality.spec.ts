import {UpgradeRequiredParameter, UpgradeRequiredParameters} from '../../../dist/response/upgrade-required.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data.js', function() {

    const body = 'data.js';
    const message = 'data.js';
    const headers = {etag:'etag data'};


    it('all', function() {

        const parameter = UpgradeRequiredParameter({
            body,
            message,
            headers
        });

        const parameters = UpgradeRequiredParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


