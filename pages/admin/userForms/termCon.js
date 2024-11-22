import { useRouter } from 'next/router';
import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import AdminLayout from '../../../layout/adminLayout';

const TermsAndCondision = () => {
    const router = useRouter();
    const handleRouteChange = () => {
        router.push('/admin/userForms/')
    }
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <p onClick={handleRouteChange} className='flex items-center gap-2 cursor-pointer text-red-600'><span className='mt-1'><BsArrowReturnLeft /></span> Back</p>
                <h5 className='border-b-[1px] border-black text-center p-2 text-[20px]'>Terms and Conditions Insertion Process</h5>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <p >The complete procedure for creating a new form field will be the same, only the <span className='text-red-500'> input name</span> and <span className='text-red-500'>input type</span> should be selected as shown in the image below. Then you will see a field with the Add Link sign part, in this option copy and paste the link to your website Terms and Conditions page.</p>
                        <img className='h-auto w-auto my-2' src="/images/terms_and_conditions.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p>In <span className='text-red-500'>Add link </span>field you have to give your website Terms and Conditions page link. You will find the page under the <span className='text-red-500'>More</span> option on your website</p>
                        <img className='h-auto w-auto my-2' src="/images/tc1.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p>Then go to the page and copy the URL.</p>
                        <img className='h-auto w-auto my-2' src="/images/tc2.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p className=''>If you don’t create the Terms and Conditions page, you may follow these instructions.</p>
                        <img className='h-auto w-auto my-2' src="/images/more.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <p>After completing these processes the Terms and Conditions will be visible to users.</p>
                        <img className='h-auto w-auto my-2' src="/images/terms_link.png" alt="" />
                    </li>
                </ul>
            </div>
        </AdminLayout>
    );
};

export default TermsAndCondision;