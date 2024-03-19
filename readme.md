# Grapheme-Counter

`Grapheme-Counter` is a JavaScript library that provides functions for giving the "correct" length of any strings bycounting grapheme clusters in strings, accounting for combined emoji sequences and diacritical marks. It offers two main methods of usage: as a standalone function or by extending the `String.prototype` with a `count` property.

## [Documentaion](documentation.md)

## Installation

You can install Grapheme-Counter via npm:

```bash
npm install grapheme-counter
```
Alternatively, you can directly include the GraphemeCounter.js file in your project.

## Usage

Using String.prototype.count Property
```js
// Import and initialize the count property on String.prototype
import { initStringCountProperty } from 'grapheme-counter';
initStringCountProperty();

// Use the count property directly on strings
const text = 'A flag 🏳️‍🌈!!!';
console.log(text.count); // Output: 11
```
Using countCharacters Function-return ({count})
```js
// Import the countCharacters function
import { countCharacters } from 'grapheme-counter';

// Count grapheme clusters in a string
const text = 'A flag 🏳️‍🌈!!!';
const count = countCharacters(text).count;
console.log('Grapheme cluster count:', count); // Output: 11
```


## Examples
<details>
  <summary>Click to view examples</summary>

  <pre><code class="language-javascript">
    const examples = {
        Greek: "Γειά σου Κόσμε",// 14
        Korean: "안녕하세요 세상",// 8
        Hebrew: "שלום עולם",// 9
        Arabic: "مرحبا بالعالم",// 13
        Russian: "Привет, мир",// 11
        Japanese: "こんにちは、世界",// 8
        Chinese: "你好，世界",// 5
        RainbowFlag: "🏳️‍🌈",// 1
        Family: "👨‍👩‍👧‍👦👨‍👨‍👧‍👧👩‍👩‍👦‍👦👩‍👧‍👧👨‍👦‍👦",// 5
        Man: "👨‍",// 1
        Text: "tex  t",// 6
        Click: "̰Click",// 5
        Gujarati: "જૂની ગુજરાતી",// 7
        Sinhala: "දන්නවා",//
        Dream: "rêve",// 4
        Math: "∀x ∈ ℝ: ∑(x_i) = ∫(f(x) dx)",// 27
        EgyptianHieroglyphs: "𓇓𓏏𓈖𓂋 𓆣𓍑𓆓𓎛",// 9
        WavingIntlFlag1:"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",// 1
        WavingIntlFlag2:"🏴",// 1
        BlackFlag: "🏴",// 1
        testSinhala: "ඐ" // 1
    };

    for (const [language, str] of Object.entries(examples)) {
         console.log(`${language}: ${str}:\n ${str.count}`);
    }

  </code></pre>
</details>

## API

* `initStringCountProperty()`
Initializes the count property on the String.prototype, allowing direct usage on strings.

* `countCharacters(str)`
Counts the number of grapheme clusters in the input string str, accounting for combined emoji sequences and diacritical marks.

* `str (String)`
The input string to count grapheme clusters in.
Returns an object with the following properties:

* `count (Number)`
The count of grapheme clusters in the input string.
Examples
For more examples, refer to the index.js file in this repository.

## Compatibility
* Requires ECMAScript 6 (ES6) support.
* Compatible with modern browsers and environments that support Unicode regular expressions.
## License
Grapheme Counter is licensed under the MIT License.


## Reporting Issues

If you encounter any bugs, have suggestions for improvements, or would like to request new features, please [open an issue](link-to-issues) on GitHub. When reporting issues, please include detailed information such as:

- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Any error messages or console logs

Your feedback is valuable and helps improve the quality of the project. Thank you for contributing!



## Contributing

We welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your changes (`git checkout -b feature/your-feature-name`).
3. Make your changes and ensure they follow the project's coding style and conventions.
4. Write tests for your changes if applicable (I know, I didn't).
5. Commit your changes with a clear and descriptive message.
6. Push your changes to your fork (`git push origin feature/your-feature-name`).
7. Submit a pull request to the main repository's `main` branch.

Please be respectful and constructive in your interactions with others. We appreciate your contributions and look forward to working with you!
