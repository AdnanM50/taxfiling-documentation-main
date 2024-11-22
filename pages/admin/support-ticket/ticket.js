import React from 'react';
const Ticket = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'> Support Tickets </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Detail page</p>
                            This is the detail page of the ticket. Here you can see the details of the ticket.
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/ticket/1ticketpage.png"
                                 alt=""/>
                            <ul className='list-disc'>

                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Search &
                                        Filter</p>
                                    You can search and filter the tickets by using the search bar and filter options.
                                    <img className='h-[500px] w-auto mt-4'
                                         src="/images/support_ticket/ticket/2searchandfilter.png" alt=""/>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add Ticket</p>
                                    You can add a new ticket by clicking on the add button. This will open a modal where
                                    you can add the details of the ticket.
                                    <img className='h-[500px] w-auto mt-4'
                                         src="/images/support_ticket/ticket/3addticket.png" alt=""/>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'>Ticket
                                        Details</p>
                                    You can see the details of the ticket in the detail page. You can also see the Notes
                                    and Files of the ticket.
                                    <img className='h-[500px] w-auto mt-4'
                                         src="/images/support_ticket/ticket/4detailspage.png" alt=""/>
                                </li>
                                <li className='my-4'>
                                    <p className='border-b-[1px] border-black font-semibold text-[18px]'> Details page
                                        Functionality</p>
                                    Details page has the following functionality:
                                    <ul className='list-disc'>
                                        <li className='my-4'>
                                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Reply
                                                to ticket</p>
                                            You can reply to the ticket . Type your reply in the text area and click on
                                            the send button.
                                        </li>
                                        <li className='my-4'>
                                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add
                                                Note</p>
                                            You can add a note to the ticket. Click on the add note button and type your
                                            note in the text area.
                                        </li>
                                        <li className='my-4'>
                                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>CLose a
                                                ticket </p>
                                            Only admin & employee can close a ticket. Click on the close button to close
                                            the ticket.
                                            <img className='h-[500px] w-auto mt-4'
                                                 src="/images/support_ticket/ticket/5details%20page%20funtionality.png"
                                                 alt=""/>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Ticket;
