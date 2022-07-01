import EarlyHints from '../../../dist/response/early-hints';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = EarlyHints.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(103);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = EarlyHints.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(103);
        expect(response.message).toBe(Standard(103));

    });

    it('auto message', function() {

        let response = EarlyHints.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(103);
        expect(response.message).toBe(Standard(103));

    });

    it('body only', function() {

        let response = EarlyHints.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(103);
        expect(response.message).toBe(Standard(103));

    });
});


