import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page from './page';
// import {GoogleOAuthProvider} from '@react-oauth/google';
const main = document.getElementById('root');
const root = createRoot(main);
import ContextProvider from "./assets/context/context";


root.render(
  <>
    <StrictMode>
   
      <ContextProvider>
       
           <Page />
        
      </ContextProvider>
    
    </StrictMode>
  </>

)
