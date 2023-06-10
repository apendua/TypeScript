//// [jsDocCallbackTagNestedParam.js]
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


//// [jsDocCallbackTagNestedParam.js]
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
    for (var i = 0; i < array.length; i += 1) {
        callback({ value: array[i], index: i });
    }
}


//// [jsDocCallbackTagNestedParam.d.ts]
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
declare function forEach<T>(array: T[], callback: Iterator<T>): void;
type Iterator<T> = (item: {
    value: T;
    index: number;
}) => void;
