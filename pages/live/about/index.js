import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const AboutPage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center capitalize'>About Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see simple text.</p>
                        <img className='h-auto w-auto' src='/images/about1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>About Company</h5>
                    <div className='m-4'>
                        <p>In this dynamic section, anyone can see some text of about the company and a photo.</p>
                        <img className='h-auto w-auto' src='/images/about2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Company Goal</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see some text of goal of the company with a photo, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/about3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our Executive Team</h5>
                    <div className='m-4'>
                        <p>In this dynamic section, visitor can see the company executive information and photo.</p>
                        <img className='h-auto w-auto' src='/images/about4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our Accounting Affiliates</h5>
                    <div className='m-4'>
                        <p>In this section, visitor can see the company accounting affiliates information with a photo, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/about5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Company Portfolio</h5>
                    <div className='m-4'>
                        <p>In this dynamic section, anyone can see the company portfolio photos.</p>
                        <img className='h-auto w-auto' src='/images/about6.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AboutPage;