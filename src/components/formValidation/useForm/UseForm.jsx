import React, {useState, useCallback} from 'react'

const UseForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstName:'',
    middleName:'',
    lastName:'',
    email:'',
    confirmPassword:'',
    position:'',
    company:'',
    image:'',
  });
  const [errors, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setValues({
        ...values,
        [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate(values));
    setIsSubmitting(true);
  };
  const fetchBusinesses  = useCallback(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) {
        callback();
    }
  }, [errors])
  React.useEffect(() => {
   
  },[fetchBusinesses]);
  return {handleChange, handleSubmit, values, errors};
}
export default UseForm;
