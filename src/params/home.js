/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return /(codo|glossario|tereco)/.test(param) || param === '';
}