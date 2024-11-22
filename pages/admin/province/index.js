import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Province = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Page</h5>
                    <p>On this page, the admin can view tax information according to his province. The admin can manage it easily.</p>
                    <img className='h-auto w-auto' src="/images/provicen.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Province Details Page</h5>
                    <p>On this page, the admin can view a specific province information.</p>
                    <img className='h-auto w-auto' src="/images/prodetails.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Add Page</h5>
                    <p>On this page, the admin can add new province details.</p>
                    <img className='h-auto w-auto' src="/images/proadd.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Province Information Update Page</h5>
                    <p>On this page, the admin can update the province information as well.</p>
                    <img className='h-auto w-auto' src="/images/proedit.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default Province;