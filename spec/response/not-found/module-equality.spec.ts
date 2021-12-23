import NotFoundParameters from "../../../dist/response/not-found-parameters";
import NotFoundParameter from "../../../dist/response/not-found-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = NotFoundParameter({
            body,
            message,
            headers
        });

        let parameters = NotFoundParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

