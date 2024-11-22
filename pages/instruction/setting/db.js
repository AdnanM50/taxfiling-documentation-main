import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import AdminLayout from '../../../layout/adminLayout';

const Database = () => {
    const router = useRouter();
    const handleRouteChange = () => {
        router.push('/instruction/setting/')
    }
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <p onClick={handleRouteChange} className='flex items-center gap-2 cursor-pointer text-red-600'><span className='mt-1'><BsArrowReturnLeft /></span> Back</p>
                <h4 className='text-center'>MongoDB database Setup Information</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Database setup</h5>
                    <div className='m-4 '>
                        <div>Next, you have to setup the database. Here, we are suggesting to create a MongoDB database in MongoDB Atlas. Also, you can create database on your server too. Now follow the below steps.
                            <ul className='list-disc'>
                                <li>At first, you have to create a MongoDB Atlas account. <Link href="https://www.mongodb.com/atlas/database"><a >Click here</a></Link> to create account.You can choose any plan, also you can choose <span className='text-red-500'>free shared</span> plan too.
                                    <img className='h-auto w-auto my-4' src="/images/ndb1.png" alt="" />
                                </li>
                                <li>Make sure you have to select free shared and hit enter <span className='text-red-500'>Create Clustor</span>
                                    <img className='h-auto w-auto my-4' src="/images/ndb2.png" alt="" />
                                </li>
                                <li>Then you can see your personal MongoDB database dashboard.Click <span className='text-red-500'>Build a Database</span> button.
                                    <img className='h-auto w-auto my-4' src="/images/ndb0.png" alt="" />
                                </li>
                                <li>Please fill in this information carefully. You need to follow these picture instructions.
                                    <img className='h-auto w-auto my-4' src="/images/ndb3.png" alt="" />
                                </li>
                                <li>Now Click <span className='text-red-500'>Network access.</span> and Click <span className='text-red-500'>ADD IP ADDRESS</span>, then you can see a modal.
                                    <img className='h-auto w-auto my-4' src="/images/ndb4a.png" alt="" />
                                </li>
                                <li>Now you can see of your mondoDB account dashboard. You have to create Network Access. We recommend to put your server IP address to maintain the security. Also you can set it public access, which is not recommended.
                                    <img className='h-auto w-auto my-4' src="/images/ndb4.png" alt="" />
                                </li>
                                <li>Now delete the previous IP address. Keep the new one.
                                    <img className='h-auto w-auto my-4' src="/images/ndb5.png" alt="" />
                                </li>
                                <li>Then you need to go to the main dashboard of the database. And click on <span className='text-red-500'>Connect</span>
                                    <img className='h-auto w-auto my-4' src="/images/ndb6.png" alt="" />
                                </li>
                                <li>Now select <span className='text-red-500'>connect your application.</span>
                                    <img className='h-auto w-auto my-4' src="/images/ndb6a.png" alt="" />
                                </li>
                                <li>Now copy the link carefully.
                                    <img className='h-auto w-auto my-4' src="/images/ndb7.png" alt="" />
                                </li>
                                <li>In the link below, you need to enter your username, password and a database name of your choice as shown in the given image.
                                    <img className='h-auto w-auto my-4' src="/images/ndb8.png" alt="" />
                                </li>
                                <li>Right now, Your Database creation process is done. Just copy the URL from your mongoDB atlas account like the upper image. Now you have to paste the URL in <span className='text-red-500'>Database String</span> field. Also you have to put company website name like taxstick.</li>
                                <img className='h-auto w-auto my-2' src="/images/s2.png" alt="" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Database;