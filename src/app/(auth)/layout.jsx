import Navbar from '@/components/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    );
};

export default AuthLayout;