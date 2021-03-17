import nodemailer from "nodemailer";
import {NodeMailerEmailService} from "../../../src/User/service/imples/NodeMailerEmailService";

require("dotenv").config();
import {Email} from "../../../src/User/service/IEmailService";

const fakeEmail : Email = {
    to : "kaizen.tech404@gmail.com",
    from :  "navrajs703@gmail.com",
    subject : "This is mock email for testing",
    body : "This is good body for mock email to send somewhere"
}

async function test() {
    try {
        const user = await nodemailer.createTestAccount();
        console.log(user);
        const emailService = new NodeMailerEmailService();
        // fakeEmail.from = User.User;
        await emailService.sendEmail(fakeEmail);
    } catch (e) {
        console.log(e);
    }
}

test();