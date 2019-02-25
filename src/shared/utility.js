

export const updateObject = (oldObject, updateProperties) => {
    return{
        ...oldObject,
        ...updateProperties
    }
}


export const checkValidity= (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLenght) {
      isValid = value.length >= rules.minLenght && isValid;
    }

    if (rules.maxLenght) {
      isValid = value.length <= rules.maxLenght && isValid;
    }

    if (rules.isEmail) {
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^0|[1-9]\d*$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }