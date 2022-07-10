import Method from '../request/method/enum/method';
import Route from './route';
import RouteClass from './route-class';

export default function Delete<Path extends string>(
    path : Path
) : Route<Method.DELETE, Path> {

    return new RouteClass(Method.DELETE, path);
}
