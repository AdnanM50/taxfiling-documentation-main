import React from 'react';
import AdminLayout from '../../../layout/adminLayout';
import {Tabs} from 'antd';
import Ticket from "./ticket";
import KnowledgeBase from "./knowledgebase";
import Organization from "./organization";
import Agents from "./agents";
import Settings from "./setting";

const pages = [
    {
        title: 'Ticket',
        page: < Ticket/>
    },
    {
        title: 'Knowledge Base',
        page: < KnowledgeBase/>
    },
    {
        title: 'Organization',
        page: < Organization/>
    },
    {
        title: 'Agents',
        page: < Agents/>
    },
    {
        title: 'Settings',
        page: < Settings/>
    }
]
const FrontendPages = () => {
    return (
        <AdminLayout>
            <div className='bg-yellow-50 bg-opacity-20 h-auto m-6 w-[90%] text-[16px] p-4 rounded'>
                <Tabs defaultActiveKey="1" centered>
                    {/* landing page */}
                    {
                        pages.map((page, index) => {
                            return (
                                <Tabs.TabPane tab={page.title} key={index + 1}>
                                    {page.page}
                                </Tabs.TabPane>
                            )
                        })
                    }

                </Tabs>
            </div>
        </AdminLayout>
    );
};

export default FrontendPages;
