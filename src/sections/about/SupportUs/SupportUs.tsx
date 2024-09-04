'use client';
import ButtonDonate from '@/components/buttonDonate/buttonDonate';
import Modal from '@/components/layout/Modal';
import React, { useState } from 'react';

type SupportUsProps = {};

const SupportUs = ({}: SupportUsProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <h2>Supporting</h2>
      <ButtonDonate />
    </section>
  );
};

export default SupportUs;
