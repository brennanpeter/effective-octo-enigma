const fs = require('fs');
const { createFFmpeg, fetchFile } = require('ffmpeg');
const fabric = require("fabric").fabric;

var unique = require('uniq');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

