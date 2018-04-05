import React from 'react';

export const Functions = () => {
    const fnc = () => { return [<div key={'scopedFunction'}>Scoped Function!</div>]; }; // this is the scoped variable
    return fnc();
};