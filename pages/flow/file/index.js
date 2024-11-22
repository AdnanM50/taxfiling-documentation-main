import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const WorkFlow = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='text-center text-[20px] font-bold'>Tax Filing Work flow</h5>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 1</h5>
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>User Panel</span>
                    <p className='mt-2'>A user has to complete the form in 3 steps:</p>
                    <ul className='list-decimal'>
                        <li className='text-red-600 font-bold my-'>About you,<img className='h-[600px] mt-2' src='/images/aboutyou.png' alt="" /></li>
                        <li className='text-red-600 font-bold my-4'>Income summary,<img className='h-[600px] mt-2' src='/images/income.png' alt="" /></li>
                        <li className='text-red-600 font-bold my-4'>Payment,<img className='h-[600px] mt-2' src='/images/pay.png' alt="" /></li>
                        <li className='text-red-600 font-bold my-4'>Payment Method,<img className='h-[600px] mt-2' src='/images/pay1.png' alt="" /></li>
                    </ul>
                    <div className='my-4'>
                        <p className='font-semibold'>*User can track his/her tax filing work-process from hovering card progress bar.</p>
                        <img className='h-auto w-auto my-4 border rounded' src="/images/submission1.png" alt="" />
                        <img className='h-auto w-auto border mx-auto' src='/images/card1.png' alt="" />
                    </div>
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>Admin Panel</span>
                    <p className='mt-2'>When a user finished a particular step of the form, the admin can see in this column how many steps he has completed.</p>
                    <img className='h-auto w-auto border rounded' src="/images/flow1.png" alt="" />
                    <p className='shadow-md rounded bg-cyan-50 p-4 font-bold m-4'>If the admin wants, he can hand over his file to the accountant before completing his payment.</p>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 2</h5>
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>Admin Panel</span>
                    <p className='my-2'>Admin can assign a file to an accountant and can assign multiple files at once and the status column will show you the status change from <span className='text-red-500'>New File</span>  to <span className='text-red-500'>Submitted to Accountant</span>.</p>
                    <img className='h-auto w-auto mb-4 border rounded' src="/images/flow2.png" alt="" />
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>Accountant Panel</span>
                    <p className='mt-2'>Accountant can see the newly added file in his panel and start working.</p>
                    <img className='h-auto w-auto border rounded mb-4' src="/images/flow3.png" alt="" />
                    <p className='bg-cyan-500 text-white rounded px-4 py-1 '>When the admin assigns an accountant to the user submitted files, the user will receive an email notification.</p>
                    <img className='h-[400px] w-auto border rounded mb-4' src="/images/accemail.png" alt="" />
                    <p className='bg-cyan-500 text-white rounded px-4 py-1 '>At this time the assigned accountant will receive a notification email.</p>
                    <img className='h-[400px] w-auto border rounded mb-4' src="/images/useemai.png" alt="" />
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 3</h5>
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>Accountant Panel</span>
                    <p className='my-2'>The accountant will upload the completed task using choose file button. At this time the admin, accountant, and the user will receive the confirmation emails. Using <span className='text-red-500'>Send file</span> column.</p>
                    <img className='h-auto w-auto border rounded mb-4' src="/images/flow4.png" alt="" />
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>User Panel</span>
                    <p className='my-2'>And user will see the completed files in his panel after uploading by the accountant. Now the user will receive an email and can download it or also take review it if he/she wants. But a maximum of two times a  user can request for review.</p>
                    <img className='h-auto w-auto border rounded' src="/images/file2.png" alt="" />
                    <div className='my-4'>
                        <span className='bg-cyan-500 text-white rounded px-4 py-1'>The confirmation email:</span>
                        <p >And the user also receives an email notification.</p>
                        <img className='h-[400px] w-auto border rounded' src="/images/taxcom.png" alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Flow 4</h5>
                    <span className='bg-cyan-500 text-white rounded px-4 py-1 '>Admin Panel</span>
                    <p className='my-4'>If a user takes a review, the admin and accountant will get a review status at the same time. The accountant cannot take any action until an email notification is received from the admin. Also, the admin can choose any accountant for this action.</p>
                    <img className='h-auto w-auto border rounded' src="/images/flow5.png" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default WorkFlow;