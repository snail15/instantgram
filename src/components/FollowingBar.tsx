'use client';
import React from 'react';
import useSWR from 'swr';


export default function FollowingBar() {


  const { data, isLoading, error } = useSWR('/api/me');

  return <p>FollowingBar</p>;
}
