import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const ContactPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>Contact Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see simple text.</p>
                        <img className='h-auto w-auto' src='/images/c1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Contact section</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see a contact us form along with company contact details. This section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/c2.png' alt="" />
                    </div>
                </div>
                
            </div>
        </AdminLayout>
    );
};

export default ContactPage;