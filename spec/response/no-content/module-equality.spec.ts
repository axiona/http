import NoContentParameters from "../../../dist/response/no-content-parameters";
import NoContentParameter from "../../../dist/response/no-content-parameter";
import Standard from "../../../dist/response/message/string/strict";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = NoContentParameter({
            body,
            message,
            headers
        });

        let parameters = NoContentParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});


