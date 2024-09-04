import { useState } from 'react';
import Button from '../ui/Button';
import Modal from '../layout/Modal';

export interface ButtonDonateProps {}

export default function ButtonDonate({}: ButtonDonateProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}> Open Modal</Button>
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
    </>
  );
}
