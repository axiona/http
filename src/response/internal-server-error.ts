import Response from './response.js';
import {CreateParameter} from './create.js';

export function InternalServerErrorParameters() : InternalServerErrorResponse<undefined>;

export function InternalServerErrorParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : InternalServerErrorResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function InternalServerErrorParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : InternalServerErrorResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return InternalServerErrorParameter({message, headers, body}) as InternalServerErrorResponse as InternalServerErrorResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type InternalServerErrorResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 500, Message>


export function InternalServerErrorParameter() : InternalServerErrorResponse<undefined>;

export function InternalServerErrorParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<InternalServerErrorResponse<Body, Headers, Message>, 'status'>>,
) : InternalServerErrorResponse<Body, Headers, Message>;

export function InternalServerErrorParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<InternalServerErrorResponse<Body, Headers, Message>, 'status'>> = {},
) : InternalServerErrorResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 500}) as InternalServerErrorResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace InternalServerError {
    export const Parameters = InternalServerErrorParameters;
    export const Parameter = InternalServerErrorParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = InternalServerErrorResponse<
        Body,
        Headers,
        Message
    >;
}
export default InternalServerError;
