import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
import theme from './theme.tsx'
import { store } from './store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
