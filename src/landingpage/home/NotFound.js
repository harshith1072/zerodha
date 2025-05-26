 
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
 

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
 <Footer />
    </div>

  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#666',
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
  },
};

export default NotFound;
