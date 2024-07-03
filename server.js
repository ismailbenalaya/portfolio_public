const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log('Server running on port 5000'));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mohamedbenalaya76@gmail.com",
        pass: 'zoqgijnqhjeilngs'
    },
    tls: {
        rejectUnauthorized: false
    }
});


contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/postContact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const mail = {
        from: firstName,
        to: "mohamedbenalaya76@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${firstName}</p>
               <p>Last Name: ${lastName}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ code: 500, status: "Error sending message", error: error.message });
        } else {
            res.status(200).json({ code: 200, status: "Message Sent" });
        }
    });
});
