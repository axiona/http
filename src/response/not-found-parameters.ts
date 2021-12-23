import Response from "./response";
import NotFoundParameter from "./not-found-parameter";

export default function NotFoundParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    404,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NotFoundParameter({message, headers, body}) as Response as Response<
        404,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
