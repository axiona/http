import SplitIdentifier from '../array/split-identifier.js';
import UpperFirst from '@alirya/string/upper-first.js';


export default function DefinitionName(string : string) : string {

    return SplitIdentifier(string).map(s=>UpperFirst(s)).join('');
}
