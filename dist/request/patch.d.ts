import Request from "./request";
import Method from "./method/method/method";
export default function Patch<Body, Path extends string, Header extends Record<string, string>>(body: Body, path: Path, header: Header): Request<Method.PATCH, Path, Header, Body>;
export default function Patch<Body, Path extends string>(body: Body, path: Path): Request<Method.PATCH, Path, {}, Body>;