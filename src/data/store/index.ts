import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

interface Store {
    state: string
    loading: boolean
}

const store = create(
    subscribeWithSelector<Store>(() => ({
        state: "hello",
        loading: true,
    }))
)
const useStore = store

export function setState(partial: Partial<Store>) {
    store.setState(partial)
}

export { store, useStore }