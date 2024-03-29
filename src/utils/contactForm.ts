
export function handleSubmitForm () {
    const submitButton = document.getElementById('submit-button')
    submitButton.addEventListener('click', (event) => { manageForm(event) })
}

function manageForm(event: Event) {
    event.preventDefault()

    const formObject = buildFormObject()

    if (validateForm(formObject)) {
        sendForm()
    }
}

type ValidatorType = 'required' | 'phone' | 'email'

interface formObject {
    name: string
    value: string,
    validators: ValidatorType[]
}

function buildFormObject (): formObject[] {
    const name = document.getElementById('name-control') as HTMLInputElement
    const email = document.getElementById('email-control') as HTMLInputElement
    const phone = document.getElementById('email-control') as HTMLInputElement
    const message = document.getElementById('message-control') as HTMLInputElement

    const formObject: formObject[] = [
        {
            name: 'name',
            value: name.value,
            validators: ['required']
        },
        {
            name: 'email',
            value: email.value,
            validators: ['required', 'email']
        },
        {
            name: 'phone',
            value: phone.value,
            validators: ['phone']
        },
        {
            name: 'message',
            value: message.value,
            validators: ['required']
        },
    ]

    return formObject
}

function validateForm(formObject: formObject[]): boolean {

}

function sendForm() {

}