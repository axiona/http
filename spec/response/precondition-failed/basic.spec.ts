import PreconditionFailed from '../../../dist/response/precondition-failed.js';
import Standard from '../../../dist/response/message/string/strict.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        const response = PreconditionFailed.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(412);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        const response = PreconditionFailed.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.status).toBe(412);
        expect(response.message).toBe(Standard(412));

    });

    it('auto message', function() {

        const response = PreconditionFailed.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.status).toBe(412);
        expect(response.message).toBe(Standard(412));

    });

    it('body only', function() {

        const response = PreconditionFailed.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.status).toBe(412);
        expect(response.message).toBe(Standard(412));

    });
});


