import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FAQPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
            <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>FAQs</p>
                </div>
                    <h5 className='border-b-[1px] border-black'>FAQs</h5>
                    <div className='m-4'>
                        <p>At the top of the page, you will find the form to add questions and answers for your clients and at the bottom of the page all the questions and answers will be displayed, you can delete any row.
                        </p>
                        <img className='h-auto w-auto' src="/images/faq.png" alt="" />
                    </div>
                </div>
        </AdminLayout>
    );
};

export default FAQPage;