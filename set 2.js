/**
 * Set 2
 *
 * This assignment will develop your proficiency with JS's control flows.
 */
/**
 * Shift letter
 *
 * Shift a letter right by the given number.
 * Wrap the letter around if it reaches the end of the alphabet.
 *
 * Examples
 * shiftLetter('A', 0) -> 'A'
 * shiftLetter('A', 2) -> 'C'
 * shiftLetter('Z', 1) -> 'A'
 * shiftLetter('X', 5) -> 'C'
 * shiftLetter(' ', _) -> ' '
 *
 * Note: we use the underscore `_` to denote the presence of a value that is present but irrelevant.
 *
 * @param {string} letter A single uppercase English letter, or a space
 * @param {Number} shift The number by which to shift the letter
 * @returns {string} The letter, shifted appropriately, if a letter, otherwise a space.
 */
function shiftLetter(letter,shift) {
    if (letter === ' ') {
        return' ';
    }
    const base = 'A'.charCodeAt(0)
    const charCode = letter.charCodeAt(0)
    const shiftedCharCode = ((charCode - base + shift) % 26) + base;
    return String.fromCharCode(shiftedCharCode)
}

/**
 * Caesar cipher
 *
 * Apply a shift number to a string of uppercase English letters and spaces.
 *
 * @param {string} message A string of uppercase English letters and/or spaces
 * @param {Number} shift The number by which to shift the letters
 * @returns {string} The message, shifted appropriately.
 */
function caesarCipher(message, shift) {
    shift = shift % 26;
    let result ='';
    for (let i = 0; i <message.length; i++){
        let char = message[i]
        if (char >= 'A' && char <= 'Z') {
            let shiftedCharCode = char.charCodeAt(0) + shift;
            if(shiftedCharCode > 'Z'.charCodeAt(0)) {
                shiftedCharCode = shiftedCharCode - 26;
            }
        result += String.fromCharCode(shiftedCharCode)
        } else {
        result += char;
    }
}
return result;
}

/**
 * Shift by letter
 *
 * Shift a letter to the right using the number equivalent of another letter.
 * The shift letter is any letter from A to Z, where A represents 0, B represents 1, ..., Z represents 25.
 *
 * Examples
 * shiftByLetter('A', 'A') -> 'A'
 * shiftByLetter('A', 'C') -> 'C'
 * shiftByLetter('B', 'K') -> 'L'
 * shiftByLetter(' ', _) -> ' '
 *
 * @param {string} letter A single uppercase English letter, or a space
 * @param {string} letterShift A single uppercase English letter
 * @returns {string} The letter, shifted appropriately
 */
function shiftByLetter(letter, letterShift) {
    if (letter === ' ') return ' ';
    let shiftValue = letterShift.charCodeAt(0) - 'A'.charCodeAt(0);
    let newCharCode = letter.charCodeAt(0) + shiftValue; 
    if (newCharCode > 'Z'.charCodeAt(0)) {
        newCharCode = newCharCode - 26;
    }

    return String.fromCharCode(newCharCode);
}

/**
 * Vigenere cipher
 *
 * Encrypt a message using a keyphrase instead of a static number.
 * Every letter in the message is shifted by the number represented by the respective letter in the key.
 * Spaces are ignored.
 *
 * Example
 * vigenereCipher('A C', 'KEY') -> 'K A'
 *
 * If needed, the keyphrase is extended to match the length of the key.
 * If the key is 'KEY' and the message is 'LONGTEXT', the key will be extended to 'KEYKEYKE'.
 *
 * @param {string} message A string of uppercase English letters and/or spaces
 * @param {string} key A string of uppercase English letters, no spaces. Will not exceed the length of the message.
 * @returns {string} The message, shifted appropriately
 */
function vigenereCipher(message, key) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function shiftChar(char, keyChar) {
        const charIndex = alphabet.indexOf(char);
        const keyIndex = alphabet.indexOf(keyChar);
        return alphabet[(charIndex + keyIndex) % 26];
    }

    let encryptedMessage = ""; 
    let keyIndex = 0; 

    for (let i = 0; i < message.length; i++) {
        if (message[i] === " ") {
            encryptedMessage += " ";
            keyIndex++;
        } else {

            encryptedMessage += shiftChar(message[i], key[keyIndex % key.length]);
            keyIndex++;
        }
    }

    return encryptedMessage
}
