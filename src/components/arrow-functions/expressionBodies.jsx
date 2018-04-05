import React from 'react';

export const ExpressionBodies = () => {
    let evens = [0,2,4,6,8];
    let odds = evens.map(v => v + 1);
    let pairs = evens.map(v => ({ even: v, odd: v + 1 }));
    let numbers = evens.map((v, i) => v + i);
    let output = `Expression Bodies: ${odds} ${pairs} ${numbers}`;
    console.log(output);

    return [<div key={'ExpressionBodies'}>ExpressionBodies</div>];
};