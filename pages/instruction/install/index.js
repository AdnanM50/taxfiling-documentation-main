import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const Install = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center'>Installing Process</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black pb-2'>Install</h5>
                    <div className='m-4'>
                        <h6 className='text-red-600 border-b-[1px] border-red-600 text-center pb-2'>** To setup this project, you need to make sure that your hosting server supports node.js **</h6>
                        <ul className='list-disc'>
                            <li className='my-4'>First, You have to download the file, you will get a zip file.
                                <img className='h-[500px] w-auto mt-4' src="/images/i1.png" alt="" />
                            </li>
                            <li className='my-4'>Then, you have to <span className='text-[20px] font-bold text-red-500'>Extract</span> the file.
                                <img className='h-[500px] w-auto mt-4' src="/images/i2.png" alt="" />
                            </li>
                            <li className='my-4'>You will find two files <span className='text-[20px] font-bold text-red-500'>1. taxstick-backend</span> and <span className='text-[20px] font-bold text-red-500'>2. taxstick-frondend</span>.
                                <img className='h-[500px] w-auto mt-4' src="/images/i3.png" alt="" />
                            </li>
                            <li className='my-4'>
                                Install project dependencies:
                                <ul className='list-disc'>
                                    <li> <div className='flex gap-2'><p className='mb-0'> If NodeJs is not installed, then follow this step to install NodeJs:</p>
                                        <p className='mb-0'><Link href='https://nodejs.org/en/'><a target="_blank" rel="noopener noreferrer">https://nodejs.org/en/</a></Link></p>
                                    </div>
                                    </li>
                                    <li>
                                        After successfully installed, check NodeJs version. It will show some number. 
                                        <span className='text-red-500 font-medium'> node --version</span> 
                                    </li>
                                    <li>
                                        If yarn is not installed, then use the following command to install yarn: 
                                        <span className='text-red-500 font-medium'> npm i -g yarn</span>
                                    </li>
                                    <li>
                                        Check yarn version, It will show some number. 
                                        <span className='text-red-500 font-medium'> yarn --version</span>
                                    </li>
                                </ul>
                            </li>
                            <p className='text-center'>Now you need to follow the below instructions</p>
                            <div className='flex justify-center items-center gap-4'>
                                <div className="h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]">
                                    <Link href='/instruction/backend'><a className='text-white text-lg font-bold'>Backend Installing Process</a></Link>
                                </div>
                                <div className="h-10 w-72 flex justify-center items-center rounded bg-[#D22F25]">
                                    <Link href='/instruction/frontend'><a className='text-white text-lg font-bold'>Frontend Installing Process</a></Link>
                                </div>
                            </div>
                            <p className='text-right text-red-500 font-medium m-6'>***If you face any kind of installation problem, contact our support***</p>
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Install;