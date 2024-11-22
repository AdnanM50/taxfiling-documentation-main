import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FeedBackPage = () => {
   
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Feedback</p>
                </div>
                <h5 className='border-b-[1px] border-black p-2'>Feedback</h5>
                <div className='m-4'>
                    <p>On this page, the admin can see all the responses of his users and can be display in the table in the admin panel.</p>
                    <img className='h-auto w-auto' src="/images/feedback.png" alt="img" />
                    <p className='mt-6'> This response will be taken from the user panel.</p>
                    <img className='h-auto w-auto' src="/images/rate.png" alt="" />
                    <p className='mt-6'>and this feedback also visible in the home page.</p>
                    <img className='h-auto w-auto' src="/images/h5.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default FeedBackPage;