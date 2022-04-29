/* global Go */

import create from 'zustand';
import _ from 'lodash';

const useTransformers = create((set, get) => ({
  functions: [],
  loadWASMFromPath: (path) =>
    set(async () => {
      const go = new Go();
      const { instance } = await WebAssembly.instantiateStreaming(fetch(path), go.importObject);
      go.run(instance);
    }),
  registerFunction: (name, fn) => {
    console.log('PRE registering', name);

    if (get().functions.length > 2) {
      debugger;
    }

    if (!_.find(get().functions, ['name', name])) {
      set((state) => ({ functions: [...state.functions, { name, fn }] }));
    } else {
      console.warn(name, 'already registered');
    }
  },
  setFunctions: (functions) => set(() => ({ functions }))
}));

export default useTransformers;
