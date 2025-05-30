import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Auth/LoginCard';

/**
 * LoginPage serves as the main authentication page for the application.
 * It utilizes the MainAppLayout for overall structure and centers the LoginCard component.
 * This page corresponds to the "User Authentication Login" target page specified in project requirements.
 */
const LoginPage: React.FC = () => {
  // This page component is responsible for composing the layout and the main feature (LoginCard).
  // All specific login logic, state management, and detailed UI elements are encapsulated within LoginCard.
  // The MainAppLayout provides the dark background and centering for the LoginCard.
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
