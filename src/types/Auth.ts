import type { Dispatch,SetStateAction } from "react";

export type AuthProviderType = {
    token : string|null
    setToken: Dispatch<SetStateAction<string|null>>
    logout: () => void
}