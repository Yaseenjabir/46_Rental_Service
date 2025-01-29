import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_NODE_EMAIL,
        pass: process.env.NEXT_PUBLIC_ADMIN_NODE_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.NEXT_PUBLIC_ADMIN_NODE_EMAIL,
      subject: "Costumer booking information",
      html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Request</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 20px;
              color: #333;
            }
            .bold {
              font-weight: bold;
            }
            .italic {
              font-style: italic;
            }
            .heading {
              font-size: 1.2em;
              margin-top: 15px;
            }
            .subheading {
              font-size: 1em;
              margin-top: 10px;
            }
            .link {
              color: #007bff;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <p>Hi, I want to book this vehicle:<span class="bold heading">${data.name}</span></p>

          <p class="heading"><span class="bold">CUSTOMER NAME</span> : 
            <span class="italic">${data.guestName}</span>
          </p>

          <p class="heading"><span class="bold">CONTACT</span> : 
            <span class="italic">${data.contact}</span>
          </p>
          <p class="heading"><span class="bold">EMAIL</span> : 
            <span class="italic">${data.email}</span>
          </p>

          <p class="heading"><span class="bold">PICK UP INFORMATION</span></p>
          <p><span class="subheading">Location:</span> ${data.location} </p>
          <p><span class="subheading">Date:</span>${data.date} </p>
          <p><span class="subheading">Time:</span> ${data.time} </p>

          <p class="heading"><span class="bold">REMARKS</span><br>
            <span class="italic">${data.remarks}</span>
          </p>
        </body>
        </html>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Failed to send email", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
