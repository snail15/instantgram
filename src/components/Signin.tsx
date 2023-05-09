'use client';
import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import ColorButton from './ui/ColorButton';
type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <ColorButton
          size='big'
          key={provider.id}
          text={`Sign In with ${provider.name}`}
          onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
        />
      ))}
    </>
  );
}
