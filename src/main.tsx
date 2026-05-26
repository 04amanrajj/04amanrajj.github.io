import { createRoot } from 'react-dom/client'
import { clarity } from 'react-microsoft-clarity'
import App from './App.tsx'
import './index.css'

// Initialize Microsoft Clarity only in production mode
if (import.meta.env.PROD) {
  clarity.init('wsghmifzc7');
}

createRoot(document.getElementById("root")!).render(<App />);
