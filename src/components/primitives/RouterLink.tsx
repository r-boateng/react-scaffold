import { Anchor, AnchorProps } from '@mantine/core';
import { createLink, Link as TanstackLink } from '@tanstack/react-router';
import React from 'react';

// @see: https://tanstack.com/router/latest/docs/framework/react/guide/custom-link#createlink-with-third-party-libraries
const RouterLink = createLink(
    React.forwardRef(
        (props: AnchorProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
            return <Anchor {...props} ref={ref} component={TanstackLink} />
        },
    )
);

export { RouterLink };

