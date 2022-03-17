const nodemailer = require('nodemailer');

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'rebeka.eichmann62@ethereal.email',
      pass: 'xpKPGqRKsPzSM7w4JA'
    }
  });

  let info = await transporter.sendMail({
    from: '"Coding Addict 👻" <itaf2@interia.pl>', // sender address
    to: "user@user.com", // list of receivers
    subject: "Testing Email", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Testing Email</b>", // html body
  });
}

module.exports = sendEmail;