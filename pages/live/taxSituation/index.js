import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const taxSituationPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>tax situation Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see some text about specific roles and a banner photo, all the sections are dynamic.</p>
                        <img className='h-auto w-auto' src='/images/t1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Role wise information</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see role wise information.</p>
                        <img className='h-auto w-auto' src='/images/t2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>File processing information</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see information about the working process of tax filing. This section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/t3.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default taxSituationPage;