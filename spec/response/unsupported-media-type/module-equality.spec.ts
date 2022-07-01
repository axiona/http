import {UnsupportedMediaTypeParameter, UnsupportedMediaTypeParameters} from '../../../dist/response/unsupported-media-type';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it('all', function() {

        let parameter = UnsupportedMediaTypeParameter({
            body,
            message,
            headers
        });

        let parameters = UnsupportedMediaTypeParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


