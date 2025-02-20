

import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom' 
import { Dashboard } from '../views/Dashboard'
import NotFound from '../views/NotFound'
import { Packages_D } from '../views/dashboard/Packages_D'
import HomeDashboard from '../views/dashboard/HomeDashboard'

const Navegation = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/dashboard" />} />   
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route index element={<HomeDashboard />} />
                    <Route path="packages" element={<Packages_D />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </Router>
    )
}

export default Navegation
