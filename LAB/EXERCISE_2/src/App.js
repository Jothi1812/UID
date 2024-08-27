import React from 'react';
import UserProfile from './components/UserProfile';
import photo from './components/assets/Photo.jpg'

function App() {
  const user = {
    name: 'Jothi Sree',
    age: 20,
    email: 'jothisree77@gmail.com',
    bio: 'A software developer with a passion for learning new technologies and solving complex problems.',
    image: photo,
  };

  return (
    <div style={styles.container}>
      <UserProfile 
        name={user.name}
        age={user.age}
        email={user.email}
        bio={user.bio}
        image={user.image}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    backgroundColor: '#f0f0f0', 
  },
};

export default App;
