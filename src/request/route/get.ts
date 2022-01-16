import Method from '../method/enum/method';
import Route from './route';
import RequestClass from './requesclass';

export default function Get<Path extends string>(
    path : Path
) : Route<Method.GET, Path> {

    return new RequestClass(Method.GET, path);
}
