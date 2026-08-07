const config = {
    debug: window.location.search.toLowerCase().includes("debug"),
    stats: window.location.search.toLowerCase().includes("stats"),
} as const

export default config