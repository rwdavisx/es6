import React from 'react';

export const MethodProperties = () => {
    let obj = {
        foo (a, b) {},
        bar (c, d) {},
        meh (x, y, z) {},
    };
    let output = `Method Properties: ${obj}`;
    console.log(output);

    return [<div key={'methodProperties'}>MethodProperties</div>];
};