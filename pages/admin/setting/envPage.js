import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const ENVPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Environment Set Up</p>
                </div>
                <h5 className='border-b-[1px] border-black'>Website Environment Set Up </h5>
                <div className='m-4'>
                    <p>This form takes the main environment set up information, This information stored in the .env file</p>
                    <ul className='list-disc'>
                        <li>Company Email: Enter your company email.</li>
                        <li>Company Logo: Upload your company logo.</li>
                        <li>Super Admin Email Address: Enter your super admin email.</li>
                        <li>Admin Email List:If you want to add additional admins, enter their email here.</li>
                        <li>After Payment, Redirect URL:Enter your domain name here.</li>
                        <li>Your Login Redirect URL:Enter your domain name here.</li>
                        <li>Your Tawk To Source URL:For chatting, we use Tawt to the app, please provide your Tawt to the account URL.</li>
                    </ul>
                    <img className='h-auto w-auto' src="/images/env.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default ENVPage;