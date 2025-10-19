import React from 'react';
import { motion } from 'framer-motion';

const Payment: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="container"
    >
      {/* Header */}
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
          Payment System
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Secure payment processing for research subscriptions and premium content
        </p>
      </motion.div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        className="card"
        style={{ 
          textAlign: 'center', 
          marginTop: '50px',
          maxWidth: '600px',
          margin: '50px auto 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'conic-gradient(from 0deg, transparent, var(--rainbow-1), transparent, var(--rainbow-3), transparent)',
          animation: 'rainbowSweep 8s linear infinite',
          opacity: 0.1,
          zIndex: -1
        }}></div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
          style={{
            width: '120px',
            height: '120px',
            background: 'linear-gradient(45deg, var(--neon-magenta), var(--neon-purple), var(--neon-cyan))',
            borderRadius: '50%',
            margin: '0 auto 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            boxShadow: 'var(--glow-magenta), 0 0 50px rgba(255, 0, 255, 0.5)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        >
          💳
        </motion.div>
        
        <h2 style={{ 
          color: 'var(--neon-magenta)', 
          textShadow: 'var(--glow-magenta)',
          marginBottom: '20px',
          fontSize: '2.5rem'
        }}>
          Coming Soon
        </h2>
        
        <p style={{ 
          color: 'var(--text-primary)',
          marginBottom: '30px',
          fontSize: '1.2rem',
          lineHeight: '1.6'
        }}>
          We're building a secure payment system that will allow you to:
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '20px',
              background: 'rgba(0, 240, 255, 0.05)',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '10px',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '2rem',
              marginBottom: '10px'
            }}>🔒</div>
            <h3 style={{ color: 'var(--neon-cyan)', marginBottom: '10px' }}>Secure Payments</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Bank-level encryption and security
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '20px',
              background: 'rgba(255, 0, 255, 0.05)',
              border: '1px solid rgba(255, 0, 255, 0.2)',
              borderRadius: '10px',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '2rem',
              marginBottom: '10px'
            }}>📊</div>
            <h3 style={{ color: 'var(--neon-magenta)', marginBottom: '10px' }}>Premium Content</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Access to exclusive research and resources
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              padding: '20px',
              background: 'rgba(57, 255, 20, 0.05)',
              border: '1px solid rgba(57, 255, 20, 0.2)',
              borderRadius: '10px',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontSize: '2rem',
              marginBottom: '10px'
            }}>🎯</div>
            <h3 style={{ color: 'var(--neon-lime)', marginBottom: '10px' }}>Research Funding</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Support ongoing consciousness research
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          style={{
            padding: '20px',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '10px',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            marginBottom: '30px'
          }}
        >
          <h3 style={{ 
            color: 'var(--neon-cyan)', 
            marginBottom: '15px',
            fontSize: '1.3rem'
          }}>
            Stay Updated
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: '1.5'
          }}>
            Subscribe to our newsletter to be the first to know when our payment system goes live. 
            Early subscribers will receive exclusive benefits and discounts.
          </p>
        </motion.div>

        <motion.button
          className="btn btn-primary"
          style={{ 
            fontSize: '1.1rem',
            padding: '15px 30px'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Subscribe to Updates
        </motion.button>
      </motion.div>

      {/* Features Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="card"
        style={{ marginTop: '50px', marginBottom: '50px' }}
      >
        <h2 style={{ 
          color: 'var(--neon-lime)', 
          textShadow: 'var(--glow-lime)',
          marginBottom: '30px',
          fontSize: '2rem',
          textAlign: 'center'
        }}>
          Planned Features
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          <div>
            <h3 style={{ 
              color: 'var(--neon-cyan)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              💎 Premium Subscriptions
            </h3>
            <ul style={{ 
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>Exclusive research papers and studies</li>
              <li>Early access to new content</li>
              <li>Priority support and community access</li>
              <li>Monthly consciousness research briefings</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ 
              color: 'var(--neon-magenta)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              🧠 Research Donations
            </h3>
            <ul style={{ 
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>Support specific research projects</li>
              <li>Transparent funding allocation</li>
              <li>Regular progress updates</li>
              <li>Recognition for contributors</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ 
              color: 'var(--neon-purple)', 
              marginBottom: '15px',
              fontSize: '1.3rem'
            }}>
              🎓 Educational Courses
            </h3>
            <ul style={{ 
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>Consciousness research fundamentals</li>
              <li>Psychedelic safety and harm reduction</li>
              <li>Meditation and awareness practices</li>
              <li>Integration and therapeutic approaches</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Payment;
