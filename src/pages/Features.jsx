import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaRobot, FaChartLine, FaShieldAlt, FaMobileAlt, FaExchangeAlt, FaBell, FaLock, FaCode } from 'react-icons/fa';

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

// Features Grid Section
const FeaturesSection = styled.section`
  padding: var(--space-3xl) 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-lg);
  
  span {
    color: var(--primary);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  padding: var(--space-xl);
  box-shadow: 0 4px 20px var(--shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--shadow);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-md);
  color: var(--text-light);
  font-size: 1.75rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: var(--space-sm);
  font-size: var(--fs-xl);
`;

const FeatureDescription = styled.p`
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 0;
`;

// Detailed Feature Sections
const DetailedFeatureSection = styled.section`
  padding: var(--space-3xl) 0;
  background-color: ${props => props.bgAlt ? 'var(--background-alt)' : 'var(--background)'};
`;

const DetailedFeatureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureContent = styled.div`
  order: ${props => props.imageFirst ? 2 : 1};
  
  @media (max-width: 768px) {
    order: 2;
    text-align: center;
  }
`;

const FeatureImage = styled(motion.div)`
  order: ${props => props.imageFirst ? 1 : 2};
  
  img {
    width: 100%;
    max-width: 500px;
    border-radius: var(--radius-md);
    box-shadow: 0 10px 30px var(--shadow);
  }
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: var(--space-xl);
    display: flex;
    justify-content: center;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--space-lg) 0 0;
  
  li {
    margin-bottom: var(--space-md);
    display: flex;
    align-items: flex-start;
    
    @media (max-width: 768px) {
      text-align: left;
    }
  }
`;

const FeatureListIcon = styled.span`
  color: var(--secondary);
  margin-right: var(--space-sm);
  font-size: 1.25rem;
  flex-shrink: 0;
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

const CTAButton = styled(motion.a)`
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

const Features = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <PageContainer>
      <HeroSection>
        <HeroContainer>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advanced Features for Modern Trading
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how QuantumTrade's cutting-edge technology can transform your trading strategy
          </HeroSubtitle>
        </HeroContainer>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Core <span>Features</span></SectionTitle>
        
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
          
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <FeatureIcon>
              <FaExchangeAlt />
            </FeatureIcon>
            <FeatureTitle>Multi-Exchange Support</FeatureTitle>
            <FeatureDescription>
              Connect to multiple cryptocurrency exchanges through our secure API integration system.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            <FeatureIcon>
              <FaBell />
            </FeatureIcon>
            <FeatureTitle>Real-time Alerts</FeatureTitle>
            <FeatureDescription>
              Receive instant notifications about market changes, executed trades, and performance milestones.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <DetailedFeatureSection bgAlt={true}>
        <SectionTitle>AI-Powered <span>Trading</span></SectionTitle>
        
        <DetailedFeatureContainer>
          <FeatureContent>
            <h3>Harness the Power of Artificial Intelligence</h3>
            <p>
              QuantumTrade's AI-powered trading system uses advanced machine learning algorithms to analyze market data, identify patterns, and execute trades with precision timing.
            </p>
            <FeatureList>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Pattern recognition algorithms that identify profitable trading opportunities</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Predictive analytics that forecast market movements with high accuracy</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Adaptive learning that improves strategy performance over time</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Sentiment analysis of news and social media to gauge market sentiment</div>
              </li>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img src="/src/assets/ai-trading.svg" alt="AI-Powered Trading" />
          </FeatureImage>
        </DetailedFeatureContainer>
      </DetailedFeatureSection>
      
      <DetailedFeatureSection>
        <SectionTitle>Advanced <span>Analytics</span></SectionTitle>
        
        <DetailedFeatureContainer>
          <FeatureImage
            imageFirst={true}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img src="/src/assets/analytics.svg" alt="Advanced Analytics" />
          </FeatureImage>
          
          <FeatureContent imageFirst={true}>
            <h3>Data-Driven Insights for Informed Decisions</h3>
            <p>
              Our comprehensive analytics dashboard provides you with detailed insights into your trading performance, helping you make informed decisions and optimize your strategy.
            </p>
            <FeatureList>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Real-time performance tracking with customizable metrics</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Historical data analysis to identify trends and patterns</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Comparative benchmarking against market indices</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaChartLine />
                </FeatureListIcon>
                <div>Detailed trade logs with entry/exit points and rationale</div>
              </li>
            </FeatureList>
          </FeatureContent>
        </DetailedFeatureContainer>
      </DetailedFeatureSection>
      
      <DetailedFeatureSection bgAlt={true}>
        <SectionTitle>Risk <span>Management</span></SectionTitle>
        
        <DetailedFeatureContainer>
          <FeatureContent>
            <h3>Protect Your Investments with Smart Risk Controls</h3>
            <p>
              QuantumTrade includes sophisticated risk management features designed to protect your capital and minimize losses in volatile market conditions.
            </p>
            <FeatureList>
              <li>
                <FeatureListIcon>
                  <FaShieldAlt />
                </FeatureListIcon>
                <div>Customizable stop-loss and take-profit parameters</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaShieldAlt />
                </FeatureListIcon>
                <div>Position sizing algorithms based on account balance and risk tolerance</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaShieldAlt />
                </FeatureListIcon>
                <div>Volatility-based risk adjustments that adapt to market conditions</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaShieldAlt />
                </FeatureListIcon>
                <div>Emergency shutdown protocols for extreme market events</div>
              </li>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img src="/src/assets/risk-management.svg" alt="Risk Management" />
          </FeatureImage>
        </DetailedFeatureContainer>
      </DetailedFeatureSection>
      
      <DetailedFeatureSection>
        <SectionTitle>Developer <span>API</span></SectionTitle>
        
        <DetailedFeatureContainer>
          <FeatureImage
            imageFirst={true}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img src="/src/assets/developer-api.svg" alt="Developer API" />
          </FeatureImage>
          
          <FeatureContent imageFirst={true}>
            <h3>Extend and Customize with Our Developer API</h3>
            <p>
              For advanced users, our comprehensive API allows you to extend QuantumTrade's functionality and integrate it with your existing trading systems.
            </p>
            <FeatureList>
              <li>
                <FeatureListIcon>
                  <FaCode />
                </FeatureListIcon>
                <div>RESTful API with comprehensive documentation</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaCode />
                </FeatureListIcon>
                <div>Webhook integrations for event-driven applications</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaCode />
                </FeatureListIcon>
                <div>Custom strategy implementation using our SDK</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaCode />
                </FeatureListIcon>
                <div>Data export capabilities for external analysis</div>
              </li>
            </FeatureList>
          </FeatureContent>
        </DetailedFeatureContainer>
      </DetailedFeatureSection>
      
      <DetailedFeatureSection bgAlt={true}>
        <SectionTitle>Security <span>Features</span></SectionTitle>
        
        <DetailedFeatureContainer>
          <FeatureContent>
            <h3>Enterprise-Grade Security for Your Peace of Mind</h3>
            <p>
              We take security seriously at QuantumTrade. Our platform incorporates multiple layers of protection to keep your data and assets safe.
            </p>
            <FeatureList>
              <li>
                <FeatureListIcon>
                  <FaLock />
                </FeatureListIcon>
                <div>End-to-end encryption for all data transmissions</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaLock />
                </FeatureListIcon>
                <div>Two-factor authentication for account access</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaLock />
                </FeatureListIcon>
                <div>API key management with granular permission controls</div>
              </li>
              <li>
                <FeatureListIcon>
                  <FaLock />
                </FeatureListIcon>
                <div>Regular security audits and penetration testing</div>
              </li>
            </FeatureList>
          </FeatureContent>
          
          <FeatureImage
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <img src="/src/assets/security.svg" alt="Security Features" />
          </FeatureImage>
        </DetailedFeatureContainer>
      </DetailedFeatureSection>
      
      <CTASection>
        <CTAContainer>
          <CTATitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            Ready to Experience QuantumTrade?
          </CTATitle>
          <CTAText
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.1 }}
          >
            Join thousands of traders who have already discovered the power of our AI-driven trading platform.
          </CTAText>
          <CTAButton
            href="/pricing"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
            View Pricing Plans
          </CTAButton>
        </CTAContainer>
      </CTASection>
    </PageContainer>
  );
};

export default Features;