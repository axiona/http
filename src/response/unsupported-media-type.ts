import Response from './response.js';
import {CreateParameter} from './create.js';

export function UnsupportedMediaTypeParameters() : UnsupportedMediaTypeResponse<undefined>;

export function UnsupportedMediaTypeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnsupportedMediaTypeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function UnsupportedMediaTypeParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : UnsupportedMediaTypeResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return UnsupportedMediaTypeParameter({message, headers, body}) as UnsupportedMediaTypeResponse as UnsupportedMediaTypeResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type UnsupportedMediaTypeResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 415, Message>


export function UnsupportedMediaTypeParameter() : UnsupportedMediaTypeResponse<undefined>;

export function UnsupportedMediaTypeParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<UnsupportedMediaTypeResponse<Body, Headers, Message>, 'status'>>,
) : UnsupportedMediaTypeResponse<Body, Headers, Message>;

export function UnsupportedMediaTypeParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<UnsupportedMediaTypeResponse<Body, Headers, Message>, 'status'>> = {},
) : UnsupportedMediaTypeResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 415}) as UnsupportedMediaTypeResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace UnsupportedMediaType {
    export const Parameters = UnsupportedMediaTypeParameters;
    export const Parameter = UnsupportedMediaTypeParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = UnsupportedMediaTypeResponse<
        Body,
        Headers,
        Message
    >;
}
export default UnsupportedMediaType;
