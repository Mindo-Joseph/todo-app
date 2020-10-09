/* eslint-disable no-param-reassign */
const validate = (input) => {
  if (/^\s/.test(input.value)) {
    input.value = '';
  }
};
export default validate;
