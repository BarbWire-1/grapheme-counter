// best import your preferred function only!
import { initStringCountProperty } from './GraphemeCounter.js';
import { countCharacters } from './GraphemeCounter.js';

// sets <count> on String.prototype - only import and call if desired
initStringCountProperty()

let rainbowFlag = "A flag 🏳️‍🌈!!!";

// Using String.prototype.count
console.log(rainbowFlag.count);//11

// Using countCharacters function return which is {count}
console.log(countCharacters(rainbowFlag).count);// 11
