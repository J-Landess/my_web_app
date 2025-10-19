import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card"
        style={{ textAlign: 'center', marginTop: '50px' }}
      >
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '20px',
          color: 'var(--neon-cyan)',
          textShadow: 'var(--glow-cyan)'
        }}>
          About Wiseman Psychedelics
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Exploring the frontiers of consciousness through research, education, and community
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
        style={{ marginTop: '30px' }}
      >
        <h2 style={{ 
          color: 'var(--neon-magenta)', 
          textShadow: 'var(--glow-magenta)',
          marginBottom: '20px',
          fontSize: '2rem'
        }}>
          Our Mission
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          Wiseman Psychedelics is dedicated to advancing the understanding of consciousness 
          through rigorous scientific research, responsible education, and the cultivation 
          of a community that values both ancient wisdom and modern discovery.
        </p>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          color: 'var(--text-primary)'
        }}>
          We believe that psychedelics, when used responsibly and with proper guidance, 
          can offer profound insights into the nature of mind, consciousness, and reality itself.
        </p>
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card"
        style={{ marginTop: '30px' }}
      >
        <h2 style={{ 
          color: 'var(--neon-lime)', 
          textShadow: 'var(--glow-lime)',
          marginBottom: '20px',
          fontSize: '2rem'
        }}>
          Our Story
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginTop: '20px'
        }}>
          <div>
            <h3 style={{ 
              color: 'var(--neon-cyan)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              Ancient Wisdom Meets Modern Science
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6',
              color: 'var(--text-secondary)'
            }}>
              Drawing from thousands of years of shamanic traditions and the latest 
              breakthroughs in neuroscience, we bridge the gap between ancient wisdom 
              and cutting-edge research.
            </p>
          </div>
          
          <div>
            <h3 style={{ 
              color: 'var(--neon-purple)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              A Community of Seekers
            </h3>
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6',
              color: 'var(--text-secondary)'
            }}>
              We bring together researchers, practitioners, and curious minds who share 
              a passion for understanding consciousness and exploring the potential of 
              psychedelic substances for healing and growth.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Aesthetic Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="card"
        style={{ marginTop: '30px' }}
      >
        <h2 style={{ 
          color: 'var(--neon-purple)', 
          textShadow: 'var(--glow-purple)',
          marginBottom: '20px',
          fontSize: '2rem'
        }}>
          Our Aesthetic
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          The visual design of our platform reflects the psychedelic experience itself: 
          flowing gradients that morph and shift, representing the fluid nature of consciousness. 
          Deep purples and electric blues evoke the mystery and depth of the mind, while 
          neon accents symbolize the illumination that comes from expanded awareness.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, var(--neon-cyan), var(--neon-blue))',
              borderRadius: '50%',
              margin: '0 auto 15px',
              boxShadow: 'var(--glow-cyan)'
            }}></div>
            <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '10px' }}>Flow</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Smooth, flowing animations that mirror the fluid nature of consciousness
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, var(--neon-magenta), var(--neon-purple))',
              borderRadius: '50%',
              margin: '0 auto 15px',
              boxShadow: 'var(--glow-magenta)'
            }}></div>
            <h4 style={{ color: 'var(--neon-magenta)', marginBottom: '10px' }}>Depth</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Deep, rich colors that evoke the profound depths of the mind
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, var(--neon-lime), var(--neon-cyan))',
              borderRadius: '50%',
              margin: '0 auto 15px',
              boxShadow: 'var(--glow-lime)'
            }}></div>
            <h4 style={{ color: 'var(--neon-lime)', marginBottom: '10px' }}>Illumination</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Bright, glowing accents that represent moments of insight and clarity
            </p>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="card"
        style={{ marginTop: '30px', marginBottom: '50px' }}
      >
        <h2 style={{ 
          color: 'var(--neon-cyan)', 
          textShadow: 'var(--glow-cyan)',
          marginBottom: '20px',
          fontSize: '2rem'
        }}>
          Our Values
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{ 
            padding: '20px',
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            borderRadius: '10px'
          }}>
            <h3 style={{ color: 'var(--neon-cyan)', marginBottom: '10px' }}>Safety First</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              We prioritize harm reduction and responsible use in all our educational content.
            </p>
          </div>
          
          <div style={{ 
            padding: '20px',
            background: 'rgba(255, 0, 255, 0.05)',
            border: '1px solid rgba(255, 0, 255, 0.2)',
            borderRadius: '10px'
          }}>
            <h3 style={{ color: 'var(--neon-magenta)', marginBottom: '10px' }}>Scientific Rigor</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Our content is grounded in peer-reviewed research and evidence-based practices.
            </p>
          </div>
          
          <div style={{ 
            padding: '20px',
            background: 'rgba(57, 255, 20, 0.05)',
            border: '1px solid rgba(57, 255, 20, 0.2)',
            borderRadius: '10px'
          }}>
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '10px' }}>Community</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              We foster a supportive community of researchers, practitioners, and seekers.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
