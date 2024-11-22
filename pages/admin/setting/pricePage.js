import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const PricePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Tax Pricing</p>
                </div>
                <h5 className='border-b-[1px] border-black'> Tax pricing</h5>
                <div className='m-4'>
                    <p>On the TaxFile pricing page, you can add tax pricing depending on the user role, Stripe, Paypal,Razorpay,Mollie, You can take your payment through these 4 channels.
                    </p>
                    <img className='h-auto w-auto' src="/images/tax.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default PricePage;