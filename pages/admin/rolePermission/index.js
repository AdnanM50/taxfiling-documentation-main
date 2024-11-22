import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const RolePermission = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className=''>
                    <h5 className='border-b-[1px] border-black'>Display Role Information</h5>
                    <p>On this page, the admin can see the list of all the roles he has added. He can also see how many users are under a role. The Action column of the table has an Update button through which the role information can be updated.</p>
                    <img className='h-auto w-auto' src="/images/role.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Role Update Page</h5>
                    <p>On this page, The admin can view specific role information as well as update the information.</p>
                    <img className='h-auto w-auto' src="/images/roleedit.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Role Permission Page</h5>
                    <p>On this page, the admin can manage the access permission of his entire website panel.</p>
                    <img className='h-auto w-auto' src="/images/permit.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Single Role Added Page</h5>
                    <p>On this page, the admin can add unlimited user roles for his website. He can see all user roles in the list at the bottom of the page. He can update and delete user roles if he wants.</p>
                    <img className='h-auto w-auto' src="/images/roleadd.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Updated Single Role Page</h5>
                    <p>In the drawer, the admin can view user role information and update information.</p>
                    <img className='h-auto w-auto' src="/images/uprole.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default RolePermission;