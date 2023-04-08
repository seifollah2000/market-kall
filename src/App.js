import './App.css';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import GoToTop from './Commponent/GoToTop/GoToTop';
function App() {
  const router = useRoutes(routers)
  return (
    <>
      {router}
      <GoToTop />
    </>
  );
}

export default App;
