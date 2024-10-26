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
