import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const SMSPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>SMS Information</p>
                </div>
                <h5 className='border-b-[1px] border-black capitalize'>Activation of website OTP code-sending method</h5>
                <div className='m-4'>
                    <p>For additional security purposes, we are using the Twilio messaging service. So company owner need to activate Twilio service after activated Twilio service he will get Twilio number, Twilio Auth Token, and Twilio Account SID. He can use the service only by providing them in the fields below.</p>
                    <img className='h-auto w-auto' src="/images/sms.png" alt="" />
                </div>
                <div className='m-4'>
                    <p>When the admin activates Twilio, all the users of his website will receive a code as a message on their phone after login and after verifying with the code, they can see the dashboard.</p>
                    <img className='h-auto w-auto' src="/images/otp.png" alt="" />
                </div>
                <p className='text-red-600 font-bold text-center p-4 rounded shadow'>*Twilio is a paid service, the owner has to pay for this service.</p>
                <div className='m-4 border-2 border-red-500 p-4 text-center font-bold'>
                    <p>If the admin does not want to use this service, he/she may not fill out this form, in that case, they can log in to the dashboard after giving the email password.</p>
                </div>
            </div>
        </AdminLayout >
    );
};

export default SMSPage;