/**
 * This helper function returns the updated object. Used in Redux or useReducer
 */
const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export default updateObject;
