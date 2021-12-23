import SwitchingProtocols from "../../../dist/response/switching-protocols-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    it("header", function() {

        let response = SwitchingProtocols({
            body:'data',
            headers:{etag:'etag data'}
        });

        expect(response.headers.etag).toBe('etag data');
        expect(response.body).toBe('data');
        expect(response.code).toBe(101);
        expect(response.message).toBe(Standard(101));

    });

    it("header", function() {

        let response = SwitchingProtocols({
            body:'data'
        });

        expect(response.headers).toEqual({});
        expect(response.body).toBe('data');
        expect(response.code).toBe(101);
        expect(response.message).toBe(Standard(101));

    });
});

