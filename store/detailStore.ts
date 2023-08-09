import { create } from "zustand";

interface detailState {
    idData: any;
    add: (data: any) => void
}

const useDetailStore = create<detailState>()((set) => ({
    idData: 0,
    add : (data) => set((state) => ({idData: data}))
}))

export default useDetailStore