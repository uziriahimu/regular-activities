import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div>
      <Card></Card>
      <ToastContainer></ToastContainer>
    </div>


  );
}

export default App;
