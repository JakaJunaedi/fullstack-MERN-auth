const nodeMailer = require('nodemailer');

// console log send email
//exports.sendEmail = dataEmail => {
//    console.log(dataEmail)
//}

exports.sendEmail = dataEmail => {
    let transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port:2525,
        secure: false,
        requireTLS: true,
        auth: {
            user: "b9f5cb6711ee53",
            pass: "653be4688ac561",
        }
    });
    return (
        transporter.sendMail(dataEmail)
        .then(info => console.log(`Email terkirim: ${info.message}`))
        .catch(err => console.log(`email gagal: ${err.message}`))
    )
}