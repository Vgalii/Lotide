# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vgalii/lotide`

**Require it:**

`const _ = require('@vgalii/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: a function which accepts an array and returns its first element
* `tail()`: a function which accepts an array and returns the array without its first element
* `middle()`: a function which accepts an array and returns its middle element/ elements
* `assertEqual()`: a function which accepts a string or a number and asserts if they are equal, returning the assert expression
* `assertArrayEqual()`: a function which accepts two arrays and asserts if they are equal, returning the assert expression
* `eqArrays()`: a function which accepts two arrays and checks if they are equal, returning true/ false
* `assertObjectsEqual()`: a function which accepts two objects and asserts if they are equal, returning the assert expression
* `eqObjects()`: a function which accepts two objects and checks if they are equal, returning true/ false
* `countLetters()`: a function which accepts a string and returns an object with keys corresponding to the letters which are in the string and their values represent the number of times certain letter occurs in the string
* `countOnly()`: a function which accepts an array of strings and returns counts for certain subsets of the strings
* `findKey()`: function which accepts an object and a callback function, itterates through the object and returns the first key for which the callback function returns true
* `findKeyByValue()`: a function which accepts an object and a value, iterates throuhg the object and returns the first key with the given value
* `letterPositions()`: a function which accepts a string and returns an object with the amount of times a certain letter appears in the string
* `map()`: a function which accepts an array and a function and returns a new array with results, implemented by that function
* `takeUntil()`: a function which accepts an array and a function, itterates through it and returns a new array whith all the items of that array untill the callback function returns truth
* `without()`: a function which accepts an source array and an array of elenents which need to be removed from the source array. It returns a new array whithout elements which had to be removed