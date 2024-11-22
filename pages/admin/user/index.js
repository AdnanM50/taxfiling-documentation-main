import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const userDisplay = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Activation Process</h5>
                    <p>The user’s account can be activated in two ways:</p>
                    <ul className='list-decimal'>
                        <li>When the user completes his/her registration, both the admin and the user will receive an email. Now, the user can activate his/her account by clicking on the link provided through the email.
                            <div className='lg:grid lg:grid-cols-2 gap-2 my-4'>
                                <img className='h-auto w-auto' src="/images/admail.png" alt="" />
                                <img className='h-auto' src='/images/usact.png' alt="" />
                            </div>
                        </li>
                        <li>If the user didn’t activate his account using email, the admin can activate his account by following the processes.</li>
                        <span className='text-red-500'>*N.B: Account activation time will expire after 24 hours.</span>

                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-black'>User </h5>
                            <p>On this page, the admin can view all user’s accounts and all information about the user’s account details. The admin can update and delete in the action column.</p>
                            <img className='h-auto w-auto' src="/images/user.png" alt="" />
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-black'>User Details Page</h5>
                            <p>On this page, the admin can view a specific user account.</p>
                            <img className='h-auto w-auto' src="/images/userdetails.png" alt="" />
                        </div>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-black'>User Information Edit Page</h5>
                            <p>On this page, the administrator can edit and update the information of a specific user.</p>
                            <img className='h-auto w-auto' src="/images/useredit.png" alt="" />
                        </div>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default userDisplay;