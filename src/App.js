import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './routes';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <Router>
      {loading ? <LoadingScreen /> : <AnimatedRoutes />}
    </Router>
  );
}

export default App;