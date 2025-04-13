import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StyledButtonInline from './StyledButtonInline';
import StyledButtonInternal from './StyledButtonInternal';
import StyledButtonExternal from './StyledButtonExternal';
import LifeCycle from './LifeCycle';
import Counterstate from './Counterstate';
import Counterred from './Counterred';
import Jokes from './Jokes';
import ButtonRef from './ButtonRef';
import ThemeProvider from './ThemeProvider';
import ThemedBox from './ThemedBox';
import ToggleButton from './ToggleButton';
import Parent from './Parent';
import Formvalref from './Formvalref';
import Formvaleff from './Formvalref';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /><br />
    <StyledButtonInline /><br /><br />
    <StyledButtonInternal /><br /><br />
    <StyledButtonExternal /><br /><br />
    <LifeCycle />
    <Counterstate />
    <Counterred />
    <Jokes /><br /><br />
    <ButtonRef /><br /><br />
    <ThemeProvider>
            <ToggleButton />
            <ThemedBox />
            <ThemedBox />
        </ThemeProvider>
    <Parent /><br />
    <p>Using UseRef</p>
    <Formvalref /><br />
    <p>Using UseEffect</p>
    <Formvaleff />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
