import { useState } from "react";

export function isRequired(value) {
    return value != null && value.trim().length > 0;
  }
  
  export function isValidPhone(value) {
    var re =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  
    return re.test(value);
  }
  
  export function isValidEmail(value) {
    console.log(value, "email");
    var re =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      console.log(re.test(value), 'test email')
    return re.test(value);
  }
  
  export function validate(validations, values) {
    const errors = validations
      .map((validation) => validation(values))
      .filter((validation) => typeof validation === "object");
    return {
      isValid: errors.length === 0,
      errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {}),
    };
  }



  export  function useForm(initialState = {}, validations = []) {
    const { isValid: initialIsValid, errors: initialErrors } = validate(
      validations,
      initialState
    );
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialErrors);
    const [isValid, setValid] = useState(initialIsValid);
    const [touched, setTouched] = useState({});
    const changeHandler = (event) => {
      const newValues = { ...values, [event.target.name]: event.target.value };
      const { isValid, errors } = validate(validations, newValues);
      setValues(newValues);
      setValid(isValid);
      setErrors(errors);
      setTouched({ ...touched, [event.target.name]: true });
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      // onSubmit(values);
    };
  
    return { values, changeHandler, isValid, errors, touched, submitHandler };
  }