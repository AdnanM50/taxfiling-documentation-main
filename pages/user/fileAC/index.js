import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const FIleFormAC = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>File From A/C Page</h5>
                    <div className='m-4'>
                        <p>The user will see his/her complete files on this page in the table view. The user can download files from here. If the user needs any review then the user will be able to take a maximum of two reviews.</p>
                        <img className='h-auto w-auto' src='/images/file1.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout >
    );
};

export default FIleFormAC;