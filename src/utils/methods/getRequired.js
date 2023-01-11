/**
 * 
 * Return only the required fields
 * 
 * 1. Filter where required is true
 * 2. Map (return) only the name
 * 
 * @param {Array} fields 
 * @returns An array of required fields
 */
const getRequired = (fields) =>
  fields.filter((item) => item.required === true).map((item) => item.name);

export default getRequired;
