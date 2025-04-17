import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Page Container
const PageContainer = styled.div`
  padding-top: 80px; // Space for fixed navbar
`;

// Hero Section
const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: var(--text-light);
  padding: var(--space-3xl) 0;
  text-align: center;
`;

const HeroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: var(--space-md);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--fs-xl);
  margin-bottom: 0;
  opacity: 0.9;
`;

// Contact Section
const ContactSection = styled.section`
  padding: var(--space-3xl) 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const ContactTitle = styled.h2`
  margin-bottom: var(--space-lg);
  
  span {
    color: var(--primary);
  }
`;

const ContactText = styled.p`
  margin-bottom: var(--space-lg);
  font-size: var(--fs-md);
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.8;
`;

const ContactMethods = styled.div`
  margin-bottom: var(--space-xl);
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-md);
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-lg);
  margin-right: var(--space-md);
`;

const ContactDetails = styled.div`
  h3 {
    font-size: var(--fs-md);
    margin-bottom: var(--space-xs);
  }
  
  p {
    font-size: var(--fs-sm);
    color: var(--text-dark);
    opacity: 0.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-md);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.div`
  background-color: var(--background);
  border-radius: var(--radius-md);
  box-shadow: 0 5px 20px var(--shadow);
  padding: var(--space-xl);
  
  @media (max-width: 768px) {
    order: 1;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: var(--space-lg);
  
  span {
    color: var(--primary);
  }
`;

const Form = styled.form`
  display: grid;
  gap: var(--space-md);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: var(--space-xs);
  font-size: var(--fs-sm);
  font-weight: 500;
  color: var(--text-dark);
`;

const FormInput = styled.input`
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: var(--fs-md);
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(15, 40, 71, 0.2);
    outline: none;
  }
`;

const FormTextarea = styled.textarea`
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: var(--fs-md);
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(15, 40, 71, 0.2);
    outline: none;
  }
`;

const FormButton = styled.button`
  background-color: var(--primary);
  color: var(--text-light);
  padding: var(--space-md) var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--fs-md);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px var(--shadow);
  }
  
  &:disabled {
    background-color: var(--border);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormSuccess = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-md);
`;

// FAQ Section
const FaqSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`;

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-xl);
  
  span {
    color: var(--primary);
  }
`;

const FaqItem = styled.div`
  margin-bottom: var(--space-lg);
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--space-lg);
  
  &:last-child {
    border-bottom: none;
  }
`;

const FaqQuestion = styled.h3`
  font-size: var(--fs-lg);
  margin-bottom: var(--space-sm);
  color: var(--primary);
`;

const FaqAnswer = styled.p`
  font-size: var(--fs-md);
  line-height: 1.6;
  color: var(--text-dark);
  opacity: 0.8;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setFormError('');
    
    // In a real application, you would send the form data to your backend here
    // For this demo, we\'ll just simulate a successful submission
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  const faqs = [
    {
      question: 'How quickly can I expect a response to my inquiry?',
      answer: 'We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please indicate this in your message subject line.'
    },
    {
      question: 'Do you offer custom solutions for institutional clients?',
      answer: 'Yes, we provide tailored trading solutions for institutional clients. Please contact our sales team through the form, and we\'ll schedule a consultation to discuss your specific requirements.'
    },
    {
      question: 'I\'m experiencing technical issues with my account. What should I do?',
      answer: 'For technical support, please use the contact form and select "Technical Support" as the subject. Include detailed information about the issue you\'re experiencing, and our support team will assist you promptly.'
    },
    {
      question: 'Do you offer in-person demonstrations of your trading platform?',
      answer: 'Yes, for enterprise clients, we can arrange in-person or virtual demonstrations of our trading platform. Please contact our sales team to schedule a demonstration.'
    }
  ];
  
  return (
    <PageContainer>
      <HeroSection>
        <HeroContainer>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We\'re here to answer your questions and provide support
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>
      
      <ContactSection>
        <ContactContainer>
          <ContactInfo>
            <ContactTitle>Get in <span>Touch</span></ContactTitle>
            <ContactText>
              Have questions about our trading solutions or need assistance with your account? 
              Our team is ready to help. Reach out to us using any of the methods below or 
              fill out the contact form, and we\'ll get back to you as soon as possible.
            </ContactText>
            
            <ContactMethods>
              <ContactMethod>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <h3>Email Us</h3>
                  <p>support@quantumtrade.com</p>
                </ContactDetails>
              </ContactMethod>
              
              <ContactMethod>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactDetails>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </ContactDetails>
              </ContactMethod>
              
              <ContactMethod>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactDetails>
                  <h3>Visit Us</h3>
                  <p>123 Trading Street, Financial District<br />New York, NY 10004</p>
                </ContactDetails>
              </ContactMethod>
            </ContactMethods>
            
            <div>
              <h3 style={{ marginBottom: 'var(--space-sm)' }}>Follow Us</h3>
              <SocialLinks>
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialIcon>
              </SocialLinks>
            </div>
          </ContactInfo>
          
          <ContactForm>
            <FormTitle>Send us a <span>Message</span></FormTitle>
            
            {formSubmitted && (
              <FormSuccess>
                Thank you for your message! We\'ll get back to you shortly.
              </FormSuccess>
            )}
            
            {formError && (
              <div style={{ color: 'red', marginBottom: 'var(--space-md)' }}>
                {formError}
              </div>
            )}
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name *</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email *</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormButton type="submit">
                Send Message
              </FormButton>
            </Form>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
      
      <FaqSection>
        <FaqContainer>
          <SectionTitle>Frequently <span>Asked</span> Questions</SectionTitle>
          
          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <FaqQuestion>{faq.question}</FaqQuestion>
              <FaqAnswer>{faq.answer}</FaqAnswer>
            </FaqItem>
          ))}
        </FaqContainer>
      </FaqSection>
    </PageContainer>
  );
};

export default Contact;