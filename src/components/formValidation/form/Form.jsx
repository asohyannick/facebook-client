import React from 'react';
import SignIn from '../../signIn/SignIn';
import FormSuccess from '../formSuccess/FormSuccess';
const Form = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
            {!isSubmitted ? (
                <SignIn submitForm={submitForm}/>
            ) : (
                <FormSuccess/>
            )}   
        </>
    );
};

export default Form;
