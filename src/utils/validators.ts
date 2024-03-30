export type ValidatorType = 'required' | 'phone' | 'email'

interface validatorRerutn {
    valid: boolean,
    msg?: string
}

interface ValidatorsFormat {
    [key: string]: (value: string) => validatorRerutn
}

export const validators: ValidatorsFormat = {
    required: required,
    phone: phone,
    email: email
}

function required (value: string): validatorRerutn {
    if (!value) return {
        valid: false,
        msg: 'Ups, este campo es obligatorio'
    }
    return { valid: true }
}

function phone (value: string): validatorRerutn {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,7}$/im
    if (value !== '' && !phoneRegex.test(value)) return {
        valid: false,
        msg: 'Debes ingresar un teléfono válido'
    }
    return { valid: true }
}

function email (value: string): validatorRerutn {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (value !== '' && !emailRegex.test(value)) return {
        valid: false,
        msg: 'El email que ingresaste no es válido'
    }
    return { valid: true }
}