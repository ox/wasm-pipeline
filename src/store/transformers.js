import create from "zustand";

const useTransformers = create((set) => ({
  order: [],
  functions: {},
  loadWASMFromPath: (path) => set(async () => {
    const go = new Go();
    const { instance } = await WebAssembly.instantiateStreaming(fetch(path), go.importObject);
    go.run(instance);
  }),
  registerFunction: (name, fn) => set((state) => ({functions: {...state.functions, [name]: fn}})),
  setOrder: (order) => set(() => ({order})),
}));

export default useTransformers;
