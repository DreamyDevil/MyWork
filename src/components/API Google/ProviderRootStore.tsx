import React from 'react'
import { IRoot$ } from './interfaceGoogle'
import { RootStore$ } from './RootStore$.store'

const MainStore = RootStore$.create({})

const StoreContext = React.createContext<IRoot$ | null>(null)

export const StoreProvider = (props: any) => {
    return <StoreContext.Provider value={ MainStore }> { props.children } </StoreContext.Provider>
}

export function useRootStore(): IRoot$ {
    const store = React.useContext(StoreContext)
    if (!store) {
        throw new Error('useStore shall be used with in StoreProvider')
    }
    return store
}