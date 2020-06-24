# gpl2pdn
converts gimp palettes to [paint.net](https://getpaint.net) palettes
available as a cli and as a package

## installation
`npm install -g gpl2pdn` for the cli and `npm install gpl2pdn` if you just want to include it in  something for some reason

## usage
`cat palette.gpl | gpl2pdn > palette.txt`
or
```js
const gpl2pdn = require('gpl2pdn')

const palette = `GIMP Palette
; whatever
255 255 255`
const output = palette.split('\n').map(gpl2pdn.parseLine)
```