import { store } from "@data/store"

export default function Debug() {
    const state = store(i => i.state)

    return (
        <div className="text-white absolute top-4 w-45 left-4 overflow-hidden flex flex-col gap-1 pointer-events-auto">
            <div className="relative z-1 text-sm">
                State: {state.toUpperCase()}
            </div>
        </div>
    )
}
