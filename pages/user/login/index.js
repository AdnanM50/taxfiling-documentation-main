import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AccountantLogin = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Sign Up</h5>
                    <div className='m-4'>
                        <p>A new User can register himself using the sign-up process. At first, s/he will check to mark the New User button, then select his role and then fill out the necessary information for the sign-up process.</p>
                        <img className='h-auto' src='/images/ussg.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Email Notification</h5>
                    <div className='m-4'>
                        <p>The admin will receive an email notification at this point when the user completed his/her registration. The user can activate his account within 24 hours by clicking on the link provided in the email. Also, the admin can activate the user account too.</p>
                        <img className='h-auto' src='/images/usact.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Login</h5>
                    <div className='m-4'>
                        <p>After the confirmation, the user will be allowed to log in to his account and redirect to his/her dashboard.</p>
                        <img className='h-96' src='/images/login.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User dashboard</h5>
                    <div className='m-4'>
                        <img src="/images/usdash.png" alt="" />
                    </div>
                </div>
                <div className='border-2 border-red-300 my-4 h-20  text-[18px] font-medium flex items-center justify-center'>
                    <p className='mb-0'><span className='text-[20px] text-red-500'>*</span>All users, accountants, and admins have the same type of profile page. They can easily manage their personal profile information.</p>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AccountantLogin;