import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <StrictMode>
     <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />
          <Router>
<App />
    </Router>
     </QueryClientProvider>

  </StrictMode>,
  </ThemeProvider>

)
