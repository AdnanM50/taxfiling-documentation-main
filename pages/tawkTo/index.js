import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../layout/adminLayout';

const TawkTo = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className=''>
                    <h5 className='border-b-[1px] border-black'>tawk.to integration</h5>
                    <p>We used <span className='font-bold text-red-500'>tawk.to</span> to manage chatting or messages. To enable tawk.to please follow the below instructions.</p>
                    <img className='h-[200px] w-auto mx-auto' src="/images/tawk.png" alt="" />
                    <div className='m-4'>
                        <p>After clicking on the icon, a user or visitor can access such chatting platform. They can directly message for any queries. </p>
                        <div className='grid grid-cols-2'>
                            <img className='h-auto w-auto mx-auto' src="/images/tawk2.png" alt="" />
                            <img className='h-auto w-auto mx-auto' src="/images/tawk3.png" alt="" />
                        </div>
                        <p className='text-center text-red-500 m-2'>*Note that the user does not need to open an account there for live chat</p>
                    </div>
                    <div className='m-4'>
                        <p>To enable this chatting system you have to register in tawk.to.</p>
                        <ul className='list-disc'>
                            <li>Here is the register link: <Link href={`https://dashboard.tawk.to/signup `}><a className='cursor-pointer text-red-500 font-bold' target='_blank' rel="noreferrer"> tawk.to</a></Link></li>
                            <li>After completing the sign up process you will get the dashboard like below one.</li>
                            <li>Then follow the instructions in picture.
                                <img className='h-auto w-auto mx-auto' src="/images/tawk4.png" alt="" />
                            </li>
                            <li className='my-4'>Then copy the link and paste it in the admin panel, <span className='text-red-500'>Your Tawk To Source URL</span> field.
                                <img className='h-auto w-auto mx-auto' src="/images/env.png" alt="" />
                            </li>
                            <li>Now the tawk.to is enabled. You can also download the tawk.to mobile app to manage live messages.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default TawkTo;