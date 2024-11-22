import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Coupon = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Page</h5>
                    <p>On this page, the admin can manage the coupons easily.</p>
                    <img className='h-auto w-auto' src="/images/coupon.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'> Assign Coupon </h5>
                    <p>The admin can assign coupons for a specific user role or multiuser role just by clicking on the dropdown option.</p>
                    <img className='h-auto w-auto' src="/images/asscoupon.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Add Page</h5>
                    <p>On this page, the admin can add new coupon information.</p>
                    <img className='h-auto w-auto' src="/images/addcou.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Coupon Information Update Page</h5>
                    <p>On this page, The admin can update coupon information as well.</p>
                    <img className='h-auto w-auto' src="/images/editcou.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Coupon;