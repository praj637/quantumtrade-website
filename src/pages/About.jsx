import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaRocket, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: var(--text-light);
  padding: var(--space-3xl) 0;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: var(--space-md);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--fs-xl);
  margin-bottom: 0;
  opacity: 0.9;
`;

const Section = styled.section`
  padding: var(--space-3xl) 0;
  background: ${props => props.alt ? 'var(--background-alt)' : 'var(--background)'};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--space-xl);
  span { color: var(--primary); }
`;

const SectionText = styled.p`
  max-width: 800px;
  margin: 0 auto var(--space-lg);
  font-size: var(--fs-md);
  line-height: 1.7;
  color: var(--text-dark);
  text-align: center;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
  max-width: 1000px;
  margin: 0 auto;
`;

const ValueCard = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: 0 5px 15px var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px var(--shadow);
  }
`;

const ValueIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary);
  margin-bottom: var(--space-md);
`;

const ValueTitle = styled.h3`
  margin-bottom: var(--space-sm);
  font-size: var(--fs-lg);
`;

const ValueDescription = styled.p`
  font-size: var(--fs-sm);
  line-height: 1.6;
  color: var(--text-dark);
  opacity: 0.8;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-lg);
  max-width: 900px;
  margin: 0 auto;
`;

const TeamMember = styled(motion.div)`
  background-color: var(--background);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
  box-shadow: 0 5px 15px var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px var(--shadow);
  }
`;

const MemberName = styled.h3`
  margin-bottom: var(--space-xs);
  font-size: var(--fs-lg);
  color: var(--primary);
`;

const MemberRole = styled.p`
  font-size: var(--fs-sm);
  color: var(--secondary);
  margin-bottom: var(--space-sm);
  font-weight: 500;
`;

const MemberBio = styled.p`
  font-size: var(--fs-sm);
  line-height: 1.6;
  color: var(--text-dark);
  opacity: 0.8;
`;

const About = () => {
  const values = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in algorithmic trading, leveraging cutting-edge technologies to create superior trading solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Accessibility',
      description: 'We believe sophisticated trading tools should be available to everyone, not just institutional investors.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Transparency',
      description: 'We operate with openness about our methodologies, performance metrics, and fee structures.'
    },
    {
      icon: <FaChartLine />,
      title: 'Excellence',
      description: 'We are committed to delivering exceptional performance and service, constantly refining our algorithms and customer experience.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Former quantitative analyst with 15+ years of experience in algorithmic trading. Alex founded QuantumTrade to democratize access to sophisticated trading technologies.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'AI and machine learning expert with a background in financial technology. Sarah leads our engineering team and oversees the development of our trading algorithms.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Trading',
      bio: 'Experienced trader with a deep understanding of global markets. Michael ensures our algorithms adapt to changing market conditions and deliver consistent results.'
    },
    {
      name: 'Emily Zhang',
      role: 'Head of Customer Success',
      bio: 'With a background in fintech and customer experience, Emily ensures our clients receive exceptional support and maximize the value of our trading solutions.'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About QuantumTrade
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Revolutionizing trading with AI-powered algorithms
        </HeroSubtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Our <span>Story</span></SectionTitle>
        <SectionText>
          Founded in 2018, QuantumTrade emerged from a simple yet powerful idea: to make sophisticated trading algorithms accessible to traders of all levels. Our founder, Alex Chen, a veteran quantitative analyst, recognized that the tools used by institutional investors could be democratized through technology.<br /><br />
          What began as a small team of passionate engineers and traders has grown into a global company serving thousands of clients across 40+ countries. Our mission remains unchanged: to level the playing field in financial markets by providing cutting-edge trading technology that was once available only to elite institutions.<br /><br />
          Today, QuantumTrade is at the forefront of algorithmic trading innovation, continuously refining our technology to adapt to evolving markets and deliver exceptional results for our clients.
        </SectionText>
      </Section>

      <Section alt>
        <SectionTitle>Our <span>Mission</span> & Values</SectionTitle>
        <SectionText style={{ color: 'var(--primary)', fontWeight: 500, fontSize: 'var(--fs-xl)' }}>
          "To empower traders worldwide with institutional-grade trading technology, democratizing access to financial markets and creating opportunities for sustainable wealth generation."
        </SectionText>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      <Section>
        <SectionTitle>Our <span>Team</span></SectionTitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              <MemberBio>{member.bio}</MemberBio>
            </TeamMember>
          ))}
        </TeamGrid>
      </Section>
    </PageContainer>
  );
};

export default About;