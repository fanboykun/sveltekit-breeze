import { Validator, type finalValidationResult, type validateType, type validated } from "ts-input-validator"

export const createUserValidation = (data: FormData) : finalValidationResult => {
    const email = data.get('email')
    const name = data.get('name')
    const password = data.get('password')
    const confirm_password = data.get('confirm_password')

    const validationInput: validateType[] = [
        { data: email, key: 'email', rules: ['required', 'email'] },
        { data: name, key: 'name', rules: ['required', 'string'] },
        { data: password, key: 'password', rules: ['required', 'password'] },
        { data: confirm_password, key: 'confirm_password', rules: ['required', 'password', `equalTo:${password}`], message: { equalTo: 'password did not match' } },
    ]
   
    return Validator.validate(validationInput)
}

export const loginUserValidation = (data: FormData) : finalValidationResult => {
    const email = data.get('email')
    const password = data.get('password')

    const validationInput: validateType[] = [
        { data: email, key: 'email', rules: ['required', 'email'] },
        { data: password, key: 'password', rules: ['required'] },
    ]
   
    return Validator.validate(validationInput)
}

export const updateUserProfileValidation = (data: FormData) : finalValidationResult => {
    const email = data.get('email')
    const name = data.get('name')

    const validationInput: validateType[] = [
        { data: email, key: 'email', rules: ['required', 'email'] },
        { data: name, key: 'name', rules: ['required', 'string'] },
    ]
   
    return Validator.validate(validationInput)
}

export const messageToArray = (message: validated) => {
    const m = []
    for (const key in message) {
        m.push(message[key]);
    }
    return m;
}