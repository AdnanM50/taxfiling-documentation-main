import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const HomePage = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='flex gap-2'>
                    <Link href='/admin/landingPage/'><a>Website Setting</a></Link> / <p>Home Page</p>
                </div>
                <h5 className='border-b-[1px] border-black'>Website home page information</h5>
                <div className='m-4'>
                    <p>This form takes live website main page information, This information will be display on the home page in the live website.</p>
                    <img className='h-auto w-auto' src="/images/home.png" alt="" />
                    <p className='mt-6'>Details:</p>
                    <ul className='list-disc'>
                        <li>Hero Section Title: In this field, you can add your websites main title.</li>
                        <li>Hero Section Sub-Title:In this field, you can add some text about your website.</li>
                        <li>Hero Section Image: In this field, you can add 2 photos to your company.</li>
                        <li>Why To File tax:In this field, You can add your main job type, we recommend you to give data on 3 cards.
                            <img className='h-auto w-auto mx-auto my-4' src="/images/why.png" alt="" />
                        </li>
                        <li>Why: The main reasons why users use your company and the 4 important points of your company you can tell.
                            <img className='h-auto w-auto' src="/images/why1.png" alt="" />
                        </li>
                        <li>Add Services: In this field,You can add your services as you wish.</li>
                        <li>Add Information Videos: In this field,You can add some informative vidoes. we recommend you to give 3 videos.</li>
                        <li>Partnerships logo: In this field,You can add your partnerships logo as you wish.</li>
                        <li>File Tax Videos: In this field,You can add your tax file related videos as you wish.</li>
                        <li>How To File Tax Title: In this field,You can add your tax file related videos left side header.</li>
                        <li>How To File Tax Short Description: In this field,You can add your tax file related videos left side headers description.</li>
                    </ul>


                </div>
            </div>
        </AdminLayout>
    );
};

export default HomePage;