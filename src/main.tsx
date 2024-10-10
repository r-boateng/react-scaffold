import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Notifications } from "@mantine/notifications";
import '@mantine/notifications/styles.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Load custom theme to provider
import customTheme from './theme/mantineTheme';
const theme = createTheme({ ...customTheme })

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>

      <MantineProvider theme={theme} defaultColorScheme='dark'>
        <Notifications />
        <RouterProvider router={router} />
      </MantineProvider>
      
    </StrictMode>
  );
}
