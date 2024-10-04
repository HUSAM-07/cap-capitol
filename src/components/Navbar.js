"use client";

import React from 'react';
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        <MountainIcon className="h-6 w-6" />
        <span className="ml-2 text-xl font-bold">CapCapitol</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">
          Features
        </Link>
        <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">Dashboard</Link>
        <Link href="/auth/login" className="text-sm font-medium hover:underline underline-offset-4">Login</Link>
        <Link href="/auth/signup" className="text-sm font-medium hover:underline underline-offset-4">Sign Up</Link>
      </nav>
    </header>
  );
}