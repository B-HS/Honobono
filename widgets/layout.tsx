import type { FC, PropsWithChildren } from 'react'
import { Header } from 'features/header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}
