const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});

const sendFeedbackMail = async (req, res) => {
  try {
    const { email, number, name, message } = req.body;
    console.log("feedback body-->", req.body);
    const mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Thank you for reaching out to us!!!",
      html: `
      <h3>Hi ${name}</h3>
      <p>We appreciate you for reaching out to us. Our team will contact you at the phone number <b>${number}</b>, as provided by you, as soon as possible</p>
      <p>You can read more about our product here - <a href="https://ijirt.org/Article?manuscript=160835">Details</a></p>
      <p>In the mean time, stay well</p>
      <p>Regards</p>
      <h3>Syncrypt Technology</h3>
      `,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error when sending mail-->", error);
        return res
          .status(200)
          .json({ message: "Mail server Error, Try Again later!" });
      } else {
        console.log("Email sent successfully");
        console.log(info);
        return res.status(200).json({ message: "Feedback sent successfully" });
      }
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: `An error occured-->${err?.message}` });
  }
};

module.exports = { sendFeedbackMail };
