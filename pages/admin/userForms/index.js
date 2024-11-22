import { useRouter } from 'next/router';
import React from 'react';
import AdminLayout from '../../../layout/adminLayout';

const UserFormsFields = () => {
    const router = useRouter();

    const handleRouteChange = () => {
        router.push('userForms/commonField/')
    }
    const handleTermsRouteChange = () => {
        router.push('userForms/termCon/')
    }

    return (
        <AdminLayout>
            <div className='bg-gray-50 h-auto m-6 w-[90%] text-[16px] p-4'>
                <h5 className='border-b-[1px] border-black text-center p-2 text-[20px]'>User Forms Fields</h5>
                <p>We have provided our users with a complete dynamic form system. Dynamic form field means any admin can add/delete any type of form field required for his work. But for this application, this system is used to manage user form data collection fields. Because we have given complete freedom to the admin to create his user roles because the admin will define the user roles as per his requirement, in the case of role-based data collection, he will need different form fields. However, for the convenience of the admin, we have added some common form fields by default, which can be viewed by clicking on <span className='text-red-500 font-bold italic '>view common fields </span> button. However, for information collected from the mentioned user, we have arranged 3 steps, the first and second step is information, for which the frame field has to be determined from here, third or last step includes payment.</p>
                <p className='text-[18px] font-medium'>Below is the description of the working process for the complete section:</p>
                <ul className='list-disc'>
                    <li className='my-4'>
                        <h5 className='inline'>User Forms Fields Select User option : </h5>
                        <p className='inline'>In this section, the administrator must select a role to view the visible common form fields.</p>
                        <img className='h-auto w-auto my-2' src="/images/userform4.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>Role wise User Forms Fields: </h5>
                        <p className='inline'>Admin can manage User Form Fields by creating Add User Role in the Roles and Permission section. This will be visible when a user will submit their tax files and the user has to fill out these fields.</p>
                        <img className='h-auto w-auto my-2' src="/images/userform.png" alt="" />
                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>View Common Forms Fields button: </h5>
                        <p className='inline'>Admin can manage and set fields for the user by clicking on View Common Fields. Now admin can see the existing fields. Also, the admin can add new fields by clicking on Add New Filed button. </p>
                        <img className='h-auto w-auto my-2' src="/images/viewformfield.png" alt="" />

                    </li>
                    <li className='my-4'>
                        <h5 className='inline'>Add New fields: </h5>
                        <p className='inline' >When the admin clicks on Add New Field, the admin will see a drawer. Now admin can add user fields from here.</p>
                        <p className='font-medium mt-4 mb-0'>Method of use:</p>
                        <ul className='list-disc'>
                            <li>First, you need to select a specific role.
                                <img className='h-auto w-auto m-2 border' src="/images/addfeild.png" alt="" />
                            </li>
                            <li>Then insert a name in Input Name filed.
                                <img className='h-auto w-auto m-2 border' src="/images/name.png" alt="" />
                            </li>
                            <li>Then select input type.
                                <img className='h-auto w-auto m-2 border' src="/images/type.png" alt="" />
                                <p className='mt-4 mb-0'>While defining the input field you need to follow some information below:</p>
                                <ul className='list-disc'>
                                    <li>We have included 14 types of field types in this list:
                                        <ul className='list-disc'>
                                            <li>Text: It collects string values.</li>
                                            <li>Boolean: It collects true/false value.</li>
                                            <li>File: It collects any type of document(pdf/excell/word etc).</li>
                                            <li>Number: It collects number value.</li>
                                            <li>Password: It collects password.</li>
                                            <li>Textarea: Through this, a lot of data can be taken at once.</li>
                                            <li>Images: It collects images.</li>
                                            <li>Date: It collects dates.</li>
                                            <li>Time: It collects time.</li>
                                            <li>Switch: It collects yes/no types data.</li>
                                            <li>Digital Signature: It collects digital hand writing signature.</li>
                                            <li>Select:It collects multiple data sets for a particular field.
                                                <div className='md:grid md:grid-cols-2'>
                                                    <img className='h-auto w-auto m-2 border' src="/images/select1.png" alt="" />
                                                    <img className='h-auto w-auto m-2 border' src="/images/select2.png" alt="" />
                                                </div>
                                            </li>
                                            <li>Radio Button: You can also manage multiple Radio Button by creating Add New Option button.</li>
                                            <li>Checkbox: Additional links can be added within this field.
                                                <img className='h-auto w-auto m-2 border' src="/images/checkbox.png" alt="" />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Input Placeholder: You need to specify what messages you want to show the audience.
                                <img className='h-auto w-auto m-2 border' src="/images/placeholder.png" alt="" />
                                <p>You can manage the field whether it is required or not by selecting Yes or No respectively.</p>
                                <img className='h-auto w-auto m-2 border' src="/images/reguire.png" alt="" />
                            </li>
                            <li>Status: You can also set the status of the field too. If the status is True then this field will be visible to users. If the status is set to False then it will not be visible to users.
                                <img className='h-auto w-auto m-2 border' src="/images/status.png" alt="" />
                            </li>
                            <li>Step: You need to must specify the field for the specific Step whether it will be for Step 1 or Step 2.
                                <img className='h-auto w-auto m-2 border' src="/images/step.png" alt="" />
                            </li>
                            <li>Select Action: This field should be common or specific.
                                <img className='h-auto w-auto m-2 border' src="/images/action.png" alt="" />
                            </li>
                        </ul>
                    </li>
                    <li className='my-4 bg-red-500 p-4'>
                        <h5 className='inline  text-white'>Terms and Conditions: </h5>
                        <p className='inline text-[18px] text-white'>It is very important to add a terms and conditions option to your user form. Please follow the process.</p>
                        <p className='inline  text-white mx-4 border-2 border-white rounded px-4 py-1 cursor-pointer font-bold' onClick={handleTermsRouteChange}>
                            Click Here</p>
                    </li>
                </ul>
            </div>
        </AdminLayout>
    );
};

export default UserFormsFields;