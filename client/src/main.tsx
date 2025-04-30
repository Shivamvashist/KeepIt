// import { StrictMode } from 'react';
import { RecoilRoot } from 'recoil';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
  
)
