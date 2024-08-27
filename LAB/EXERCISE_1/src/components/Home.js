import React from 'react';

const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
      background: '#f0f0f0',
      padding: '20px'
    },
    heading: {
      color: '#004080',
    },
    paragraph: {
      fontSize: '18px',
    },
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to the Reality Museum</h1>
      <p style={styles.paragraph}>Exploring the wonders of reality through immersive exhibits</p>
    </div>
  );
}

export default Home;
