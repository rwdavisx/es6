import React from 'react';

export const LexicalThis = () => {
    this.nums = [1,2,3,4,5];
    this.fives = [];
    this.nums.forEach((v) => {
        if (v % 5 === 0)
            this.fives.push(v);
    });
    let output = `Lexical This: ${this.nums} ${this.fives}`;
    console.log(output);

    return [<div key={'LexicalThis'}>LexicalThis</div>];
};