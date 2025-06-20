import React from 'react';
import { NewsletterSignup } from './NewsletterSignup';
import { FooterBottom } from './FooterBottom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black flex flex-col overflow-hidden items-stretch pt-[82px]">
      <NewsletterSignup />
      <FooterBottom />
    </footer>
  );
};
