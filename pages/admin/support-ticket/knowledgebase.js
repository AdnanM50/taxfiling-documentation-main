import React from 'react';
const KnowledgeBase = () => {
    return (
            <div>
                <h4 className='text-center border-b-[1px] py-2 border-black'>Knowledge Base </h4>
                <div className='m-4'>
                    <ul className='list-disc'>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Descriptions</p>
                            Knowledge base is a collection of Question & Answer that are created by the admin. Each
                            article contains a Question and Answer . Admin can create, edit, and delete articles.
                            Admin can also create, edit, and delete
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/knwledgebase/kb.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add Knowledge-base</p>
                            To add a new knowledge base, click on the <span className='font-semibold'>Add Knowledge-base</span> button.
                            Enter the Question and Answer in the respective fields. Click on the <span className='font-semibold'>Save</span> button to save the knowledge base.
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/knwledgebase/addkb.png" alt=""/>
                        </li>
                        <li className='my-4'>
                            <p className='border-b-[1px] border-black font-semibold text-[18px]'>Add Knowledge-base</p>
                           There is edit and delete button on the right side of each knowledge base. Click on the <span className='font-semibold'>Edit</span> button to edit the knowledge base.
                            <img className='h-[500px] w-auto mt-4' src="/images/support_ticket/knwledgebase/editkb.png" alt=""/>
                        </li>

                    </ul>
                </div>
            </div>
    );
};

export default KnowledgeBase;
