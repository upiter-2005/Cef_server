const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        // user: "pavel470245@gmail.com",
        // pass: "tkpizlqqrtlpfbwb",
        user: "pavel470245@gmail.com",
        pass: "gwug oxzd ufsa ynps",
      },
      secure: false,
        // service: "gmail",
    });
   
    const mailOptions = {
      from: "Cef Lab <pavel470245@gmail.com>",
      to: "sef.lab.sales@gmail.com",
      subject: "Cef Lab Contact Form request",
      html: `Name: ${name} <br> Phone: ${phone} `,
      //text: `Mail sending`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      } 
    });

    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};
const sendMailPartner = async (req, res) => {
  try {
    const { name, phone, product } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        // user: "pavel470245@gmail.com",
        // pass: "tkpizlqqrtlpfbwb",
        user: "pavel470245@gmail.com",
        pass: "gwug oxzd ufsa ynps",
      },
      secure: false,
        // service: "gmail",
    });

    const mailOptions = {
      from: "Cef Lab <pavel470245@gmail.com>",
      to: "pavel470245@gmail.com, sef.lab.sales@gmail.com",
      subject: "Sic Volo Form request",
      html: `Name: ${name} <br> Phone: ${phone} <br> Product: ${product} `,
      //text: `Mail sending`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      } 
    });

    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};

module.exports = {
  sendMail,
  sendMailPartner
};
