import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Login = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin Login</h5>
                    <div className='m-4'>
                        <p>You can access your admin dashboard by yourdomain.com/login just by putting your username and password.</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin dashboard</h5>
                    <div className='m-4'>
                        <p>After successful login admin can see the dashboard.</p>
                        <img src="/images/addash.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Login;