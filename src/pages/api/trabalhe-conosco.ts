import { useRouter } from 'next/dist/client/router';
import { NextApiRequest, NextApiResponse } from "next";

import multiparty from "multiparty";

require('dotenv').config()

const sendemail = async (req: NextApiRequest, res: NextApiResponse) => {
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, function (err, fields, files) {
            if (err) reject({ err });
            resolve({ fields, files });
        });
    });

    const { interestArea, name, phone, message } = fields
    const filename = files.filename?.[0]['originalFilename']
    const path = files.filename?.[0]['path']

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
        subject: `Formulário: Trabalhe Conosco`,
        text: message?.[0],
        html: `
        <h3>Trabalhe Conosco</h3>
        <p><strong>Área de interesse</strong>: ${interestArea?.[0]}</p>
        <p><strong>Nome</strong>: ${name?.[0]}</p>
        <p><strong>Telefone</strong>: ${phone?.[0]}</p>
        <p><strong>Mensagem</strong>: ${message?.[0]}</p>
        `,
        attachments: [{
            filename: filename,
            path: path
        }],
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

export default sendemail;
export const config = {
    api: {
        bodyParser: false,
    },
};