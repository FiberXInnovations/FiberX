const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
const EmailAccounts = require('../db/static/email_accounts')
const moment = require('moment');

class Email {
    constructor(hp) {
        this.transport = {};
        this.account = {};
        this.email_temp_data = {}
        this.EMAIL_FILE = ``;
        this.email_type = ''
        this.data = {};
        this.helpers = hp
        
    }

    generalEmail = async(user, subject, msg) => {
        const emailData = {
            'from': 'system@fiberxinovations.com',
            'current_date': new Date(),
            'to': user.email,
            'subject': subject,
            'user_fname': user.fname,
            'user_email': user.email,
            'single_message' : msg,
        }
        const { ustate, umsg } = await this.sendEmail('generalEmail', emailData,);
        console.log(umsg);
        return { ustate, umsg }
    }

    setTransporter() {
        const user = this.account.username;
        const pass = this.account.password;
        const host = this.account.host;
        const port = this.account.port;

        const transport = nodemailer.createTransport({
            host: host, port: port,
            secure: true, debug: true,
            auth: {user: user, pass: pass,},
            //   tls:{ servername : 'mail.fiyalo.com', rejectUnAuthorized:false }
        });

        return transport;
    }

    displayDate(date) { return moment(new Date(date)).format("ddd, MMM Do YYYY, h:mm:ss a") }

    setEmailData(email_type, data) {
        const email_data = EmailAccounts["TEMPLATES"][email_type].required;
        const setData = EmailAccounts["TEMPLATES"][email_type]
        let valid_data = {
            vstate: true,
            vstate: `valid email data`
        }

        for (var r = 0; r < email_data.length; r++) {
            if (this.helpers.isEmpty(data[email_data[r]])) {
                valid_data = {
                    vstate: false,
                    vmsg: `Required field ${email_data[r]} is not provided`
                }
                break
            } else {
                if (email_data[r].includes('date') || email_data[r].includes('time')) {
                    setData[email_data[r]] = this.displayDate(data[email_data[r]]);
                } else {
                    setData[email_data[r]] = data[email_data[r]];
                }
            }
        }
        this.data = setData
        this.email_type = email_type
        return valid_data

    }

    async sendEmail(email_type, data, account = "SYSTEM") {
        this.account = EmailAccounts[account];
        this.transport = this.setTransporter();
        const { vstate, vmsg } = this.setEmailData(email_type, data);
        let response = { umsg: 'Email sent', ustate: true };

        if (!vstate) return { ustate: vstate, umsg: vmsg }

        this.EMAIL_FILE = `../views/emailTemplates/${this.email_type}-temp.ejs`;

        console.log(this.EMAIL_FILE)
        console.log(this.data);
        await ejs.renderFile(path.join(__dirname, this.EMAIL_FILE), this.data,)
            .then(async result => {
                var mailOptions = {
                    from: this.data.from,
                    to: this.data.to,
                    subject: this.data.subject,
                    html: result
                };
                await this.transport.sendMail(mailOptions, function (err, info) {
                    if (err) {
                        response = {
                            umsg: `An Error Occurred, when sending Email ${err.message}`,
                            ustate: false,
                        };
                        console.log(response)
                    } else {
                        let msg = 'Message sent: ' + info.response;
                        response = { umsg: msg, ustate: true };
                        console.log('Message sent: %s', info.messageId);
                    }
                });
            })
            .catch(err => {
                response = {
                    umsg: `An Error Occurred, when sending Email ${err.message}`,
                    ustate: false,
                };
            })

        return response
    }
}

module.exports = Email;
