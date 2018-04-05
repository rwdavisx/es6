import React from 'react';

export const DefaultParameterValues = (x = 'default', y = 10, z = {default: 'default'}) => {
    let output = `Default Parameter Values: ${x} ${y} ${z}`;
    console.log(output);
    return [<div key={'defaultParameterValues'}>Default Parameter Values</div>];
};