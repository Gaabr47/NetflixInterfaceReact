import {ThemeProvider} from 'styled-components'
import Rotas from './Routes';
import theming from './styles/theming';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <ThemeProvider theme={theming}>  
      <ToastContainer />  
      <Rotas />
    </ThemeProvider>

  );
}

export default App;
