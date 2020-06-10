import HomePage from './pages/HomePage.jsx'
import {Sponsors} from './pages/SponsorPage.jsx'

const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/Sponsors",
        component: Sponsors
    }
]

export default routes;