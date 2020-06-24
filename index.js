#!/usr/bin/env node
const readline = require('readline')
const gpl2pdn = require('./lib/gpl2pdn.js')

const rl = readline.createInterface({
  input: process.stdin,
  crlfDelay: Infinity
})

rl.on('line', l => console.log(gpl2pdn.parseLine(l)))
rl.on('close', () => process.exit(0))
