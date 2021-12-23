import NonauthoritativeInformationParameters from "../../../dist/response/nonauthoritative-information-parameters";
import NonauthoritativeInformationParameter from "../../../dist/response/nonauthoritative-information-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = NonauthoritativeInformationParameter({
            body,
            message,
            headers
        });

        let parameters = NonauthoritativeInformationParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

