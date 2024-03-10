#!/usr/bin/env node
/* eslint-disable no-unused-vars */
import { name, getUserName } from './cli.js';

export function howdy() {
  console.log('Welcome to the Brain Games!');
  getUserName(name);
}

export function welldone() {
  console.log(`${'Congratulations,'} ${name}!`);
}
