import { Argon2id } from "oslo/password"
import { Validator, type finalValidationResult, type validateType } from "ts-input-validator"

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const updateUserProfilePasswordValidation = async (data: FormData, existsing_password: string): Promise<finalValidationResult> => {
    const old_password = data.get('old_password')
    const new_password = data.get('new_password')
    const confirm_new_password = data.get('confirm_new_password')

    const validationInput: validateType[] = [
        { data: old_password, key: 'old_password', rules: ['required'] },
        { data: new_password, key: 'name', rules: ['required', 'string', `equalTo:${confirm_new_password}`] },
    ]
    const validationResult =  Validator.validate(validationInput)

    if(old_password != null) {
        const isPasswordMatch = await new Argon2id().verify(existsing_password, old_password as string)
        // const isPasswordMatch = await bcrypt.compare(existsing_password, old_password as string)
    
        if( validationResult[0] || !isPasswordMatch ) {
            if(!isPasswordMatch) {
                if(validationResult[1] == null) validationResult[1] = {}
                validationResult[1].old_password.valid = false
                validationResult[1].old_password.message = { 'equalTo': 'Old Password Did not match' }
            } 
        } 
    }
    return validationResult

}

