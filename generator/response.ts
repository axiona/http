import * as Fs from "fs";
import UpperFirst from "@dikac/t-string/upper-first";
import {Type} from "./string/replace-content";
import ReplaceFile from "./void/replace-file";
import FileName from "./string/file-name";
import Strict from "../dist/response/message/record/strict";
import StrictString from "../dist/response/message/string/strict";
import StrictType from "../dist/response/code/number/strict";

const path = __dirname + '/../src/response';
const specPath = __dirname + '/../spec/response';
const src = path + '/ok';

const base : Type = {
    code : 200,
    identifier : StrictString(200)
}

for (const [codeR, message] of Object.entries(Strict()) as [StrictType|string, string][]) {

    console.log(`generating ${codeR} ${message}`);

    const replace = {
        code : codeR,
        identifier : StrictString(codeR as StrictType)
    };
        const fileName = FileName(replace.identifier)


    for (const suffix of ['-parameter.ts', '-parameters.ts']) {

        // src
        ReplaceFile(
            src + suffix,
            `${path}/${fileName}${suffix}`,
            base,
            replace
        )
    }

    const infix = FileName(base.identifier);
    const root = `${specPath}/${infix}`;
    const specPaths = Fs.readdirSync(root);

    for (const file of specPaths) {

        const infixR = FileName(replace.identifier);

        const dir = [specPath, infixR].join('/');

        if(!Fs.existsSync(dir)) {

            Fs.mkdir(dir, {recursive: true}, function (error) {
                if (error) {
                    console.log(error)
                }
            });
        }

        ReplaceFile(
            [specPath, infix, file].join('/'),
            [specPath, infixR, file].join('/'),
            base,
            replace
        )
    }

}
