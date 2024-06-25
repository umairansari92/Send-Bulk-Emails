# Bulk Email Sender

This project allows you to send personalized bulk emails using Node.js, `nodemailer`, and `csv-parser`. The email content is read from an HTML template, and recipient details are imported from a CSV file.

## Features

- Send personalized bulk emails
- Read email content from an HTML template
- Import recipient details from a CSV file
- Configure email credentials using environment variables

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/bulk-email-sender.git
    cd bulk-email-sender
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create an `.env` file in the project root and add your email credentials:

    ```env
    SENDER_EMAIL=your_email@gmail.com
    SENDER_PASSWORD=your_password
    ```

4. Ensure the following files are in the project root:
    - `email_template.html`: The HTML template for the email content.
    - `emails.csv`: A CSV file containing recipient details.

## Files

- `email_template.html`: The HTML template for the email content. Ensure this file is in the project root.
- `emails.csv`: A CSV file containing recipient details. Ensure this file is in the project root.
- `sendBulkEmails.js`: The main script to send bulk emails.
- `.env`: Environment variables (not to be committed).

## Usage

1. Run the script to send emails:

    ```sh
    npm start
    ```

## Dependencies

Ensure the following dependencies are installed in your project:

- Nodemailer: `npm install nodemailer`
- File System: `npm install fs`
- Path: `npm install path`
- CSV Parser: `npm install csv-parser`
- Dotenv: `npm install dotenv`

### Sample `package.json`

Ensure your `package.json` includes the necessary dependencies:


## Environment Variables
Ensure your .env file contains the following:

SENDER_EMAIL=your_email@gmail.com

SENDER_PASSWORD=your_password

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## Contact

For any questions or suggestions, please contact umair.ansari.92@gmail.com.


This `README.md` now includes the MIT License section at the appropriate place, ensuring that the project's licensing information is clearly communicated to users and developers. Adjust placeholders like `your_email@gmail.com`, `your_password`, and `Your Name` with your actual details and information.
