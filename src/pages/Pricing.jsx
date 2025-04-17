import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRocket, FaChartLine, FaRobot } from 'react-icons/fa';

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

// Pricing Section
const PricingSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
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

const PricingToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-2xl);
  gap: var(--space-md);
`;

const ToggleOption = styled.span`
  font-weight: 500;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-dark)'};
  opacity: ${props => props.active ? 1 : 0.6};
`;

const ToggleSwitch = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: var(--primary);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 3px;
  left: ${props => props.monthly ? '3px' : '33px'};
  width: 24px;
  height: 24px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
`;

const PricingCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  box-shadow: 0 5px 15px var(--shadow);
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${props => props.popular && `
    border: 2px solid var(--secondary);
    transform: scale(1.05);
    z-index: 1;
    
    @media (max-width: 992px) {
      transform: scale(1);
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px var(--shadow);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 12px;
  right: -30px;
  background-color: var(--secondary);
  color: var(--text-light);
  padding: 5px 40px;
  font-size: var(--fs-sm);
  font-weight: 500;
  transform: rotate(45deg);
`;

const PlanIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: var(--space-md);
`;

const PlanName = styled.h3`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-xs);
`;

const PlanDescription = styled.p`
  font-size: var(--fs-sm);
  color: var(--text-dark);
  opacity: 0.7;
  margin-bottom: var(--space-lg);
`;

const PlanPrice = styled.div`
  margin-bottom: var(--space-lg);
`;

const Price = styled.span`
  font-size: var(--fs-3xl);
  font-weight: 700;
  color: var(--primary);
`;

const PriceDetail = styled.span`
  font-size: var(--fs-sm);
  color: var(--text-dark);
  opacity: 0.7;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: var(--space-xl);
  flex-grow: 1;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-sm);
  font-size: var(--fs-sm);
  
  svg {
    margin-right: var(--space-sm);
    color: ${props => props.included ? 'var(--secondary)' : 'var(--text-dark)'};
    opacity: ${props => props.included ? 1 : 0.5};
  }
`;

const PricingButton = styled(Link)`
  background-color: ${props => props.primary ? 'var(--secondary)' : 'transparent'};
  color: ${props => props.primary ? 'var(--text-light)' : 'var(--primary)'};
  border: 2px solid ${props => props.primary ? 'var(--secondary)' : 'var(--primary)'};
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px var(--shadow);
    background-color: ${props => props.primary ? 'var(--accent)' : 'var(--primary-light)'};
    color: var(--text-light);
  }
`;

// FAQ Section
const FaqSection = styled.section`
  padding: var(--space-3xl) 0;
`;

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
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

// CTA Section
const CtaSection = styled.section`
  background-color: var(--primary);
  color: var(--text-light);
  padding: var(--space-2xl) 0;
  text-align: center;
`;

const CtaContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const CtaTitle = styled.h2`
  margin-bottom: var(--space-md);
`;

const CtaText = styled.p`
  font-size: var(--fs-lg);
  margin-bottom: var(--space-lg);
  opacity: 0.9;
`;

const CtaButton = styled(Link)`
  background-color: var(--secondary);
  color: var(--text-light);
  padding: var(--space-sm) var(--space-xl);
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: var(--fs-lg);
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  
  const togglePricing = () => {
    setMonthly(!monthly);
  };
  
  const pricingPlans = [
    {
      icon: <FaRobot />,
      name: 'Basic',
      description: 'Perfect for beginners and small investors',
      monthlyPrice: 29,
      yearlyPrice: 290,
      popular: false,
      features: [
        { text: 'Basic trading algorithms', included: true },
        { text: 'Market analysis tools', included: true },
        { text: 'Up to 3 trading pairs', included: true },
        { text: 'Email support', included: true },
        { text: 'Advanced risk management', included: false },
        { text: 'API integrations', included: false },
        { text: 'Custom strategies', included: false },
      ],
      buttonText: 'Get Started',
      buttonLink: '/checkout?plan=basic'
    },
    {
      icon: <FaChartLine />,
      name: 'Pro',
      description: 'Ideal for active traders and professionals',
      monthlyPrice: 79,
      yearlyPrice: 790,
      popular: true,
      features: [
        { text: 'Advanced trading algorithms', included: true },
        { text: 'Comprehensive market analysis', included: true },
        { text: 'Up to 10 trading pairs', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Advanced risk management', included: true },
        { text: 'API integrations', included: true },
        { text: 'Custom strategies', included: false },
      ],
      buttonText: 'Get Pro',
      buttonLink: '/checkout?plan=pro'
    },
    {
      icon: <FaRocket />,
      name: 'Enterprise',
      description: 'For institutional investors and funds',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      popular: false,
      features: [
        { text: 'Premium trading algorithms', included: true },
        { text: 'Real-time market analysis', included: true },
        { text: 'Unlimited trading pairs', included: true },
        { text: '24/7 dedicated support', included: true },
        { text: 'Advanced risk management', included: true },
        { text: 'Full API integrations', included: true },
        { text: 'Custom strategies', included: true },
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact'
    }
  ];
  
  const faqs = [
    {
      question: 'How does the QuantumTrade bot work?',
      answer: 'QuantumTrade uses advanced algorithms and machine learning to analyze market trends and execute trades automatically based on predefined strategies. The bot monitors markets 24/7 and makes decisions based on technical indicators and market conditions.'
    },
    {
      question: 'Can I customize the trading strategies?',
      answer: 'Yes, depending on your subscription plan. The Pro and Enterprise plans allow for varying degrees of strategy customization. The Enterprise plan offers fully customizable strategies tailored to your specific trading goals.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 14-day free trial for the Basic plan so you can experience the power of QuantumTrade before committing. No credit card is required for the trial period.'
    },
    {
      question: 'How secure is my trading data?',
      answer: 'Security is our top priority. We use bank-level encryption for all data, implement strict access controls, and never store your exchange API keys in plain text. Our systems undergo regular security audits to ensure your data remains protected.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll continue to have access to your plan until the end of your current billing period.'
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
            Simple, Transparent Pricing
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your trading needs
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>
      
      <PricingSection>
        <PricingContainer>
          <SectionTitle>Our <span>Pricing</span> Plans</SectionTitle>
          <SectionSubtitle>
            Select the plan that fits your trading strategy and investment goals.
            All plans include our core trading technology.
          </SectionSubtitle>
          
          <PricingToggle>
            <ToggleOption active={monthly}>Monthly</ToggleOption>
            <ToggleSwitch onClick={togglePricing}>
              <ToggleButton monthly={monthly} />
            </ToggleSwitch>
            <ToggleOption active={!monthly}>Yearly (Save 20%)</ToggleOption>
          </PricingToggle>
          
          <PricingCards>
            {pricingPlans.map((plan, index) => (
              <PricingCard 
                key={index}
                popular={plan.popular}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && <PopularBadge>POPULAR</PopularBadge>}
                <PlanIcon>{plan.icon}</PlanIcon>
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
                <PlanPrice>
                  <Price>${monthly ? plan.monthlyPrice : plan.yearlyPrice}</Price>
                  <PriceDetail> / {monthly ? 'month' : 'year'}</PriceDetail>
                </PlanPrice>
                <FeaturesList>
                  {plan.features.map((feature, idx) => (
                    <Feature key={idx} included={feature.included}>
                      {feature.included ? <FaCheck /> : <FaTimes />}
                      {feature.text}
                    </Feature>
                  ))}
                </FeaturesList>
                <PricingButton to={plan.buttonLink} primary={plan.popular}>
                  {plan.buttonText}
                </PricingButton>
              </PricingCard>
            ))}
          </PricingCards>
        </PricingContainer>
      </PricingSection>
      
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
      
      <CtaSection>
        <CtaContainer>
          <CtaTitle>Ready to revolutionize your trading?</CtaTitle>
          <CtaText>
            Join thousands of traders who have already improved their results with QuantumTrade.
          </CtaText>
          <CtaButton to="/checkout?plan=pro">Get Started Today</CtaButton>
        </CtaContainer>
      </CtaSection>
    </PageContainer>
  );
};

export default Pricing;