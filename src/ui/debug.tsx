import { store } from "@data/store"

export default function Debug() {
    const state = store(i => i.state)

    return (
        <div className="text-shadow-[#fff7] text-shadow-xs absolute top-4 w-45 left-4 overflow-hidden flex flex-col gap-1 pointer-events-auto">
            <div className="p-1 px-2 relative z-1 rounded-sm text-[blue] font-bold bg-[#0002] text-sm">
                {state.toUpperCase()}
            </div>
        </div>
    )
}
