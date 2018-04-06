import React from 'react';

export const ComputedPropertyNames = () => {
    let fnc = () => {return (2*2).toString()};
    let obj = {
        foo: "bar",
        [ "baz" + fnc() ]: 42
    };
    let output = `Computed Property Names: ${obj}`;
    console.log(output);

    return [<div key={'computedPropertyNames'}>Computed Property Names</div>];
};