import BadGatewayParameters from "../../../dist/response/bad-gateway-parameters";
import BadGatewayParameter from "../../../dist/response/bad-gateway-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = BadGatewayParameter({
            body,
            message,
            headers
        });

        let parameters = BadGatewayParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

