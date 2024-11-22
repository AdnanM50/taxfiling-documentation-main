import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const SMTPPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>SMTP Information</p>
                </div>
                <h5 className='border-b-[1px] border-black capitalize'>Website SMTP Information</h5>
                <div className='m-4'>
                    <p>This form takes the Simple Mail Transfer Protocol (SMTP) information.These section helps you to send email to your any users,</p>
                    <p>General section : Need 3 basic information.</p>
                    <img className='h-auto w-auto' src="/images/smtp.png" alt="" />
                </div>
                <div className='m-4'>
                    <p><span className='font-bold text-red-500 text-[18px]'>Email Option 2:</span> This option is enabled by default.If you use Gmail, You can get this data in the Gmail service.</p>
                    <img className='h-auto w-auto' src="/images/email2.png" alt="" />
                </div>
                <div className='m-4'>
                    <p>Email Option 1:If you want to activate the SendGrid email service, please contact support.</p>
                    <img className='h-auto w-auto' src="/images/email1.png" alt="" />
                </div>
            </div>
        </AdminLayout >
    );
};

export default SMTPPage;