import axios from "axios";

export const emailService = axios.create({
  baseURL: "https://api.emailjs.com/api/v1.0/email/",
});
