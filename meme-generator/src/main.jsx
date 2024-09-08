import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import App from './App.jsx';
import './index.css';

const options = {reducer: rootReducer}
const store = configureStore(options);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
  ,
)
