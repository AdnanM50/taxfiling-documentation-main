import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const HomePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px]'>
                <h4 className='text-center'>Home Page</h4>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>header</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the hero section with two photos, here all the sections are dynamic. You can change it according to your requirement.</p>
                        <img className='h-auto w-auto' src='/images/h1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>File With An Expert</h5>
                    <div className='m-4'>
                        <p>In this section, three cards are displayed for your company working process flow.</p>
                        <img className='h-auto w-auto' src='/images/h2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Why taxstick </h5>
                    <div className='m-4'>
                        <p>Here, anyone can see the company highlighting information, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Our Service</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the company service-related card displayed on a slide show, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>User feedback </h5>
                    <div className='m-4'>
                        <p>This is the user feedback section. You can customize and control this.</p>
                        <img className='h-auto w-auto' src='/images/h5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>More Information</h5>
                    <div className='m-4'>
                        <p>This is the more information part where three videos can be put there.</p>
                        <img className='h-auto w-auto' src='/images/h6.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>Contact us</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can send an email to the admin of the company, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h7.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>File Taxes</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see tax file submission process-related information and video,this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h8.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>partnership</h5>
                    <div className='m-4'>
                        <p>In this section, anyone can see the partnership company logo, this section is also dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h9.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black capitalize'>footer and copyright</h5>
                    <div className='m-4'>
                        <p>This is footer and copyright section that is totally dynamic.</p>
                        <img className='h-auto w-auto' src='/images/h10.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default HomePage;