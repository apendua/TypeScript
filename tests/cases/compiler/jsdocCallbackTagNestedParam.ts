// @allowJs: true
// @outDir: dist/
// @declaration: true
// @filename: jsDocCallbackTagNestedParam.js

/**
 * @template T
 * @callback Iterator
 * @param {object} item
 * @param {T} item.value
 * @param {number} item.index
 * @returns {void}
 */

/**
 * @template T
 * @param {T[]} array
 * @param {Iterator<T>} callback
 * @returns {void}
 */
function forEach(array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        callback({ value: array[i], index: i });
    }
}
