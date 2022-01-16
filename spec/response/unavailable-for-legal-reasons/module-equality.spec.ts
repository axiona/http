import UnavailableForLegalReasonsParameters from '../../../dist/response/unavailable-for-legal-reasons-parameters';
import UnavailableForLegalReasonsParameter from '../../../dist/response/unavailable-for-legal-reasons-parameter';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UnavailableForLegalReasonsParameter({
            body,
            message,
            headers
        });

        let parameters = UnavailableForLegalReasonsParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


