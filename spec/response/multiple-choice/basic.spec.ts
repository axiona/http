import MultipleChoice from '../../../dist/response/multiple-choice';
import Standard from '../../../dist/response/message/string/strict';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('validate data', function() {

    it('all', function() {

        let response = MultipleChoice.Parameter({
            body:'data',
            headers:{etag:'etag data'},
            message: 'message'
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(300);
        expect(response.message).toBe('message');

    });

    it('empty', function() {

        let response = MultipleChoice.Parameter();

        expect(response.headers).toEqual({});
        expect(response.body).toBe(undefined);
        expect(response.code).toBe(300);
        expect(response.message).toBe(Standard(300));

    });

    it('auto message', function() {

        let response = MultipleChoice.Parameter({
            body:'data',
            headers:{etag:'etag data'},
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(300);
        expect(response.message).toBe(Standard(300));

    });

    it('body only', function() {

        let response = MultipleChoice.Parameter({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(300);
        expect(response.message).toBe(Standard(300));

    });
});


