import React from 'react';

export const SpreadOperator = () => {

    let params = [3,'boys',[true,false,false]];
    let extended = [6,false, ...params];
    let output = `Spread Operator: ${extended}`;
    console.log(output);

    let str = 'dummy';
    let chars = [...str];
    output = `Spread Operator: ${chars}`;
    console.log(output);

    return [<div key={'spreadOperator'}>Spread Operator</div>];
};