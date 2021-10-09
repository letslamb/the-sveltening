/**
 * Detect if a browser supports a CSS property/value combo
 * @param {string} property
 * @param {string} value
 * @returns {boolean}
*/
export function isDeclarationSupported(property: string, value: string): boolean;
/**
 * Filter an array of image objects to output one with only allowed keys
 * @param {Array.<{}>} arrayOfImageObjects
 * @returns {Array.<{format: string, width: (string|number), height: (string|number), src: string}>}
*/
export function filterArrayOfImageObjects(arrayOfImageObjects: Array<{}>): Array<{
    format: string;
    width: (string | number);
    height: (string | number);
    src: string;
}>;
