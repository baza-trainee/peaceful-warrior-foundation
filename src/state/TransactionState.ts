import { create } from 'zustand';

interface TransactionState {
  transactionStatus: string;
  setTransactionStatus: (status: string) => void;
}

const useTransactionStore = create<TransactionState>((set) => ({
  transactionStatus: '',
  setTransactionStatus: (status: string) => set({ transactionStatus: status }),
}));

export default useTransactionStore;
