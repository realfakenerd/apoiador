import { json } from "@sveltejs/kit";
import { createTransport } from 'nodemailer';
import type { RequestHandler } from "./$types";

export const POST = (async () => {

    const transporter = createTransport({
        host: 'outlook.office365.com',
        port: 995,
        secure: true,
        service: 'Outlook365',
        tls: {ciphers: "SSLv3"},
        auth: {
            user: 'apoio2.captacao@apsa.com.br',
            pass: 'Ferm1Parad0x#'
        }
    })

    console.log(transporter);
    
    const message = await transporter.sendMail({
        from: 'apoio2.captacao@apsa.com.br',
        to: 'mensageiro.captacao@apsa.com.br',
        subject: 'hello world',
        text: 'hello world'
    })
    console.log(message.messageId, message);
    
    return json({})
}) satisfies RequestHandler;