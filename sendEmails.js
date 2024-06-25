const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
require('dotenv').config();

// Set up email credentials from environment variables
const senderEmail = process.env.SENDER_EMAIL;
const senderPassword = process.env.SENDER_PASSWORD;
const smtpServer = 'smtp.gmail.com';
const smtpPort = 587;

// Read email template
const emailTemplatePath = path.join(__dirname, 'email_template.html');
let emailTemplate = fs.readFileSync(emailTemplatePath, 'utf8');

// Function to read CSV file and return a promise
const readCSV = (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

// Set up transporter
const transporter = nodemailer.createTransport({
    host: smtpServer,
    port: smtpPort,
    secure: false, // or 'STARTTLS'
    auth: {
        user: senderEmail,
        pass: senderPassword,
    },
});

// Function to send email
const sendEmail = async (recipient) => {
    // Replace placeholder with recipient's name
    const personalizedHtml = emailTemplate.replace(/{{name}}/g, recipient.name);

    // Set up email options
    const emailOptions = {
        from: senderEmail,
        to: recipient.email,
        subject: 'Enhance Your Customer Interaction with Custom Chatbots',
        html: personalizedHtml,
    };

    // Log the email content for debugging
    console.log('Sending email to:', recipient.email);
    console.log('Email content:', personalizedHtml);

    try {
        const info = await transporter.sendMail(emailOptions);
        console.log('Email sent to ' + recipient.email + ':', info.response);
    } catch (error) {
        console.log('Error sending email to ' + recipient.email + ':', error);
    }
};

// Main function to read CSV and send emails
const sendBulkEmails = async () => {
    try {
        const recipients = await readCSV(path.join(__dirname, 'emails.csv'));
        for (const recipient of recipients) {
            await sendEmail(recipient);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

// Run the script
sendBulkEmails();
