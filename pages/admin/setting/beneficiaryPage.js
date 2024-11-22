import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const BeneficiaryPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Tax Beneficiary</p>
                </div>
                <h5 className='border-b-[1px] border-black capitalize'>Website tax beneficiary page information</h5>
                <div className='m-4'>
                    <p>On this page, it takes specific user role-based information, this information will be displayed on the tax beneficiary page on the live website.</p>
                    <img className='h-auto w-auto' src="/images/situation.png" alt="" />
                </div>
                <div className='m-4'>
                    <p>You must first select the role name to add or update user role-based information. After this, you can add information. Here you can see only the roles that you have previously defined.</p>
                    <img className='h-auto w-auto' src="/images/bene.png" alt="" />
                </div>
                <div className='m-4'>
                    <p className='mb-0'>Short Description of the form:</p>
                    <ul className='list-disc'>
                        <li>Hero section tittle: You must give a role specification title.</li>
                        <li>Hero section sub-tittle: You must give some text in an introduction specification.</li>
                        <li>Hero section image: You must give a photo for this section</li>
                        <li>Section 1 and Section 2 work process is almost same.
                            <ul className='list-disc'>
                                <li>Each of these two sections will require one heading tittle.</li>
                                <li>Each of these two categories will require descriptive information.</li>
                                <li>Each of these two sections will require two photos to make it attractive.</li>
                            </ul>
                        </li>
                        <li>Work Process Section(Title): Each role has a descriptive section of how the user works, which requires a title.</li>
                        <li>Work Process section(Add Description):Details of how the user works for each role can be added here.
                            <div className='grid grid-cols-2'>
                                <img className='h-auto w-auto' src="/images/des1.png" alt="" />
                                <img className='h-auto w-auto' src="/images/des2.png" alt="" />
                            </div>
                        </li>
                    </ul>
                    <div className='flex justify-around items-center border-2 border-red-500 m-4 rounded'>
                        <p className='text-[34px]'>Here you can see the changes.</p>
                        <img className='h-auto w-auto' src="/images/des3.png" alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default BeneficiaryPage;