import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

export const sendMail = async ({ email, emailType, userId, timestamp }: any) => {
  const hashedToken = await bcryptjs.hash(userId.toString(), 10);
  const expiryTime = timestamp + 3600000;

  if (emailType === "VERIFY") {
    await User.findByIdAndUpdate(userId, {
      verificationToken: hashedToken,
      verificationTokenExpiry: expiryTime,
    });
  } else if (emailType === "RESET") {
    await User.findByIdAndUpdate(userId, {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpire: expiryTime,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // or any other email service
    secure: true, // For TLS
    port: 465, // For SSL
    auth: {
      user: `${process.env.EMAIL}`, // your email
      pass: `${process.env.PASSWORD}`, // your email password or app password
    },
  });
  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: email,
    subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
    text: ``,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error while sending mail", error);
  }
};
