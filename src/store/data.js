import create from 'zustand';

const useDataStore = create((set) => ({
  data: [],
  clear: () => set({ data: [] }),
  set: (data) => set({ data })
}));

export default useDataStore;
