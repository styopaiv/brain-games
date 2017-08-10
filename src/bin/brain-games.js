#!/usr/bin/env node

import { askName, welcomeUser } from '..';

console.log('Welcome to the Brain Games! \n');

const name = askName();

welcomeUser(name);
