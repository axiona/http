import Response from './response.js';
import {CreateParameter} from './create.js';

export function UpgradeRequiredParameters() : Response<426, string, {}, undefined>;

export function UpgradeRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    426,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function UpgradeRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    426,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return UpgradeRequiredParameter({message, headers, body}) as Response as Response<
        426,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function UpgradeRequiredParameter() : Response<426, string, {}, undefined>;

export function UpgradeRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<426, Message, Headers, Body>;

export function UpgradeRequiredParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<426, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 426}) as Response<426, Message|string, Headers|{}, Body|undefined>;
}




namespace UpgradeRequired {
    export const Parameters = UpgradeRequiredParameters;
    export const Parameter = UpgradeRequiredParameter;
}
export default UpgradeRequired;
