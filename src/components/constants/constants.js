import React from 'react';

export const Constants = () => {
    const PI = Math.PI;
    let output = `Constants: ${PI}`;
    console.log(output);
    return [<div key={'Constants'}>Constants</div>];
};
