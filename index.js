// Get absolute path of file from relative path in Node.js

// 👇️ if using ES6 Modules syntax
import {resolve} from 'path';

const absolutePath = resolve('./another-file.js');

// 👇️ "/home/borislav/Desktop/bobbyhadz-js/another-file"
console.log(absolutePath);
