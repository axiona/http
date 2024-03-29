import Response from './response.js';
import {CreateParameter} from './create.js';

export function NotImplementedParameters() : NotImplementedResponse<undefined>;

export function NotImplementedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotImplementedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function NotImplementedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : NotImplementedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return NotImplementedParameter({message, headers, body}) as NotImplementedResponse as NotImplementedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type NotImplementedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 501, Message>


export function NotImplementedParameter() : NotImplementedResponse<undefined>;

export function NotImplementedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<NotImplementedResponse<Body, Headers, Message>, 'status'>>,
) : NotImplementedResponse<Body, Headers, Message>;

export function NotImplementedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<NotImplementedResponse<Body, Headers, Message>, 'status'>> = {},
) : NotImplementedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 501}) as NotImplementedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace NotImplemented {
    export const Parameters = NotImplementedParameters;
    export const Parameter = NotImplementedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = NotImplementedResponse<
        Body,
        Headers,
        Message
    >;
}
export default NotImplemented;
