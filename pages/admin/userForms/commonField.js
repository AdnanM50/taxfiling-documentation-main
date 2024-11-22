import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import { BsArrowReturnLeft } from 'react-icons/bs';

const CommonField = () => {
    const router = useRouter();
    const handleRouteChange = () => {
        router.push('/instruction/run/')
    }
    const handleTextLink = () => {
        router.push('https://appstick-resources.s3.ap-southeast-1.amazonaws.com/taxstick-storage/common_form_fields.json')
    }

    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <p onClick={handleRouteChange} className='flex items-center gap-2 cursor-pointer text-red-600'><span className='mt-1'><BsArrowReturnLeft /></span> Back</p>
                <h5 className='border-b-[1px] border-black text-center p-2 text-[20px]'>Common Fields Data Insertion Process</h5>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <p >At first go to your MongoDB Atlas account. Select <span className='font-bold text-red-600'>Browse Collections</span>. </p>
                        <img className='h-auto w-auto my-2' src="/images/mb1.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then scroll down on the left side. Select <span className='font-bold text-red-600'>student_form_fields</span>.</p>
                        <img className='h-auto w-auto my-2' src="/images/mb2.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then select <span className='font-bold text-red-600'>INSERT DOCUMENT</span> button in the upper right corner.</p>
                        <img className='h-auto w-auto my-2' src="/images/m3.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then you can see a modal, now follow the picture.</p>
                        <img className='h-auto w-auto my-2' src="/images/m4.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then <span className='font-bold text-red-600'>select this line and remove all</span>.</p>
                        <img className='h-auto w-auto my-2' src="/images/m5.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then <span onClick={handleTextLink} className='font-bold text-red-600 cursor-pointer'>Click Here</span>. You will get this file like this picture. <span className='font-bold text-red-600'>Copy them</span>.</p>
                        <img className='h-auto w-auto my-2' src="/images/m7.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p >Then <span className='font-bold text-red-600'>paste and click insert</span>.</p>
                        <img className='h-auto w-auto my-2' src="/images/m8.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p ><span className='font-bold text-red-600'>Then you will find some common field here</span>.</p>
                        <img className='h-auto w-auto my-2' src="/images/m9.png" alt="" />
                    </li>
                    <div className='border-2 border-red-500 p-4'><h5 className='text-center text-red-500 '>***Now back to the previous page. <span className='underline text-red-600 cursor-pointer font-bold' onClick={handleRouteChange}>Back</span>***</h5></div>
                </ul>
            </div>
        </AdminLayout>
    );
};

export default CommonField;