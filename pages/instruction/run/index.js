import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const WebsiteRun = () => {
    const router = useRouter();

    const handleRouteChange = () => {
        router.push('/admin/userForms/commonField/')
    }


    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='text-center font-bold capitalize'>Run time instructions</h5>
                <div className='m-4 bg-green-500 p-4'>
                    <p className='text-center mb-0 text-white text-[20px]'>Make sure that, you have already filled up settings form and restart your backend server.</p>
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>1. Admin login</h5>
                    <p>To log in as admin, use the registered email when filling out the quick setup form.</p>
                    <img className='h-96 w-auto mx-auto' src='/images/login.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>2. Website setting information fill up</h5>
                    <p>Open your admin dashboard, scroll to the sidebar and find website settings, then click on it, you need to fill out the information here, but for initial set up you need to fill out <span className='text-red-500'> Website Information, Manage SMTP Setting</span> and <span className='text-red-500'>Environment Setting</span> at first.</p>
                    <img className='h-auto w-auto mx-auto' src='/images/flow6.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>3. Set up common field data</h5>
                    <p >To set up common field data <span className='cursor-pointer underline text-red-500' onClick={handleRouteChange}>Click here</span>.</p>
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>4. Add user role </h5>
                    <p >Now you need to add your user role. </p>
                    <img className='h-auto w-auto mx-auto' src='/images/roleadd.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>5. Add tax price value </h5>
                    <p >Now you need to set up the tax price value information. </p>
                    <img className='h-auto w-auto mx-auto' src='/images/tax.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>6. Add province information </h5>
                    <p >Now you need to set up your province information. </p>
                    <img className='h-auto w-auto mx-auto' src='/images/provicen.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>7. Add coupon information </h5>
                    <p >Now you need to set up your coupon information. </p>
                    <img className='h-auto w-auto mx-auto' src='/images/coupon.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>8. Set up live page information  </h5>
                    <p >Now you need to fill out this all information to run your live page.</p>
                    <img className='h-[500px] w-auto mx-auto' src='/images/flow7.png' alt="" />
                </div>
                <div className='m-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>9. Accountant and New user add </h5>
                    <p >And lastly, you can add accountants and users as per your wish using signup.</p>
                    <img className='h-[500px] w-auto mx-auto' src='/images/signup.png' alt="" />
                </div>
                <p className='p-4 shadow text-center text-red-500 font-bold'>If you complete the entire procedure correctly, your website will be up and running. <br />If you face any problem we will provide free Support.</p>
            </div>
        </AdminLayout>
    );
};

export default WebsiteRun;