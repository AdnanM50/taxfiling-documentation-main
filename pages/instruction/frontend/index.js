import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const backend = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-2'>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Frontend Installation Process</h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 1</p>
                            Open the folder first.
                            <img className='h-[500px] w-auto mt-4' src="/images/front.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 2</p>
                            Then you need to find the <span className=' text-red-400'> next.config.js</span> file and open it in your appropriate text editor.
                            <img className='h-[500px] w-auto my-4' src="/images/f2.png" alt="" />
                            <p>Because you need to change the necessary information of your website such as <span className=' text-red-400'>BACKEND URL, the text is underlined in the image below</span>, in this case, you must be provided your personal backend domain or sub domain URL and save it.</p>
                            <img className='h-[500px] w-auto mt-4' src="/images/f3.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 3</p>
                            Then you need to open your terminal or command prompt (mac and linus user) or windows user you have to follow the picture. Select the address bar and type <span className=' text-red-400'>cmd</span>
                            <img className='h-[500px] w-auto my-4' src="/images/f5.png" alt="" />
                            <p>Then the command prompt open. Type <span className=' text-red-400'>yarn run buildexport</span> and hit enter</p>
                            <img className='h-auto w-auto my-4' src="/images/f6.png" alt="" />
                            <p>After build successfully, you can see <span className=' text-red-400'>Export successful</span> message and then you will get <span className=' text-red-400'>out</span> folder</p>
                            <img className='h-auto w-auto my-4' src="/images/f7.png" alt="" />

                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 4</p>
                            <p>Now zip the <span className=' text-red-400'>out</span> folder and upload it to your server.</p>
                            <img className='h-auto w-auto my-4' src="/images/f8.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Step 5</p>
                            <p>Then you go to your server panel or cPanel, Select your <span className=' text-red-400'>Document Root</span> and right click on your mouse.</p>
                            <img className='h-auto w-auto my-4' src="/images/f9.png" alt="" />
                            <p className='text-[20px] text-red-500 font-bold'>** Now you need to follow the backend installation process Step 2 - Step 10</p>
                            <p className='text-[20px] text-red-500 font-bold'>Note: in Step 7 of backend installation process, in the domain name section please confirm that it will be the root domain (Not a subdomain). For example, your_main_domain.com</p>
                        </li>
                        <p className='border-[1px] border-green-500 text-center p-2 text-green-500 font-semibold text-[24px]'>After successful completion of all the processes, your website will go live, visit your domain url, for example <span className='italic '>your_main_domain.com</span> </p>
                        <p className='text-right'>
                            <Link href={`mailto:support@appstick.com.bd`}><a className='lg:mr-6  hover:cursor-pointer font-[Montserrat]'>***** support@appstick.com.bd *****</a></Link>
                        </p>
                    </ul>
                </div>
            </div>
        </AdminLayout>
    );
};

export default backend;