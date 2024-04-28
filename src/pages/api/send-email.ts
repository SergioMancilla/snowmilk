import type { APIRoute } from "astro"
import { Resend } from 'resend'
import { mailerApiKey, mailerReceiver } from '@conf'

type ContactInfo = {
    name: string,
    email: string,
    phone: string,
    message: string
}

// TODO parametrizar las variables
const apiKey = mailerApiKey
const receiver = mailerReceiver
const resend = new Resend(apiKey)

export const POST: APIRoute = async ({ request }) =>  {
    const emailData: ContactInfo = await request.json();
    
    const emailSent = await sendEmail(emailData)

    return new Response(JSON.stringify({
        status: emailSent
    }))
}

async function sendEmail (contactInfo: ContactInfo) {
    const { data, error } = await resend.emails.send({
        from: contactInfo.email,
        to: [receiver],
        subject: '',
        html: '<p>hola</p>'
    })

    if (error) {
        console.error({error})
        return false
    }

    console.log({data})
    return true
}