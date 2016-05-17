# RuPlu

**Russian words plural form helper**

[![Build Status](https://travis-ci.org/skarankevich/ruplu.svg?branch=master)](https://travis-ci.org/skarankevich/ruplu)

[![NPM](https://nodei.co/npm/ruplu.png?downloads)](https://nodei.co/npm/ruplu/)

## Install
```bash
$ npm install ruplu --save
```

## Usage
```js
var ruplu = require('ruplu');

var cats = ruplu([
  'кошка',  // 1 кошка
  'кошки',  // 2 кошки
  'кошек'   // 5 кошек
]);
```

### Just word
```js
cats(1);  // => 'кошка'
cats(3);  // => 'кошки'
cats(6);  // => 'кошек'
```

### Word with count
```js
cats(1, true);  // => '1 кошка'
cats(3, true);  // => '3 кошки'
cats(6, true);  // => '6 кошек'
```

### Word with count and custom delimiter
```js
cats(1, true, '&nbsp;');  // => '1&nbsp;кошка'
cats(3, true, '_');       // => '3_кошки'
cats(6, true, '*');       // => '6*кошек'
```

## Testing
```bash
$ npm install && npm test
```
