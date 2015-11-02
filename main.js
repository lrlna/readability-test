#! /usr/bin/env node 
var FleschTest = require("./index.js");

var flesch = new FleschTest();

flesch.getWords("This cat is awesome. Show me this cat.")
