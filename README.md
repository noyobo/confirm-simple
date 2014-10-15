confirm-simple
==============
[![npm version](http://img.shields.io/npm/v/confirm-simple.svg)](https://www.npmjs.org/package/confirm-simple)
[![npm download](http://img.shields.io/npm/dm/confirm-simple.svg)](https://www.npmjs.org/package/confirm-simple)

[![NPM](https://nodei.co/npm/confirm-simple.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/confirm-simple/)

A simple command-line tool to confirm

## Install

```
$ npm install --save confirm-simple
```

## Api

```
confirm(message, [chose,] callback)
```

## Example

```
var confirm = require('example')

confirm('how are you?', function(ok){
    if(ok){ // ok is boolean
        // I'm crazy
    }
})

```

```
var confirm = require('example')

confirm('how are you?', ['ok', 'cancel'] ,function(ok){
    if(ok){ // ok is boolean
        // I'm crazy
    }
})

```