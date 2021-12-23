import NotExtendedParameters from "../../../dist/response/not-extended-parameters";
import NotExtendedParameter from "../../../dist/response/not-extended-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = NotExtendedParameter({
            body,
            message,
            headers
        });

        let parameters = NotExtendedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

