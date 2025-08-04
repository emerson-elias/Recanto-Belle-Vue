import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { useLoading } from '../context/loadingContext'
import { LoadingGlobal } from '../components/global/loading/loadingGlobal'

import Navbar from '../components/global/nav/navbar/navbar'
import Bar from '../components/global/nav/nav_none/bar'
import Drop from '../components/global/nav/menu_drop/drop'
import Cursor from '../components/global/cursor/cursor'
import Topo from '../components/global/topo/topo'

export default function MainLayout() {
    const location = useLocation()
    const { startRouteLoading, endRouteLoading } = useLoading()

    useEffect(() => {
        window.scrollTo(0, 0)
        
        startRouteLoading()
        const timeout = setTimeout(() => {
            endRouteLoading()
        }, 2500)

        return () => clearTimeout(timeout)
    }, [location.pathname])

    return (
        <>
            <Cursor />
            <Navbar />
            <Bar />
            <Drop />
            <Topo />
            <LoadingGlobal />
            <Outlet />
        </>
    )
}