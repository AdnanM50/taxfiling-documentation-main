import React from 'react';

const Settings = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Support-ticket Setting</h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                            Support-ticket Setting contains the list of all the settings.
                            <ul className='list-disc'>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Department Setting</p>
                                    Department Setting contains the list of all the departments that are created by the admin. Admin can create, edit, and delete departments.
                                    <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/setting/setting1.png" alt="" />
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Category Setting</p>
                                    Category Setting contains the list of all the categories that are created by the admin. Admin can create, edit, and delete categories.
                                     <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/setting/setting2.png" alt="" />
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Type Setting</p>
                                    Type Setting contains the list of all the Type that are created by the admin. Admin can create, edit, and delete type.
                                    <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/setting/setting3.png" alt="" />
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Priorities Setting</p>
                                    Priorities Setting contains the list of all the priorities that are created by the admin. Admin can create, edit, and delete triorities.
                                    <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/setting/setting1.png" alt="" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Settings;
