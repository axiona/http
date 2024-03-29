import Response from './response.js';
import {CreateParameter} from './create.js';

export function CreatedParameters() : CreatedResponse<undefined>;

export function CreatedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : CreatedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function CreatedParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : CreatedResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return CreatedParameter({message, headers, body}) as CreatedResponse as CreatedResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export type CreatedResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 201, Message>


export function CreatedParameter() : CreatedResponse<undefined>;

export function CreatedParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<CreatedResponse<Body, Headers, Message>, 'status'>>,
) : CreatedResponse<Body, Headers, Message>;

export function CreatedParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<CreatedResponse<Body, Headers, Message>, 'status'>> = {},
) : CreatedResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 201}) as CreatedResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace Created {
    export const Parameters = CreatedParameters;
    export const Parameter = CreatedParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = CreatedResponse<
        Body,
        Headers,
        Message
    >;
}
export default Created;
