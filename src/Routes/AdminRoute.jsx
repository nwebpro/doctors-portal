import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner/LoadingSpinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    
    if (loading || isAdminLoading) {
        return <LoadingSpinner />
    }

    if (user && isAdmin) {
        return children
    }
    if(user && !isAdmin) {
        return <Navigate to='/dashboard' />
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default AdminRoute;