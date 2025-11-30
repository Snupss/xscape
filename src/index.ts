import { regexEscape } from "./escape-regex";

const createTagFunction = (func: (arg:string) => string) => {
    return (strings: TemplateStringsArray, ...substitutions: string[]) => {
        return String.raw({ raw: strings }, ...substitutions?.map(s => func(s)));
    }
}

export const $uri = createTagFunction(encodeURIComponent);
export const $regex = createTagFunction(regexEscape);

export const Xscape = {
    uri: encodeURIComponent,
    regex: regexEscape
}