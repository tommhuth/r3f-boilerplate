import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"

interface Store {

}

const store = create(
    subscribeWithSelector<Store>(() => ({}))
)
const useStore = store

export { store, useStore }