import { createContext } from "react"

export const dataContext = createContext({
    isActive: false,
    fixedHeader: false,
    handleToggle: () => {}
})

export const {Provider, Consumer} = dataContext