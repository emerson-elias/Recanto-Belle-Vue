import { Outlet } from 'react-router-dom'

import Navbar from '../components/global/nav/navbar/navbar'
import Bar from '../components/global/nav/nav_none/bar'
import Drop from '../components/global/nav/menu_drop/drop'
import Cursor from '../components/global/cursor/cursor'
import Topo from '../components/global/topo/topo'

export default function MainLayout() {
    return (
        <>
            <Cursor />
            <Navbar />
            <Bar />
            <Drop />
            <Topo />
            <Outlet />
        </>
    )
}