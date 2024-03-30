
import { validators } from "./validators"
import type { ValidatorType } from './validators'

type ContactInfo = {
    name: string,
    email: string,
    phone: string,
    message: string
}

interface formObject {
    element: HTMLInputElement,
    name: string
    value: string,
    validators: ValidatorType[]
}

export function handleSubmitForm () {
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', (event) => { manageForm(event) })
}

function manageForm(event: Event) {
    event.preventDefault()

    const formObject = buildFormObject()

    if (validateForm(formObject, validators)) {
        const form = document.querySelector('form')
        const formData = new FormData(form)
        const emailDTO = Object.fromEntries(formData.entries())
        sendForm(emailDTO as ContactInfo)
    }
}

function buildFormObject (): formObject[] {
    const nameInput = document.getElementById('name-control') as HTMLInputElement
    const emailInput = document.getElementById('email-control') as HTMLInputElement
    const phoneInput = document.getElementById('phone-control') as HTMLInputElement
    const messageInput = document.getElementById('message-control') as HTMLInputElement

    /*
    Validators should be in the order in we want to show the error messages
    */
    const formObject: formObject[] = [
        {
            element: nameInput,
            name: 'name',
            value: nameInput.value,
            validators: ['required']
        },
        {
            element: emailInput,
            name: 'email',
            value: emailInput.value,
            validators: ['required', 'email']
        },
        {
            element: phoneInput,
            name: 'phone',
            value: phoneInput.value,
            validators: ['phone']
        },
        {
            element: messageInput,
            name: 'message',
            value: messageInput.value,
            validators: ['required']
        },
    ]

    return formObject
}

function validateForm(formObject: formObject[], formValidators): boolean {
    let isValid = true

    formObject.forEach(field => {
        let fieldErrorMsg = ''
        const fieldValidators = field.validators
        const fieldValid = fieldValidators.every(validator => {
            const result = formValidators[validator](field.value)
            if (!result.valid) {
                isValid = false
                fieldErrorMsg = result.msg
            }
            return result.valid
        })
        if (!fieldValid) showErrorMsg(fieldErrorMsg, field.element)
    })

    return isValid
}

function showErrorMsg (message: string, element: HTMLInputElement) {
    element.classList.add('invalid')
    element.previousElementSibling.innerHTML = message
    element.addEventListener('input', () => removeErrorMsg(element), { once: true })
}

function removeErrorMsg (element: HTMLInputElement) {
    element.classList.remove('invalid')
}

function sendForm(emailDTO: ContactInfo) {
    fetch('api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(emailDTO)
    })
}