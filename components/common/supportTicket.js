import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import { SectionHeading } from './common';

const SupportTicketCommon = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <SectionHeading heading="Support Ticket" />
                <div>
                    <p>Users can seek for help with any issue regarding the service. From the support ticket page user can view the created tickets and their status if he/she have already created a ticket. User can also see a detail view of the ticket by clicking on the Action column icon. Besides the user can also create a new ticket by clicking the add ticket button</p>
                    <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/support-ticket.png" alt="support-ticket" />
                    <p className='mt-3'>There can be three types of status:</p>
                    <ul className='list-disc'>
                        <li>
                            <span className='text-yellow-500 font-semi-bold'>Pending: </span>The ticket is created but has not been answered yet
                        </li>
                        <li>
                            <span className='text-green-500 font-semi-bold'>Open: </span>The ticket has been answered.
                        </li>
                        <li>
                            <span className='text-red-500 font-semi-bold'>Closed: </span>The issue is solved.
                        </li>
                    </ul>
                    <p className='mt-3'>To create a new ticket click on the Add Ticket button. It will open a modal. Fill out the necessary information and click Add Ticket.</p>
                    <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/add-ticket.png" alt="add-ticket" />
                    <p className='mt-3'>In the detailed view page, user will see a Interface where he/she can</p>
                    <ul className='list-disc'>
                        <li>have live chat with an agent. The user may have to wait till the agent makes the first response</li>
                        <li>Take notes</li>
                    </ul>
                    <img className='h-auto w-auto mx-auto mt-2' src="/images/user-panel/ticket-details.png" alt="ticket-details" />
                </div>
            </div>
        </AdminLayout>
    );
};

export default SupportTicketCommon;