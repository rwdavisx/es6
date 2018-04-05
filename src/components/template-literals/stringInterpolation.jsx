import React from 'react';

/**
 * ntuitive expression interpolation for single-line and multi-line strings. (Notice: don't be confused, Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification)
 * @returns {*[]}
 * @constructor
 */
export const StringInterpolation = () => {
    let customer = {name: "Foo"};
    let card = {amount: 7, product: "Bar", unitprice: 42};
    let output = `Hello ${customer.name},
        want to buy ${card.amount} ${card.product} for
        a total of ${card.amount * card.unitprice} bucks?`;
    console.log(output);

    return [<div key={'stringInterpolation'}>String Interpolation</div>];
};