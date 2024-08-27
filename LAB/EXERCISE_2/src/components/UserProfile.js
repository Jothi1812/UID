import React from 'react';

function UserProfile({ name, age, email, bio, image }) {
  return (
    <div style={styles.container}>
      <img src={image} alt={name} style={styles.image} />
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.age}>Age: {age}</p>
      <p style={styles.email}>Email: {email}</p>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '20%',
    objectFit: 'cover',
    marginBottom: '20px',
    border:'solid purple 2px',
  },
  name: {
    fontSize: '24px',
    color: '#333',
  },
  age: {
    fontSize: '18px',
    color: '#555',
  },
  email: {
    fontSize: '18px',
    color: '#555',
  },
  bio: {
    fontSize: '16px',
    color: '#666',
    marginTop: '10px',
  },
};

export default UserProfile;
