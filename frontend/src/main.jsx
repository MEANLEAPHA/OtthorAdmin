import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page from './page';
// import {GoogleOAuthProvider} from '@react-oauth/google';
const main = document.getElementById('root');
const root = createRoot(main);

// const CLIENT_ID = "769261651394-b80k5kn379hm5cbrai2auvj9r8jed9lf.apps.googleusercontent.com";
root.render(
  <>
    <StrictMode>
      {/* <GoogleOAuthProvider clientId={CLIENT_ID}> */}
          <Page />
      {/* </GoogleOAuthProvider> */}
    </StrictMode>
  </>

)
