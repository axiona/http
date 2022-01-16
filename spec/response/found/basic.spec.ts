import Found from '../../../dist/response/found-parameter';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('header', function() {

        let response = Found({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(302);
        expect(response.message).toBe(Standard(302));

    });

    it('header', function() {

        let response = Found({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(302);
        expect(response.message).toBe(Standard(302));

    });
});


