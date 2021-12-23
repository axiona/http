import SwitchingProtocolParameters from "../../../dist/response/switching-protocol-parameters";
import SwitchingProtocolParameter from "../../../dist/response/switching-protocol-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = SwitchingProtocolParameter({
            body,
            message,
            headers
        });

        let parameters = SwitchingProtocolParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

