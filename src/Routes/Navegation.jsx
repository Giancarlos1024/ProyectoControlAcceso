

import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom' 
import { Dashboard } from '../views/Dashboard'
import {NotFound} from '../views/NotFound'
import {HomeDashboard} from '../views/dashboard/HomeDashboard'
import { UsuariosDashboard } from '../views/dashboard/UsuariosDashboard'
import { AsignacionesDashboard } from '../views/dashboard/AsignacionesDashboard'
import { HistorialDashboard } from '../views/dashboard/HistorialDashboard'
import { EventosContextProvider } from '../context/EventosContext'
import { UsersProvider } from '../context/UsersContext'
import { BeaconsDashboard } from '../views/dashboard/BeaconsDashboard'
import { BeaconsProvider } from '../context/BeaconsContext'

const Navegation = () => {
    return (
        <EventosContextProvider>
            <UsersProvider>
                <BeaconsProvider>
                <Router>
                    <Routes>
                        {/* <Route path='/' element={<Navigate to="/dashboard" />} />    */}
                        <Route path='/' element={<Navigate to="/dashboard" />} /> 
                        <Route path='/dashboard' element={<Dashboard />} >
                            <Route index element={<HomeDashboard />} />
                            <Route path="usuarios" element={<UsuariosDashboard />} />
                            <Route path="beacons" element={<BeaconsDashboard />} />
                            <Route path="asignaciones" element={<AsignacionesDashboard />} />
                            <Route path="historial" element={<HistorialDashboard />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    
                </Router>
                </BeaconsProvider>
            </UsersProvider>
        </EventosContextProvider>
        
    )
}

export default Navegation
