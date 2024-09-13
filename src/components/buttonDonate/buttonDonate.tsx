import { useState } from 'react';
import Modal from '../layout/Modal';

export interface ButtonDonateProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ButtonDonate({ isOpen, onClose }: ButtonDonateProps) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <Button onClick={() => setIsOpen(true)}> Open Modal</Button> */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <h2 className="text-lg font-bold">Modal Title</h2>
          <p>This is a modal</p>
          <button
            onClick={onClose}
            className="mt-4 rounded bg-accent px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
