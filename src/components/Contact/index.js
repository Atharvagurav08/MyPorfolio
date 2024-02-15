import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;
const Contact = () => {
  // Hooks
  const [open, setOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false); // Add state to track form submission
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const userEmail = formData.get('from_email'); // Get user's email from form data

    // Prepare the email data
    const emailData = {
      ...Object.fromEntries(formData.entries()), // Convert FormData to object
      to_email: userEmail, // Use the user's email as the recipient
    };

    // Send the email
    emailjs.send('service_01mlvhl', 'template_8339q6q', emailData, 'luRRjF2jKgwIpDbMg')
      .then(() => {
        // Email sent successfully
        setOpen(true); // Show success message
        form.current.reset(); // Reset the form
        console.log('Email sent successfully');
      })
      .catch((error) => {
        // Error sending email
        console.error('Error sending email:', error.text);
      });
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(form.current);
  //   const userEmail = formData.get('from_email'); // Get user's email from form data
    
  //   if (!userEmail) {
  //     console.error('User email not found in form data');
  //     return;
  //   }
  
  //   // Add the user's email to the FormData object
  //   formData.append('to_email', userEmail);
  
  //   // Send both initial email and auto-reply using a single call to emailjs.sendForm
  //   emailjs.sendForm('service_01mlvhl', 'template_8339q6q', e.target, 'luRRjF2jKgwIpDbMg') // Use e.target instead of formData
  //     .then((result) => {
  //       // Both emails sent successfully
  //       setOpen(true); // Show success message
  //       form.current.reset(); // Reset the form
  //       console.log('Initial email and auto-reply sent successfully');
  //     })
  //     .catch((error) => {
  //       // Error handling
  //       console.error('Error sending email:', error.text);
  //     });
  // };
  
  




  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(form.current);
  //   const userEmail = formData.get('from_email'); // Get user's email from form data
    
  //   // Add the user's email to the FormData object
  //   formData.append('to_email', userEmail);
  
  //   // Send both initial email and auto-reply using a single call to emailjs.sendForm
  //   emailjs.sendForm('service_01mlvhl', 'template_8339q6q', formData, 'luRRjF2jKgwIpDbMg')
  //     .then((result) => {
  //       // Both emails sent successfully
  //       setOpen(true); // Show success message
  //       form.current.reset(); // Reset the form
  //       console.log('Initial email and auto-reply sent successfully');
  //     })
  //     .catch((error) => {
  //       // Error handling
  //       console.error('Error sending email:', error.text);
  //     });
  // };
  
  





  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (isSubmitting) return; // Prevent multiple submissions
    
  //   setIsSubmitting(true); // Set submitting flag to true
  //   const formData = new FormData(form.current);

  //   // Send the initial email
  //   emailjs.sendForm('service_01mlvhl', 'template_8339q6q', form.current, 'luRRjF2jKgwIpDbMg')
  //     .then((result) => {
  //       // Initial email sent successfully
  //       setOpen(true); // Show success message
  //       form.current.reset(); // Reset the form
        
  //       // Extract the user's email from the form data
  //       const userEmail = formData.get('from_email');
        
  //       // Prepare the auto-reply email data
  //       const autoReplyData = {
  //         to_email: userEmail, // Use the user's email as the recipient
  //         // Add other relevant fields for your auto-reply template
  //         // For example, you can include a predefined message or subject
  //         // You need to set up these fields in your auto-reply template
  //       };

  //       // Send auto-reply email to the user's email
  //       emailjs.send('service_01mlvhl', 'template_8339q6q', autoReplyData, 'luRRjF2jKgwIpDbMg')
  //         .then((result) => {
  //           // Auto-reply email sent successfully
  //           console.log('Auto-reply sent successfully');
  //         }, (error) => {
  //           // Error sending auto-reply email
  //           console.error('Error sending auto-reply:', error.text);
  //         });
  //     })
  //     .catch((error) => {
  //       // Error sending initial email
  //       console.error('Error sending email:', error.text);
  //     })
  //     .finally(() => {
  //       setIsSubmitting(false); // Reset submitting flag after completion
  //     });
  // };


  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;