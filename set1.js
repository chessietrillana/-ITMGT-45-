/**
 * Set 1
 * This assignment will develop your familiarity with doing simple computations in JS.
 */
/**
 * Savings
 * Calculate the money remaining for an employee after taxes and expenses.
 *
 * To get the take-home pay of an employee:
 * 1. Apply the tax rate to the gross pay of the employee, round down.
 * 2. Subtract the expenses from the after-tax pay of the employee.
 *
 * @param {Number} grossPay The gross pay of an employee for a certain time period, expressed in centavos
 * @param {Number} taxRate The tax rate for a certain time period, expressed as a number between 0 and 1 (e.g., 0.12)
 * @param {Number} expenses The expenses of an employee for a certain time period, expressed in centavos
 * @returns {Number} The number of centavos remaining from an employee's pay after taxes and expenses
 */
function savings(grossPay, taxRate, expenses) {
    let afterTaxPay = Math.floor(grossPay * (1-taxRate));
    let remaining = afterTaxPay - expenses; 
    return remaining;
}

/**
 * Material waste
 * Calculate how much material input will be wasted after running a number of jobs that consume a set amount of material.
 *
 * To get the waste of a set of jobs:
 * 1. Multiply the number of jobs by the material consumption per job
 * 2. Subtract the total material consumed from the total material available
 *
 * Format the output as a string, annotated with the units in which the material is expressed. Do not add a space between the number and the unit.
 *
 * @param {Number} totalMaterial
 * @param {string} materialUnits
 * @param {Number} numJobs
 * @param {Number} jobConsumption
 * @returns {string} The amount of remaining material expressed with its unit (e.g., "10kg")
 */
function materialWaste(totalMaterial, materialUnits, numJobs, jobConsumption) {
    let totalConsumed = numJobs * jobConsumption; 
    let remainingMaterial = totalMaterial - totalConsumed; 
    return remainingMaterial + materialUnits;
}
