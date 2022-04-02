const nodemailer = require("nodemailer");
const sendContactMail = async (to, subject, text, html) => {
  const transporter = await nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: "dev.rajeswar@outlook.com",
      pass: "rmaadj@4045",
    },
  });
  let option = {
    from: "dev.rajeswar@outlook.com",
    to,
    subject,
    text,
    html,
  };
  await transporter.sendMail(option);
};
module.exports = { sendContactMail };
