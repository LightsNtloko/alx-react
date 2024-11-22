import { fromJS } from 'immutable';

/**
 * Converts a JavaScript object into an Immutable.js Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} - The Immutable.js Map representation of the object.
 */
export default function getImmutableObject(object) {
  return fromJS(object);
}
