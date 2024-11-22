import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AcAllFiles = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Accountant All Tax files</h5>
                    <div className='m-4'>
                        <p>After assigning the accountant from the admin side, the corresponding accountant will get access to files for tax filing.</p>
                        <img className='w-auto h-auto my-2' src="/images/acfile.png" alt="" />
                        <ul className='list-disc'>
                            <li><span className='font-medium text-red-500'>Download button and Action column: </span>The accountant can download a single file. If he/she wants to download multiple files, he/she needs to mark the files and then download them. The files can be downloaded in Excel, PDF, or CSV format.</li>
                            <li><span className='font-medium text-red-500'>Details button in action column: </span>Can view the file information details specifically.</li>
                            <li><span className='font-medium text-red-500'>Email: </span> The accountant can email users if necessary.
                                <img className='w-auto h-[300px] my-2' src="/images/scemail.png" alt="" /></li>
                            <li><span className='font-medium text-red-500'>Send File: </span>After completing the work, the accountant will submit the files to the user using the send file option. When the accountant sends the file to the user, the administrator, user, and accountant will also receive a submission email.
                            <img className='w-auto h-auto border' src="/images/sent.png" alt="" /></li>
                            <li><span className='font-medium text-red-500'>Status:</span>The accountant can change the file status or view the file review status.
                               <div className='md:flex justify-around items-center flex-wrap gap-2'>
                                    <img className='w-auto h-auto border' src="/images/status1.png" alt="" />
                                    <img className='w-auto h-auto border' src="/images/status2.png" alt="" />
                                </div>
                                <p className='shadow p-4 text-red-500 font-medium'>***If a file needs review, the accountant can see the status, but until the admin selects a specific accountant, the accountant cannot start working on that file.***</p>
                            </li>
                            <li><span className='font-medium text-red-500'>Search: </span>Accountant can search any file using ID</li>
                            <li>The accountant can manage the number of rows in the table throughout Show entries <span className='font-medium text-red-500'>Show entire</span>
                                <img className='w-auto h-auto my-2' src="/images/row.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Details Of A Single Tax files</h5>
                    <div className='m-4'>
                        <p>On this page, an accountant can see the details of a specific file.</p>
                        <img className='w-auto h-auto' src="/images/acdetail.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AcAllFiles;