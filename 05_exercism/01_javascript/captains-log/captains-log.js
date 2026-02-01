// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  const randomInt = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  return `NCC-${randomInt}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000.0 - 41000.0) + 41000.0;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let Arr = [ 'D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  let random = Arr[Math.floor(Math.random() * Arr.length)]
  return random
}
