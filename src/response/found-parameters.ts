import Response from "./response";
import FoundParameter from "./found-parameter";
//
// /**
//  * standard message
//  */
// export default function FoundParameters() : Response<302, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function FoundParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<302, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function FoundParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     302,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function FoundParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     302,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function FoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    302,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return FoundParameter({message, headers, body}) as Response as Response<
        302,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
