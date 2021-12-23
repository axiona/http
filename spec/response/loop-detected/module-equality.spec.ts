import LoopDetectedParameters from "../../../dist/response/loop-detected-parameters";
import LoopDetectedParameter from "../../../dist/response/loop-detected-parameter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("validate data", function() {

    const body = 'data';
    const message = 'data';
    const headers = {etag:'etag data'};


    it("all", function() {

        let parameter = LoopDetectedParameter({
            body,
            message,
            headers
        });

        let parameters = LoopDetectedParameters(message, headers, body);

        expect(parameter).toEqual(parameters);
    });

});

