import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const InformationPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Bacis Information</p>
                </div>
                <h5 className='border-b-[1px] border-black pb-2'>Website bacis information</h5>
                <div className='m-4'>
                    <p>First you need to go to the admin panel &gt; website setting &gt; site setting, then you will see seven buttons on the left side and on the right side there is a form.At first you can see website information.This form store company basic information and the website domain name.</p>
                    <img className='h-auto w-auto' src="/images/site.png" alt="" />
                </div>
                <div className='m-4'>
                    <p>This information is displayed on the landing page top header section, sidebar, and footer.</p>
                    <img className='h-auto w-auto' src="/images/webinfo.png" alt="" />
                    <img className='h-auto w-auto' src="/images/webinfo2.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default InformationPage;