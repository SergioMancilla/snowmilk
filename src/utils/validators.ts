export const validators = {
    required: required
}

function required (value: string): boolean {
    if (!value) return false
    return true
}

function phone (value: string): boolean {
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
}