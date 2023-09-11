import logo from './logo.svg';
import './App.css';
import { ChakraProvider} from '@chakra-ui/react'
import PostClassifieds from './components/PostClassifieds';
import BrowseClassifieds from './components/BrowseClassifieds';
import { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  const [loading, setLoading] = useState(true);
  return (
    <ChakraProvider>
    <div>
    
    {loading?<Signup/>:<>
    <Login/>
    <PostClassifieds/>
    <BrowseClassifieds/>
    </>
  }
    </div>
    </ChakraProvider>
  );
}

export default App;
