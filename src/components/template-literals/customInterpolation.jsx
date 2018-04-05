import React from 'react';

/**
 * Flexible expression interpolation for arbitrary methods.
 * @returns {*[]}
 * @constructor
 */
export const CustomInterpolation = () => {
    let bar = 1;
    let baz = 3;
    let quux = 'meh';
    let output = `http://example.com/foo?bar=${bar + baz}&quux=${quux}`;
    console.log(output);

    return [<div key={'customInterpolation'}>Custom Interpolation</div>];
};