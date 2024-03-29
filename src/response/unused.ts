import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnusedParameters() : UnusedResponse<undefined>;

export function UnusedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnusedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnusedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnusedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnusedParameter({message, headers, body}) as UnusedResponse as UnusedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UnusedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 306, Message>


export function UnusedParameter() : UnusedResponse<undefined>;

export function UnusedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnusedResponse<Body, Headers, Message>, 'status'>>,
) : UnusedResponse<Body, Headers, Message>;

export function UnusedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnusedResponse<Body, Headers, Message>, 'status'>> = {},
) : UnusedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 306}) as UnusedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Unused {
    export const Parameters = UnusedParameters;
    export const Parameter = UnusedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnusedResponse<
        Body,
        Headers,
        Message
    >;
}
export default Unused;
