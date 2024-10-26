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
