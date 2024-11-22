import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const MyTaxFile = () => {
    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>User Tax File Submission</h5>
                    <div className='m-4'>
                        <p>On this page, the user can see all tax file processing information in card form. The processing of a tax file is done in several steps.</p>
                        <img className='h-auto w-auto' src='/images/submission.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 15%</h5>
                    <div className='m-4'>
                        <p>The 15% progress indicates that the user didn’t complete the necessary information or files submissions.</p>
                        <img className='h-auto w-auto' src='/images/card1.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 25%</h5>
                    <div className='m-4'>
                        <p>This indicates the user submitted the all necessary information and files but didn’t complete the payment.</p>
                        <img className='h-auto w-auto' src='/images/card2.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 50%</h5>
                    <div className='m-4'>
                        <p>When the user completes his payment then it shows 50%.</p>
                        <img className='h-auto w-auto' src='/images/card3.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 75%</h5>
                    <div className='m-4'>
                        <p>When the admin submits the user files to the accountant then it shows 75%.</p>
                        <img className='h-auto w-auto' src='/images/card4.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Work Processing 100%</h5>
                    <div className='m-4'>
                        <p>When all the tax filing work is done, the user can see 100% status and after that, the file download button will appear and the user can download his/her files.</p>
                        <img className='h-auto w-auto' src='/images/card5.png' alt="" />
                    </div>
                </div>
                <div className='my-4'>
                    <h5 className='border-b-[1px] border-black'>Download Button</h5>
                    <p>The user cannot download his/her file until the working process is 100%.</p>
                    <div className='m-4 md:grid md:grid-cols-2'>
                        <img className='h-auto w-auto' src='/images/card7.png' alt="" />
                        <img className='h-auto w-auto' src='/images/card6.png' alt="" />
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default MyTaxFile;