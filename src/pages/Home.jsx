import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';
import tradingDashboardImg from '../assets/trading-dashboard.png';

// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/src/assets/grid-pattern.svg');
    opacity: 0.1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: var(--text-light);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: var(--space-md);
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-lg);
  max-width: 500px;
  
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: var(--space-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: var(--secondary);
  color: var(--text-light);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
    color: var(--text-light);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: var(--text-light);
  padding: 0.875rem 2rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid var(--text-light);
  display: inline-block;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const HeroImage = styled(motion.div)`
  img {
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius-lg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    margin-top: var(--space-2xl);
    
    img {
      max-width: 400px;
    }
  }
`;

// Features Section
const FeaturesSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-lg);
  
  span {
    color: var(--primary);
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
  font-size: var(--fs-lg);
  color: var(--text-dark);
  opacity: 0.8;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  color: var(--text-light);
  font-size: 1.5rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: var(--space-sm);
  font-size: var(--fs-xl);
`;

const FeatureDescription = styled.p`
  color: var(--text-dark);
  opacity: 0.8;
`;

// How It Works Section
const HowItWorksSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`;

const StepsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const Step = styled(motion.div)`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  align-items: center;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-light);
  
  @media (max-width: 480px) {
    margin: 0 auto var(--space-md);
  }
`;

const StepContent = styled.div`
  h3 {
    margin-bottom: var(--space-sm);
  }
  
  p {
    color: var(--text-dark);
    opacity: 0.8;
  }
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background);
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const TestimonialCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
`;

const TestimonialCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: var(--space-md);
  color: var(--text-dark);
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-light);
  margin-right: var(--space-md);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  h4 {
    margin-bottom: 0.25rem;
    font-size: var(--fs-md);
  }
  
  p {
    font-size: var(--fs-sm);
    color: var(--text-dark);
    opacity: 0.7;
    margin: 0;
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: var(--space-3xl) 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: var(--text-light);
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const CTATitle = styled(motion.h2)`
  margin-bottom: var(--space-md);
  font-size: var(--fs-4xl);
`;

const CTAText = styled(motion.p)`
  margin-bottom: var(--space-xl);
  font-size: var(--fs-lg);
  opacity: 0.9;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Advanced <span>Trading Bot</span> for Modern Investors
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leverage cutting-edge algorithms and machine learning to maximize your trading potential.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <PrimaryButton to="/pricing">Get Started</PrimaryButton>
              <SecondaryButton to="/features">Learn More</SecondaryButton>
            </HeroButtons>
          </HeroText>
          <HeroImage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={tradingDashboardImg} alt="QuantumTrade Dashboard" />
          </HeroImage>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Why Choose <span>QuantumTrade</span></SectionTitle>
        <SectionSubtitle>
          Our advanced trading bot combines powerful algorithms with machine learning to give you the edge in today's markets.
        </SectionSubtitle>
        
        <FeaturesGrid>
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <FeatureIcon>
              <FaRobot />
            </FeatureIcon>
            <FeatureTitle>AI-Powered Trading</FeatureTitle>
            <FeatureDescription>
              Our algorithms analyze market patterns and execute trades with precision timing for optimal results.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            <FeatureIcon>
              <FaChartLine />
            </FeatureIcon>
            <FeatureTitle>Advanced Analytics</FeatureTitle>
            <FeatureDescription>
              Get detailed insights and performance metrics to understand your trading strategy's effectiveness.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <FeatureTitle>Risk Management</FeatureTitle>
            <FeatureDescription>
              Built-in safeguards and customizable risk parameters to protect your investments in volatile markets.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <FeatureIcon>
              <FaMobileAlt />
            </FeatureIcon>
            <FeatureTitle>Mobile Access</FeatureTitle>
            <FeatureDescription>
              Monitor and control your trading bot from anywhere with our responsive web and mobile applications.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <HowItWorksSection>
        <SectionTitle>How <span>QuantumTrade</span> Works</SectionTitle>
        <SectionSubtitle>
          Get started in minutes with our simple setup process and start maximizing your trading potential.
        </SectionSubtitle>
        
        <StepsContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <Step variants={fadeIn}>
              <StepNumber>1</StepNumber>
              <StepContent>
                <h3>Create Your Account</h3>
                <p>Sign up and complete our simple verification process to get started with QuantumTrade.</p>
              </StepContent>
            </Step>
            
            <Step variants={fadeIn}>
              <StepNumber>2</StepNumber>
              <StepContent>
                <h3>Connect Your Exchange</h3>
                <p>Securely link your preferred cryptocurrency exchange through our API integration system.</p>
              </StepContent>
            </Step>
            
            <Step variants={fadeIn}>
              <StepNumber>3</StepNumber>
              <StepContent>
                <h3>Configure Your Strategy</h3>
                <p>Choose from our pre-built strategies or customize your own trading parameters and risk levels.</p>
              </StepContent>
            </Step>
            
            <Step variants={fadeIn}>
              <StepNumber>4</StepNumber>
              <StepContent>
                <h3>Activate and Monitor</h3>
                <p>Launch your trading bot and monitor its performance through our comprehensive dashboard.</p>
              </StepContent>
            </Step>
          </motion.div>
        </StepsContainer>
      </HowItWorksSection>
      
      <TestimonialsSection>
        <SectionTitle>What Our <span>Clients Say</span></SectionTitle>
        <SectionSubtitle>
          Don\'t just take our word for it. Here\'s what traders using QuantumTrade have to say.
        </SectionSubtitle>
        
        <TestimonialsContainer>
          <TestimonialCards>
            <TestimonialCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <TestimonialText>
                "QuantumTrade has completely transformed my trading strategy. The AI-powered insights have helped me achieve consistent returns even in volatile markets."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img src="/src/assets/testimonial-1.svg" alt="Sarah J." />
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>Sarah J.</h4>
                  <p>Professional Trader</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              <TestimonialText>
                "As someone new to algorithmic trading, I was amazed at how easy QuantumTrade was to set up. The results have exceeded my expectations, and the customer support is excellent."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img src="/src/assets/testimonial-2.svg" alt="Michael T." />
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>Michael T.</h4>
                  <p>Retail Investor</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <TestimonialText>
                "The risk management features of QuantumTrade are outstanding. I can sleep at night knowing my investments are protected by sophisticated algorithms that respond to market changes."
              </TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  <img src="/src/assets/testimonial-3.svg" alt="David K." />
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>David K.</h4>
                  <p>Fund Manager</p>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialCards>
        </TestimonialsContainer>
      </TestimonialsSection>
      
      <CTASection>
        <CTAContainer>
          <CTATitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Ready to Transform Your Trading?
          </CTATitle>
          <CTAText
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            Join thousands of traders who have already discovered the power of QuantumTrade's AI-driven algorithms.
          </CTAText>
          <CTAButtons
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            <PrimaryButton to="/pricing">Get Started Now</PrimaryButton>
            <SecondaryButton to="/contact">Contact Sales</SecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default Home;