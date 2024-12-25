import Router from './shared/Router';
import { app } from "firebaseApp";
import { getAuth } from "firebase/auth"
import { useState } from 'react';

function App() {
  const auth = getAuth(app)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  )
  return <Router isAuthenticated={isAuthenticated}/>
}

export default App;
