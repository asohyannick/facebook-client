export default function ValidateInfo(values) {
    let errors = {};
    if(!values.firstName.trim()) {
        errors.firstName = 'First name must be provided';
    }
    if(!values.middleName.trim()) {
        errors.middleName = 'Middle name must be provided';
    }
    if(!values.lastName.trim()) {
        errors.lastName = 'Last name must be provided';
    }
    if(!values.email.trim()) {
        errors.email = 'email must be required';
    } else if((!/\S+@\S+\.\S+/.test(values.email))) {
        errors.email = 'Email address is invalid';
    }
    if(!values.password) {
        errors.password = 'Password is required';
    } else if(values.password.length < 7) {
        errors.password = 'Password needs to be 7 characters or more';
    }
    if(!values.confirmPassword) {
        errors.confirmPassword = 'Password must be confirmed';
    } else if(values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password do not match'
    }
    if(!values.position.trim()) {
        errors.position = 'Company position must be provided.';
    }
    if(!values.company.trim()) {
        errors.company = 'Company name must be provided.';
    }
    if(!values.image.trim()) {
        errors.image = 'An image or file must be provided.';
    }
    return errors;
}
