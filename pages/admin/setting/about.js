import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AboutPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>About Page</p>
                </div>
                <h5 className='border-b-[1px] border-black'>Website about page information</h5>
                <div className='m-4'>
                    <p>This form takes your company information, This information will be display on the about page in the live website</p>
                    <img className='h-auto w-auto' src="/images/about.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default AboutPage;