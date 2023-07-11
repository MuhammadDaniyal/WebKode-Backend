const nodemailer = require("nodemailer")
const Mailgen = require("mailgen")

const EMAIL = "koderzklub@gmail.com";
const PASSWORD = 'wijufkwhayfaakdb'

let nodeConfig = {
    host: "smtp.gmail.com",
    port: 587,
    secure: true, // true for 465, false for other ports
    service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
}

let transporter = nodemailer.createTransport(nodeConfig)

var mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        name: 'KoderzKlub',
        link: 'http://koderzklub.surge.sh/'
    }
});

async function generateMail(teamName,toMail) {
    var response  = {
        body: {
            name: teamName,
            intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };

    // Generate an HTML email with the provided contents
    var emailBody = mailGenerator.generate(response);

    let message = {
        from: EMAIL,
        to: toMail,
        subject: "Register Successfully",
        html: emailBody,
    };
    // send mail
    transporter.sendMail(message)
}

module.exports = generateMail