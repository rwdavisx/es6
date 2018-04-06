import React from 'react';

export const PropertyShorthand = () => {
    let createGame = (name, rating) => {
        return { type: 'Game', name, rating};
    };
    let output = `Property Shorthand: ${createGame('Battlefield 1', 5)}`;
    console.log(output);

  return [<div key={'propertyShorthand'}>Property Shorthand</div>];
};