import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AllTaxFiles = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin All tax File</h5>
                    <p>On this page, the admin can see the tax files of all the users given to him, can assign the accountant, and download the necessary documents.</p>
                    <img className='h-auto w-auto' src="/images/allfiles.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Admin All tax File <span className='text-red-500'> Action Button</span></h5>
                    <p>On this page, the admin can see the tax files of all the users given to him, can assign the accountant, and download the necessary documents.</p>
                    <img className='h-auto w-auto mx-auto' src="/images/allfiles1.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>File Details</h5>
                    <p>On this page, the admin can see all information of the user who requested tax filing.</p>
                    <img className='h-auto w-auto' src="/images/filedetail.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Delete Option</h5>
                    <p>Also, the admin can delete the corresponding files.</p>
                    <img className='h-auto w-auto' src="/images/delete.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default AllTaxFiles;