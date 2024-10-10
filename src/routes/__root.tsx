import { Button, Group } from '@mantine/core';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import React, { Suspense } from 'react';
import { RouterLink } from '../components/primitives/RouterLink';

/**
 * @ lazy load - development env only
 * @see https://tanstack.com/router/latest/docs/framework/react/devtools#only-importing-and-using-devtools-in-development
 */
const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    );

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">

        <Group gap={"md"}>
          <Button component={RouterLink} to="/" variant="outline">Home</Button>
          <Button component={RouterLink} to="/about" variant="outline">About</Button>
        </Group>

      </div>
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
  notFoundComponent: () => (
    <>
      <h1>Hold up... Nope that's missing</h1>
    </>
  )
});
