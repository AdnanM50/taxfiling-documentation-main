import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Profile = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Profile Drop Down</h5>
                    <div className='m-4'>
                        <p>Admin can manage his/her profile easily.</p>
                        <img className='h-auto w-auto' src="/images/profile1.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Profile Page</h5>
                    <div className='m-4'>
                        <p>Admin can update his/her profile as well.</p>
                        <img className='h-auto w-auto' src="/images/profile.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Profile;