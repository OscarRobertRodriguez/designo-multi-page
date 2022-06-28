import { createGlobalStyle } from "styled-components";
import Footer from "../components/footer";
import Layout from "../components/layout";

const GlobalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/


html {
   --peach: hsla(11, 72%, 66%, 1.00); 
   --light-peach: hsla(10, 100%, 80%, 1.00); 
   --black: hsla(274, 4%, 11%, 1.00); 
   --dark-grey: hsla(268, 5%, 20%, 1.00); 
   --light-grey: hsl(198, 17%, 96%); 
   --white:  hsl(300, 100%, 100%); 
   
   --2px: .125rem;
   --5px: .3125rem;
   --13px: 0.8125rem;
   --14px: 0.875rem;
   --15px: 0.9375rem;
   --16px: 1rem;
   --17px: 1.0625rem;
   --18px: 1.125rem;
   --19px: 1.1875rem;
   --20px: 1.25rem;
   --21px: 1.3125rem;
   --24px: 1.5rem;
   --26px:  1.625rem;
   --28px: 1.75rem;
   --32px: 2rem;
   --40px: 2.5rem;
   --48px: 3rem;


   --font-jost:  'Jost', sans-serif;

   --med: 500;
   --heavy: 700; 

   font-family: var(--font-jost);
}


html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr;
  font-size: var(--16px);
  line-height: var(--26px);
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}


#__next {
  /* width: min(1111px ,100%);  */
  width: 100%;
  display: grid;
  grid-template-rows: 1fr min-content;
  min-height: 100%;
  padding: 0 24px;
  background-color: purple;

}


h1 {
  font-weight: var(--med);
  font-size: var(--48px);
  line-height: var(--48px);
}

h2 {
  font-weight: var(--med);
  font-size: var(--40px);
  line-height: var(--48px);
  letter-spacing: var(--2px);
}

h3 {
  font-weight: var(--med);
  font-size: var(--20px);
  line-height: var(--26px);
  letter-spacing: var(--5px);
}

h6 {
  font-size: var(--16px);
  font-weight: var(--heavy);
}

`; 




function MyApp({ Component, pageProps }) {
  return (
    <Layout> 
     <GlobalStyle />
     <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
