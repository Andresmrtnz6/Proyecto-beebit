"use client";

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

/* eslint-disable react/display-name */
ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAuth;
};
