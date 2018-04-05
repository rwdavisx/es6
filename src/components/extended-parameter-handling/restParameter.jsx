import React from 'react';

export const RestParameter = () => {

    let fnc = (x, y, ...a) => {
        let val = (x + y) * a.length;
        let output = `Rest Parameter: ${val}`;
        console.log(output);
    };
    fnc(2,3,'dog','cat','bird');

    return [<div key={'restParameter'}>Rest Parameter</div>];
};