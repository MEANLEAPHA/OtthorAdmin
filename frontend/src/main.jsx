import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page from './page'
const main = document.getElementById('root');
const root = createRoot(main);
root.render(
  <>
    <StrictMode>
        <Page />
    </StrictMode>
  </>

)


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from '../src/assets/components/Header';
// import Main from '../src/assets/components/Main';
// import Footer from '../src/assets/components/Footer';
// const main = document.getElementById('root');
// const root = createRoot(main);
// root.render(
//   <>
//     <Header />
//     <Main />
//     <Footer />
//   </>

// )
