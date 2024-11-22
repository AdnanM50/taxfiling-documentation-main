import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AccountantLogin = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant Sign Up</h5>
                    <div className='m-4'>
                        <p>A new Accountant can register his account through the website sign-up page, but first, he/she needs to check the mark accountant button, then fill up the sign-up information. An email will be sent to the corresponding accountant and admin to complete the sign-up process like the user.</p>
                        <img className='h-uto' src='/images/acsi.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant Login</h5>
                    <div className='m-4'>
                        <p>After confirmation from the admin side, the administrator will receive the login credential through his/her email. Then, the accountant can log in to the system.</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant dashboard</h5>
                    <div className='m-4'>
                        <p>After the successful login, the accountant will redirect to his/her dashboard.</p>
                        <img src="/images/acdash.png" alt="" />
                    </div>
                </div>
                <div className='border-2 border-red-300 my-4 h-20  text-[18px] font-medium flex items-center justify-center'>
                    <p className='mb-0'><span className='text-red-500'>*</span> All users, accountants, and admins have the same type of profile page. They can easily manage their personal profile information.</p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AccountantLogin;