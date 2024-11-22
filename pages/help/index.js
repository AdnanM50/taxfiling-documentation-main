import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { FcOnlineSupport } from "react-icons/fc";
import { BsFacebook, BsSkype, BsWhatsapp, BsYoutube } from "react-icons/bs";
import Link from 'next/link';

const HelpPage = () => {
    const linkData = {
        email: 'support@appstick.com.bd' ?? "",
        web: 'https://appstick.com.bd' ?? "",
        sk: 'https://join.skype.com/invite/vAanTx5sbAUD' ?? "",
        wp: 'https://wa.me/+8801404049797' ?? "",
        fb: 'https://www.facebook.com/appstick.com.bd' ?? "",
        yt: 'https://www.youtube.com/channel/UC3FOvh2oLyTOb3jTjJafBFw' ?? "",

    }

    return (
        <AdminLayout>
            <div className='p-10 lg:m-10 rounded lg:grid lg:grid-cols-2 lg:gap-8 font_family'>
                <div>
                    <h2 className='flex gap-2 items-center text-[34px]'><span ><FcOnlineSupport size={30} /></span> Get in touch</h2>
                    <p className='text-[18px] leading-loose'>Want to get in touch? We would love to hear from you.</p>
                    <p className='text-[20px]'>Email: <Link href={`mailto:${linkData?.email}`}><a className='cursor-pointer'  >support@appstick.com.bd</a></Link></p>
                    <div className='text-[20px] md:flex gap-2'>Website: <Link href={`${linkData?.web}`} >
                        <a className='cursor-pointer '  target='_blank'><span>www.appstick.com.bd</span> </a>
                    </Link>
                    </div>
                    <div className='my-2 cursor-pointer text-[18px] p-3 lg:w-[40%] bg-[#00A4E1] rounded-lg'>
                        <Link href={`${linkData?.sk}`} passHref>
                            <a className='flex items-center gap-2 text-white' target='_blank'>
                                <span><BsSkype size={35} /></span> <span>Chat on Skype</span> </a>

                        </Link>
                    </div>

                    <div className=' cursor-pointer text-[18px] p-3 lg:w-[40%] bg-green-500 rounded-lg'>
                        <Link href={`${linkData?.wp}`}>
                            <a className='flex items-center gap-2 text-white'  target='_blank'><span><BsWhatsapp size={35} /></span><span> Chat on Whatsapp</span></a>
                        </Link>
                    </div>
                    <div className='my-2 cursor-pointer text-[18px] p-3 lg:w-[40%] bg-blue-500 rounded-lg'>
                        <Link href={`${linkData?.fb}`}>
                            <a className='flex items-center gap-2 text-white'  target='_blank'><span><BsFacebook size={35} /></span><span> Chat on Facebook</span></a>
                        </Link>
                    </div>
                    <div className=' cursor-pointer text-[18px] p-3 lg:w-[40%] bg-[#FF0000] rounded-lg'>
                        <Link href={`${linkData?.yt}`}>
                            <a className='flex items-center gap-2 text-white'  target='_blank'><span><BsYoutube size={35} /></span><span>Our Youtube Channel</span> </a>
                        </Link>
                    </div>
                </div>
                <div className='bg-[#f3f6fe] flex items-center drop-shadow-lg h-[600px] w-full'>
                    <img className='scene rounded drop-shadow-lg' src="/images/appstick.jpg" alt="" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default HelpPage;