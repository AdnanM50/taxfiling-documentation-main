import React from 'react';


const Agents = () => {
    return (

            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Support-Ticket Agents </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                            Ticket-employee are created by the admin. Each ticket-employee  can reply to the ticket and can change the status of the ticket.
                            Ticket will be automatically assigned to  ticket-employee  by  ticket department and category.
                            This screen contains the list of all the agents that are created by the admin. Admin can create, edit, and delete agents.
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/agent/agent.png" alt="" />
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add Employee</p>
                            To add a new Ticket employee, click on the <span className='font-semibold'>Add Employee</span> button.
                            Enter the name, email, password, and role in the respective fields. Click on the <span className='font-semibold'>Save</span> button to save the employee.
                            <p className={'text-orange-600 font-semibold'}>             **               Note: Select Department and Designation for the employee must be equal to ticket & support **
                            </p>
                            <img className='w-auto mt-4' src="/images/support_ticket/agent/addagent.png" alt="" />
                        </li>

                    </ul>
                </div>
            </div>

    );
};

export default Agents;
