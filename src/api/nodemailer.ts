const nodemailer = require("nodemailer");

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "YOUR_EMAIL@gmail.com",
      pass: "YOUR_PASSWORD",
    },
  });

  const mailOptions = {
    from: email,
    to: "YOUR_EMAIL@gmail.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});
