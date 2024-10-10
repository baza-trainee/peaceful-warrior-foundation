import { create } from 'zustand';

// Создание стора для модального окна
const useModalDonateStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useModalDonateStore;
