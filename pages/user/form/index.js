import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const index = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h4 className='text-center capitalize'>User Tax File Submission Process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 1</h5>
                    <div className='m-4'>
                        <p>First of all, the user has to select the year to submit his/her tax file.</p>
                        <img className='h-auto w-auto' src='/images/usform1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 2</h5>
                    <div className='m-4'>
                        <p>Then fill in the necessary information and then click Save and Next button.</p>
                        <img className='h-auto w-auto' src='/images/aboutyou.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 3</h5>
                    <div className='m-4'>
                        <p>Then fill in his/her income information form and click the Save and Finish button.</p>
                        <img className='h-auto w-auto' src='/images/income.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Step 4</h5>
                    <div className='m-4'>
                        <p>Then the user can see his total payment information, after successful payment, the user’s file will have appeared in the admin panel.</p>
                        <img className='h-auto w-auto' src='/images/pay.png' alt="" />
                    </div>
                    <div className='m-4'>
                        <p>Admin can activate any payment method and the user will make payment using the activated payment system.</p>
                        <img className='h-auto w-auto' src='/images/pay1.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default index;