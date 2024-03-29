import Response from './response.js';
import {CreateParameter} from './create.js';

export function ExpectationFailedParameters() : ExpectationFailedResponse<undefined>;

export function ExpectationFailedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ExpectationFailedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function ExpectationFailedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : ExpectationFailedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return ExpectationFailedParameter({message, headers, body}) as ExpectationFailedResponse as ExpectationFailedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type ExpectationFailedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 417, Message>


export function ExpectationFailedParameter() : ExpectationFailedResponse<undefined>;

export function ExpectationFailedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<ExpectationFailedResponse<Body, Headers, Message>, 'status'>>,
) : ExpectationFailedResponse<Body, Headers, Message>;

export function ExpectationFailedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<ExpectationFailedResponse<Body, Headers, Message>, 'status'>> = {},
) : ExpectationFailedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 417}) as ExpectationFailedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace ExpectationFailed {
    export const Parameters = ExpectationFailedParameters;
    export const Parameter = ExpectationFailedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = ExpectationFailedResponse<
        Body,
        Headers,
        Message
    >;
}
export default ExpectationFailed;
