import { useRef } from "react";
import { Section, Title, Form, Input, Button, Textarea } from "./ContactStyles";
import emailjs from "@emailjs/browser";
import {
  MY_SERVICE_ID,
  MY_TEMPLATE_ID,
  MY_PUBLIC_KEY,
} from "../../utils/constants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(MY_SERVICE_ID, MY_TEMPLATE_ID, form.current, MY_PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Section id="contact">
      <Title>Contact me</Title>
      <Form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="name" placeholder="Name" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="text" name="subject" placeholder="Subject" required />
        <Textarea name="message" placeholder="Message" required />
        <Button type="submit" aria-label="submit">
          Send
        </Button>
      </Form>
    </Section>
  );
};

export default Contact;
