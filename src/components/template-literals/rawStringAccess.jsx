import React from 'react';

/**
 * Access the raw template string content (backslashes are not interpreted).
 * @returns {*[]}
 * @constructor
 */
export const RawStringAccess = () => {
    let output = String.raw`foo\n${ 42 }bar` === "foo\\n42bar";

    console.log(output);
    return [<div key={'stringInterpolation'}>Raw String Access</div>];
};