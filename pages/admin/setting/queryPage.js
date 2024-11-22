import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const QueryPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Customer Contact</p>
                </div>
                <h5 className='border-b-[1px] border-black'>All Customer Query </h5>
                <div className='m-4'>
                    <p>If any viewer has any type of query, they have to email you, this email can store on this page of your admin panel, the admin can view and reply to the email and also can delete this.</p>
                    <img className='h-auto w-auto' src="/images/query.png" alt="" />
                    <p className='mt-6'>Any viwer ask any type of information to fill up this form.</p>
                    <img className='h-auto w-auto' src="/images/h7.png" alt="" />
                    <p className='mt-6'>Admin can reply the viewers email.</p>
                    <img className='h-auto w-auto' src="/images/reply.png" alt="" />
                    <p className='mt-6'>Admin also update email status.</p>
                    <img className='h-auto w-auto' src="/images/upSt.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default QueryPage;