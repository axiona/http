import {TemporaryRedirectParameters, TemporaryRedirectParameter} from '../../../dist/response/temporary-redirect.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('empty', function() {

    it('parameter', function() {

        const response = TemporaryRedirectParameter();

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = TemporaryRedirectParameters();


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

});


describe('header', function() {

    it('parameter', function() {

        const response = TemporaryRedirectParameter({
            headers:{etag:'etag data'}
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        // @ts-expect-error
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = TemporaryRedirectParameters(undefined, {etag:'etag data'});


        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

});

describe('message', function() {

    it('parameter', function() {

        const response = TemporaryRedirectParameter({
            message: 'etag data'
        });

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        // @ts-expect-error
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

    it('parameters', function() {

        const response = TemporaryRedirectParameters(undefined,{},'etag data');

        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        string = response.body;
        undef = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

});

describe('body', function() {

    it('parameter', function() {

        const response = TemporaryRedirectParameter({
            body:'data',
        });

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;
    });

    it('parameters', function() {

        const response = TemporaryRedirectParameters('data', undefined);

        let record : Record<string, string>;
        let string : string;
        let number : number;
        let undef : undefined;
        let unknown : unknown;

        // @ts-expect-error
        string = response.headers.etag;

        // @ts-expect-error
        number = response.headers;
        // @ts-expect-error
        string = response.headers;
        // @ts-expect-error
        undef = response.headers;
        record = response.headers;

        string = response.body;
        unknown = response.body;

        number = response.status;
        string = response.message;

    });

});

