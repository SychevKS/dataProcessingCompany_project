/* jshint esversion: 6 */
/* jshint strict: false */
/* jshint node: true */
/* jshint browser: true */
/* jshint strict: global */
'use strict';

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
};

const User = {
    name: 'Kirill',
    age: '21',
    ...userStack
};