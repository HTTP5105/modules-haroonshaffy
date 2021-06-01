import { theShire } from '../public/another-module.js';
import { buckland } from '../public/another-module.js';

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;

export { theShire, statement };