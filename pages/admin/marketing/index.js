import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import { Tabs } from 'antd';

const Marketing = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    <Tabs.TabPane tab="SMS Options" key="1">
                        <h4 className='text-center font-semibold underline'>SMS Options</h4>
                        <p className='text-base'>Here you will see a form. You can send a message to an individual person or in a group using this form. By clicking the send now or schedule for later button, you can send a message immediately or later.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>Send sms</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-sms.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>All SMS :</span> Here, you will see the list of all successful, pending, or failed SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Pending SMS :</span> Here, you will see the list of all pending SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Delivered SMS :</span> Here, you will see the list of all successful SMS.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Schedule SMS :</span> Here, you will see the list of all SMS that are scheduled for later.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Failed SMS :</span> Here, you will see the list of all failed SMS.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Whatsapp Options" key="2">
                    <h4 className='text-center font-semibold underline'>Whatsapp Options</h4>
                        <p className='text-base'>Here you will see a form. You can send a message to an individual person or in a group using this form. By clicking the send now or schedule for later button, you can send a message immediately or later.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>Send Whatsapp Message</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-whatsapp.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>All Whatsapp Message :</span> Here, you will see the list of all successful, pending, or failed Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Pending Whatsapp Message :</span> Here, you will see the list of all pending Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Delivered Whatsapp Message :</span> Here, you will see the list of all successful Message.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Schedule Whatsapp Message :</span> Here, you will see the list of all Message that are scheduled for later.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Failed Whatsapp Message :</span> Here, you will see the list of all failed Message.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Email Options" key="3">
                        <h4 className='text-center font-semibold underline'>Email Options Page</h4>
                        <p className='text-base'>Here you will see a form. You can send a email to an individual person, in a group or subscribed user using this form. By clicking the send now or schedule for later button, you can send a email immediately or later.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>Send Email</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-email.png' alt="" />
                        <p className='text-base mt-4'>If you want to send email to an individual person, you have to enter his/her email address only. On the other hand, you can send email to a specific group by selecting a group or by clicking the <span className='font-medium text-[#FFA525]'>Send to Subscribed User</span> checkbox to send email to the subscribed user.</p>
                        <img className='h-auto w-auto shadow-sm mx-auto' src='/images/admin/marketing/email-group.png' alt="" />
                        <img className='h-auto w-auto shadow-sm mt-5 mx-auto' src='/images/admin/marketing/email-tem.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>All Email :</span> Here, you will see the list of all successful, pending, or failed Email.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Pending Email :</span> Here, you will see the list of all pending Email.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Delivered Email :</span> Here, you will see the list of all successful Email.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Schedule Email :</span> Here, you will see the list of all Email that are scheduled for later.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>Failed Email :</span> Here, you will see the list of all failed Email.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Manage User" key="4">
                        <h4 className='text-center font-semibold underline'>Manage User Page</h4>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>All Users</h5>
                            <div className='m-4'>
                                <p className='text-base'>Here, you will see a list of all users, drivers, and employees involved in this platform.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/all-user.png' alt="" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Active Users</h5>
                            <div className='m-4'>
                                <p className='text-base'>Here, you will see a list of all active users involved in this platform. You can ban any user from the list by using the action button on the right side.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/active-user.png' alt="" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Banned Users</h5>
                            <div className='m-4'>
                                <p className='text-base'>Here, you will see a list of all banned users involved in this platform. You can activate any user from the list by using the action button on the right side.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/banned-user.png' alt="" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Subscribed Users</h5>
                            <div className='m-4'>
                                <p className='text-base'>Here, you will see a list of all users who have subscribed to this platform by using the landing page newsletter form. You can ban or activate any user from the list by using the action button on the right side. You can also add a subscribed user manually by clicking on the <span className='text-[#FFA525] font-semibold'>subscribe to our newsletter</span> button.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/subscribed-user.png' alt="" />
                            </div>
                        </div>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Manage Group" key="5">
                        <h4 className='text-center font-semibold underline'>Manage Group Page</h4>
                        <p className='text-base text-center'>Here you will see user sms group list. See the screenshot below and follow the process.</p>
                        <p className='text-base underline font-semibold capitalize mt-4'>User Sms Groups</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/manage-group.png' alt="" />
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>User Whatsapp Groups :</span> Follow the same process as the <span className='font-semibold'>User Sms Groups</span>.</p>
                            </li>
                            <li>
                                <p><span className='text-base font-medium text-[#FFA525]'>User Email Groups :</span> Follow the same process as the User <span className='font-semibold'>User Sms Groups</span>.</p>
                            </li>
                        </ul>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="SMS Settings" key="6">
                        <h4 className='text-center font-semibold underline'>SMS Settings Page</h4>
                        <p className='text-base'>For additional security purposes, we are using the Twilio messaging service. So company owner need to activate Twilio service after activated Twilio service he will get Twilio number, Twilio Auth Token, and Twilio Account SID. He can use the service only by providing them in the fields below.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/sms-setting.png' alt="" />
                        <p className='text-base mt-4'>When the admin activates Twilio, all the users of his website will receive a code as a message on their phone after login and after verifying with the code, they can see the dashboard.</p>
                        <p className='bg-[#FFA525] text-white text-lg text-center py-4 rounded-lg font-semibold mt-5'>*Twilio is a paid service, the owner has to pay for this service.</p>

                        <p className='border-2 !border-[#FFA525] text-[#FFA525] text-lg text-center py-4 rounded-lg font-semibold mt-5'>If the admin does not want to use this service, he/she may not fill out this form, in that case, they can log in to the dashboard after giving the email password.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Whatsapp Settings" key="7">
                        <h4 className='text-center font-semibold underline'>Whatsapp Settings Page</h4>
                        <p className='text-base'>For additional security purposes, we are using the Twilio Whatsapp service. So company owner need to activate Twilio service after activated Twilio service he will get Twilio Whatsapp number, Twilio Whatsapp Auth Token, and Twilio Whatsapp Account SID. He can use the service only by providing them in the fields below.</p>
                        <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/whatsapp-setting.png' alt="" />
                        <p className='text-base mt-4'>When the admin activates Twilio, all the users of his website will receive a code as a whatsapp message on their whatsapp account after login and after verifying with the code, they can see the dashboard.</p>
                        <p className='bg-[#FFA525] text-white text-lg text-center py-4 rounded-lg font-semibold mt-5'>*Twilio is a paid service, the owner has to pay for this service.</p>

                        <p className='border-2 !border-[#FFA525] text-[#FFA525] text-lg text-center py-4 rounded-lg font-semibold mt-5'>If the admin does not want to use this service, he/she may not fill out this form, in that case, they can log in to the dashboard after giving the email password.</p>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Email Settings" key="8">
                        <h4 className='text-center font-semibold underline'>Email Configuration</h4>
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>SendGrid SMTP</h5>
                            <div className='m-4'>
                                <p className='text-base'>If you want to activate the SendGrid email service, please contact support.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-grid-email.png' alt="" />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Gmail Provider</h5>
                            <div className='m-4'>
                                <p className='text-base'>This option is enabled by default. If you use Gmail, you can get this data in the Gmail service.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/send-grid-email.png' alt="" />
                            </div>
                        </div>
                        
                        <div className='my-4'>
                            <h5 className='border-b-[1px] border-[#FFA525] capitalize pb-2'>Other Email Provider</h5>
                            <div className='m-4'>
                                <p className='text-base'>You can use other email services by collecting data and filling out all the forms according to the form below. If you faces any problem, please contact support.</p>
                                <img className='h-auto w-auto shadow-sm' src='/images/admin/marketing/other-provider.png' alt="" />
                            </div>
                        </div>
                        <p className='text-base underline font-semibold capitalize mt-4'>another page</p>
                        <ul className='list-disc text-base'>
                            <li>
                                <p><span className='font-medium text-[#FFA525]'>Email Templates :</span> These template will be shown in the email options page.</p>
                            </li>
                        </ul>

                    </Tabs.TabPane>
                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default Marketing;