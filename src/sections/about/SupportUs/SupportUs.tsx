'use client';
import Modal from '@/components/layout/Modal';
import React, { useState } from 'react';

type SupportUsProps = {};

const SupportUs = ({}: SupportUsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <h2>Supporting</h2>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h2 className="text-lg font-bold">Modal Title</h2>
          <p>This is a modal</p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded bg-accent px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default SupportUs;
