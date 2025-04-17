import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FaLock, FaCheckCircle, FaCreditCard, FaArrowLeft } from 'react-icons/fa';

// Initialize Stripe (in a real app, you would use your actual publishable key)
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// Page Container
const PageContainer = styled.div`
  padding-top: 80px; // Space for fixed navbar
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

// Checkout Section
const CheckoutSection = styled.section`
  flex: 1;
  padding: var(--space-3xl) 0;
  background-color: var(--background-alt);
`;

const CheckoutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
`;

const CheckoutHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`;

const CheckoutTitle = styled.h1`
  margin-bottom: var(--space-md);
  
  span {
    color: var(--primary);
  }
`;

const CheckoutSubtitle = styled.p`
  font-size: var(--fs-lg);
  color: var(--text-dark);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto;
`;

const CheckoutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OrderSummary = styled.div`
  background-color: var(--background);
  border-radius: var(--radius-md);
  box-shadow: 0 5px 15px var(--shadow);
  padding: var(--space-xl);
  height: fit-content;
  
  @media (max-width: 768px) {
    order: -1;
  }
`;

const SummaryTitle = styled.h2`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border);
`;

const PlanDetails = styled.div`
  margin-bottom: var(--space-lg);
`;

const PlanName = styled.h3`
  font-size: var(--fs-lg);
  color: var(--primary);
  margin-bottom: var(--space-xs);
`;

const PlanDescription = styled.p`
  font-size: var(--fs-sm);
  color: var(--text-dark);
  opacity: 0.7;
  margin-bottom: var(--space-md);
`;

const PlanFeatures = styled.ul`
  list-style: none;
  margin-bottom: var(--space-lg);
`;

const PlanFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: var(--space-xs);
  font-size: var(--fs-sm);
  
  svg {
    color: var(--secondary);
    margin-right: var(--space-sm);
  }
`;

const PricingSummary = styled.div`
  border-top: 1px solid var(--border);
  padding-top: var(--space-md);
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-sm);
  font-size: var(--fs-sm);
  
  &.total {
    font-weight: 700;
    font-size: var(--fs-md);
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px dashed var(--border);
  }
`;

const PaymentForm = styled.div`
  background-color: var(--background);
  border-radius: var(--radius-md);
  box-shadow: 0 5px 15px var(--shadow);
  padding: var(--space-xl);
`;

const FormTitle = styled.h2`
  font-size: var(--fs-xl);
  margin-bottom: var(--space-lg);
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
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--space-xs);
    color: var(--primary);
  }
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

const CardElementContainer = styled.div`
  padding: var(--space-sm) var(--space-md);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(15, 40, 71, 0.2);
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-md);
  
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
  
  svg {
    margin-right: var(--space-sm);
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  color: var(--text-dark);
  border: none;
  padding: var(--space-sm) 0;
  font-size: var(--fs-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: var(--space-md);
  
  svg {
    margin-right: var(--space-xs);
  }
  
  &:hover {
    color: var(--primary);
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: var(--fs-sm);
  margin-top: var(--space-xs);
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: var(--space-md);
  border-radius: var(--radius-sm);
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--space-sm);
    font-size: var(--fs-lg);
  }
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-xs);
  color: var(--text-dark);
  opacity: 0.7;
  margin-top: var(--space-md);
  
  svg {
    margin-right: var(--space-xs);
    color: var(--primary);
  }
`;

// Card Element styles
const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

// Checkout Form Component
const CheckoutForm = ({ plan, billingCycle }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }
    
    // Basic validation
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // In a real application, you would create a payment intent on your server
    // and then confirm the payment here
    
    // For this demo, we\'ll simulate a successful payment after a short delay
    setTimeout(async () => {
      // Simulate a successful payment
      setLoading(false);
      setSuccess(true);
      
      // Redirect to a thank you page after a delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };
  
  const goBack = () => {
    navigate('/pricing');
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <BackButton type="button" onClick={goBack}>
        <FaArrowLeft /> Back to Pricing
      </BackButton>
      
      {success ? (
        <SuccessMessage>
          <FaCheckCircle /> Payment successful! Thank you for subscribing to QuantumTrade. You will be redirected shortly.
        </SuccessMessage>
      ) : null}
      
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      
      <FormGroup>
        <FormLabel htmlFor="name">
          Full Name *
        </FormLabel>
        <FormInput 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel htmlFor="email">
          Email Address *
        </FormLabel>
        <FormInput 
          type="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      
      <FormGroup>
        <FormLabel>
          <FaCreditCard /> Card Details *
        </FormLabel>
        <CardElementContainer>
          <CardElement options={cardElementOptions} />
        </CardElementContainer>
      </FormGroup>
      
      <FormButton type="submit" disabled={!stripe || loading}>
        {loading ? 'Processing...' : `Pay $${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}`}
      </FormButton>
      
      <SecurityNote>
        <FaLock /> Your payment information is secured with bank-level encryption
      </SecurityNote>
    </Form>
  );
};

// Main Checkout Component
const Checkout = () => {
  const location = useLocation();
  const [plan, setPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  useEffect(() => {
    // Get plan from URL query parameters
    const params = new URLSearchParams(location.search);
    const planParam = params.get('plan');
    
    // Set default plan if not specified
    const selectedPlan = planParam || 'basic';
    
    // In a real app, you would fetch plan details from your API
    // For this demo, we\'ll use hardcoded plan data
    const plans = {
      basic: {
        name: 'Basic Plan',
        description: 'Perfect for beginners and small investors',
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: [
          'Basic trading algorithms',
          'Market analysis tools',
          'Up to 3 trading pairs',
          'Email support'
        ]
      },
      pro: {
        name: 'Pro Plan',
        description: 'Ideal for active traders and professionals',
        monthlyPrice: 79,
        yearlyPrice: 790,
        features: [
          'Advanced trading algorithms',
          'Comprehensive market analysis',
          'Up to 10 trading pairs',
          'Priority email support',
          'Advanced risk management',
          'API integrations'
        ]
      },
      enterprise: {
        name: 'Enterprise Plan',
        description: 'For institutional investors and funds',
        monthlyPrice: 199,
        yearlyPrice: 1990,
        features: [
          'Premium trading algorithms',
          'Real-time market analysis',
          'Unlimited trading pairs',
          '24/7 dedicated support',
          'Advanced risk management',
          'Full API integrations',
          'Custom strategies'
        ]
      }
    };
    
    setPlan(plans[selectedPlan] || plans.basic);
    
    // Check if billing cycle is specified
    const cycleParam = params.get('cycle');
    if (cycleParam === 'yearly') {
      setBillingCycle('yearly');
    }
  }, [location]);
  
  if (!plan) {
    return <div>Loading...</div>;
  }
  
  return (
    <PageContainer>
      <CheckoutSection>
        <CheckoutContainer>
          <CheckoutHeader>
            <CheckoutTitle>
              Complete Your <span>Purchase</span>
            </CheckoutTitle>
            <CheckoutSubtitle>
              You\'re just one step away from revolutionizing your trading experience
            </CheckoutSubtitle>
          </CheckoutHeader>
          
          <CheckoutContent>
            <PaymentForm>
              <FormTitle>Payment Details</FormTitle>
              <Elements stripe={stripePromise}>
                <CheckoutForm plan={plan} billingCycle={billingCycle} />
              </Elements>
            </PaymentForm>
            
            <OrderSummary>
              <SummaryTitle>Order Summary</SummaryTitle>
              
              <PlanDetails>
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
                
                <PlanFeatures>
                  {plan.features.map((feature, index) => (
                    <PlanFeature key={index}>
                      <FaCheckCircle /> {feature}
                    </PlanFeature>
                  ))}
                </PlanFeatures>
              </PlanDetails>
              
              <PricingSummary>
                <PriceRow>
                  <span>Subscription</span>
                  <span>{plan.name}</span>
                </PriceRow>
                
                <PriceRow>
                  <span>Billing Cycle</span>
                  <span>{billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</span>
                </PriceRow>
                
                {billingCycle === 'yearly' && (
                  <PriceRow>
                    <span>Discount</span>
                    <span>20%</span>
                  </PriceRow>
                )}
                
                <PriceRow className="total">
                  <span>Total</span>
                  <span>${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                </PriceRow>
              </PricingSummary>
            </OrderSummary>
          </CheckoutContent>
        </CheckoutContainer>
      </CheckoutSection>
    </PageContainer>
  );
};

export default Checkout;