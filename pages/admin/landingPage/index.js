import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import { IoArrowvioletoSharp, IoMdSend, IoMdShareAlt } from 'react-icons/io';
import Link from 'next/link';

const LandingPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 p-6 w-[90%] text-[18px]'>
                <h4 className='text-center border-b-[1px] pb-2 border-black'>Website Introduction</h4>
                <div className=' p-4'>
                    <p>On this section you can see necessary information collection pages:</p>
                    <div className='mx-20'>
                        <p className='flex items-center gap-2 '>
                            <span><IoMdSend /></span>
                            <Link href='/admin/setting/feedBack/'><a className='border px-4 py-2 rounded text-violet-500   font-bold'>Student Feedbacks</a></Link>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span><IoMdSend /></span>
                            <Link href='/admin/setting/queryPage/'><a  className='border px-4 py-2 rounded text-violet-500   font-bold'>Customer Contact</a></Link>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span><IoMdSend /></span>
                            <Link href='/admin/setting/pricePage/'><a  className='border px-4 py-2 rounded text-violet-500   font-bold'>TaxFile Pricing</a></Link>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span><IoMdSend /></span>
                            <Link href='/admin/setting/morePage/'><a  className='border px-4 py-2 rounded text-violet-500   font-bold'>Frontend More Pages</a></Link>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span><IoMdSend /></span>
                            <Link href='/admin/setting/faqPage/'><a  className='border px-4 py-2 rounded text-violet-500   font-bold'>FAQ Setting</a></Link>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span><IoMdSend /></span>Site Setting
                        </p >
                        <div className='mx-10'>
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/info/'><a  className='border px-4 py-2 rounded  text-rose-500   font-bold'>Website Information</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/homePage/'><a  className='border px-4 py-2 rounded  text-rose-500   font-bold'>Manage Home Page</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/about/'><a  className='border px-4 py-2 rounded text-rose-500  font-bold'>Manage About Page</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/beneficiaryPage/'><a  className='border px-4 py-2 rounded  text-rose-500   font-bold'>Manage Tax Beneficiary</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span> 
                                <Link href='/admin/setting/smtpPage/'><a  className='border px-4 py-2 rounded  text-rose-500  font-bold'>Manage SMTP Setting</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/smsPage/'><a  className='border px-4 py-2 rounded  text-rose-500   font-bold'>Manage SMS Setting</a></Link>
                            </p >
                            <p className='flex items-center gap-2'>
                                <span><IoMdShareAlt /></span>
                                <Link href='/admin/setting/envPage/'><a  className='border px-4 py-2 rounded  text-rose-500   font-bold'>Environment Setting</a></Link>
                            </p >
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default LandingPage;