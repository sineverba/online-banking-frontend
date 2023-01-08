/**
 * Return a boolean value.
 * 
 * If some item of required missing from itemToCheck, return true
 * 
 * @param {Object} itemToCheck The item where find required
 * @param {Array} required An array of required fields
 * @returns 
 */
const hasFormErrors = (itemToCheck, required) => {
  if (!itemToCheck) {
    return true;
  }
  // Get the items present inside itemToCheck
  const data = required.filter((item) => itemToCheck[item]);
  // If results is lesser than expected, we missing some data
  return (data.length < required.length);
};

export default hasFormErrors;