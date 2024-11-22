import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const PasswordReset = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='border-b-[1px] border-black'>Password reset option</h5>
                <div className='m-4'>
                    <p>If an user forgot the password, click on the <span className='text-red-500 font-bold'>Forgot Password</span> option. Then you will redirect like the below page. Now enter your registered email ID and click on the button <span className='text-red-500 font-bold'>Send Password Reset Link</span>.</p>
                    <img className='w-auto h-auto my-2' src="/images/reemail.png" alt="" />
                    <p>Now you can change your password here.</p>
                    <img className='w-auto h-auto my-2' src="/images/reset.png" alt="" />
                </div>
            </div>
        </AdminLayout >
    )
}

export default PasswordReset;