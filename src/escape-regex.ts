export const regexEscape = (value: string) => {
    const result = value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    return result;
}