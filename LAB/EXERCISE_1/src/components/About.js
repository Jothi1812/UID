import React from 'react';
import styles from '../About.module.css';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About the Reality Museum</h1>
      <p className={styles.paragraph}>The Reality Museum offers a unique experience, blending virtual and physical exhibits to challenge perceptions and expand horizons.<br></br>Our mission is to make the unseen seen, offering visitors a deeper understanding of the world around us.</p>
    </div>
  );
}

export default About;
