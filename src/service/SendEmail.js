import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sarasavi.lern@gmail.com',
      pass: 'gwsqudvnqrwppkof'
    }
});

export async function sendMail(mail, subject, text) {
    const mailOptions = {
        from: 'sarasavi.lern@gmail.com',
        to: mail,
        subject: subject,
        text: text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}
