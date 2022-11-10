import { useRouter } from 'next/dist/client/router';
import { NextApiRequest, NextApiResponse } from "next";

import multiparty from "multiparty";

require('dotenv').config()

const sendmail = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, function (err, fields, files) {
            if (err) reject({ err });
            resolve({ fields, files });
        });
    });

    const { origin, destiny, email, phone, subject, message } = fields

    let nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_MAIL_HOST,
        port: process.env.NEXT_PUBLIC_MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_MAIL_USER,
            pass: process.env.NEXT_PUBLIC_MAIL_PASS,
        },
    })


    // EDITE A MENSAGEM AQUI
    const mailData = {
        from: 'email@email.com',
        to: process.env.NEXT_PUBLIC_MAIL_USER,
        subject: `Formulário: Fretamento e Turismo`,
        text: message?.[0],
        html: `
        <h3>Fretamento e Turismo</h3>
        <p><strong>Origem</strong>: ${origin?.[0]}</p>
        <p><strong>Destino</strong>: ${destiny?.[0]}</p>
        <p><strong>E-mail</strong>: ${email?.[0]}</p>
        <p><strong>Telefone</strong>: ${phone?.[0]}</p>
        <p><strong>Assunto</strong>: ${subject?.[0]}</p>
        <p><strong>Mensagem</strong>: ${message?.[0]}</p>
        `
    }
    // -------------------

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    res.status(200).json({ success: true })
}

export default sendmail;
export const config = {
    api: {
        bodyParser: false,
    },
};