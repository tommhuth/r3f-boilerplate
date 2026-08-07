import config from "@data/config"
import Debug from "./debug"

export default function Ui() {
    return (
        <>
            <div
                style={{
                    position: "absolute",
                    left: "2em",
                    bottom: "3em"
                }}
            >
                R3F boilerplate
            </div>

            {config.debug && <Debug />}
        </>
    )
}