const nodemailer = require('nodemailer');

const sendEmail = async (name, email, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            auth: {
                user: '[EMAIL]',
                pass: '[PASSWORD]',
            },
        });

        const mailOptions = {
            from: '[EMAIL]',
            to: '[EMAIL]',
            subject: 'New message from Yuri-site Contact',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error
    }
};

module.exports = sendEmail;
