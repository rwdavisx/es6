import React from 'react';

export const StatementBodies = () => {
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let evens = [];
    numbers.forEach(v => {
        if (v % 2 === 0)
            evens.push(v);
    });
    let output = `Statement Bodies: ${evens}`;
    console.log(output);

    return [<div key={'StatementBodies'}>StatementBodies</div>];
};