import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FeedbackUser = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Feedback Page</h5>
                    <div className='m-4'>
                        <p>The user can give their personal opinion and feedback on the service with a rating.</p>
                        <img className='h-auto w-auto' src='/images/rate.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default FeedbackUser;