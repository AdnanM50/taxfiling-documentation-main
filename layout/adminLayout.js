import {
    MdEditNote, MdRule, MdAnnouncement, MdAdminPanelSettings, MdOutlineSupportAgent, MdSupervisorAccount, MdSupervisedUserCircle, MdPhoneInTalk, MdPassword,
} from "react-icons/md";
import Sidebar from "../components/dashboard/sidebar.js";
import Header from "../components/dashboard/header.js";
import { TiContacts } from "react-icons/ti";
import { CgMediaLive } from "react-icons/cg";
import { FcWorkflow } from "react-icons/fc";
import { TiFlowMerge } from "react-icons/ti";


const AdminLayout = ({ children }) => {

    const menu = getMenu()

    return (
        <div className="dashboard">
            <Sidebar menu={menu} />
            <Header />
            <div className="absolute top-0 h-32 w-full " />
            <div className="main-content ">
                <div className="w-full z-30" style={{ minHeight: 400 }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout;


const menu = [

    {
        label: 'Instruction',
        icon: MdAnnouncement,
        child: [
            {
                label: 'Installation Process',
                icon: MdRule,
                href: '/instruction/install',
            },
            {
                label: 'Backend Installation Process',
                icon: MdRule,
                href: '/instruction/backend',
            },
            {
                label: 'Frontend Installation Process',
                icon: MdRule,
                href: '/instruction/frontend',
            },
            {
                label: 'Env File Setting',
                icon: MdEditNote,
                href: '/instruction/setting',
            },
            {
                label: 'Website Run Time Work Flow',
                icon: TiFlowMerge,
                href: '/instruction/run',
            },
        ]
    },
    {
        label: 'Tax Filing Work Flow',
        icon: FcWorkflow,
        href: '/flow/file',
    },
    {
        label: 'Admin Panel',
        icon: MdAdminPanelSettings,
        child: [
            {
                label: 'Admin Login',
                icon: TiContacts,
                href: '/admin/login',
            },
            {
                label: 'Admin Profile Setting',
                icon: TiContacts,
                href: '/admin/profile',
            },
            {
                label: 'User Forms Feilds',
                icon: TiContacts,
                href: '/admin/userForms',
            },
            {
                label: 'User ',
                icon: TiContacts,
                href: '/admin/user',
            },
            {
                label: 'Province ',
                icon: TiContacts,
                href: '/admin/province',
            },
            {
                label: 'Coupon ',
                icon: TiContacts,
                href: '/admin/coupon',
            },
            {
                label: 'Admin Tax Feilds',
                icon: TiContacts,
                href: '/admin/allFiles',
            },
            {
                label: 'Role And Permission',
                icon: TiContacts,
                href: '/admin/rolePermission',
            },
            {
                label: 'Support Tickets',
                icon: TiContacts,
                href: '/admin/support-ticket',
            },
            {
                label: 'Marketing',
                icon: TiContacts,
                href: '/admin/marketing',
            },
            {
                label: 'Website Setting',
                icon: TiContacts,
                href: '/admin/landingPage',
            },
        ]
    },
    {
        label: 'Accountant Panel',
        icon: MdSupervisorAccount,
        child: [
            {
                label: 'Accountant Login',
                icon: TiContacts,
                href: '/accountant/login',
            },
            {
                label: 'Account All Files',
                icon: TiContacts,
                href: '/accountant/allTaxFile',
            },
        ]
    },
    {
        label: 'User Panel',
        icon: MdSupervisedUserCircle,
        child: [
            {
                label: 'User Login',
                icon: TiContacts,
                href: '/user/login',
            },
            {
                label: 'Tax File Submission',
                icon: TiContacts,
                href: '/user/form',
            },
            {
                label: 'My Tax File',
                icon: TiContacts,
                href: '/user/mytaxFile',
            },
            {
                label: 'File From A/C ',
                icon: TiContacts,
                href: '/user/fileAC',
            },
            {
                label: 'Feedback',
                icon: TiContacts,
                href: '/user/feebbackUS',
            },
            {
                label: 'Support Ticket',
                icon: TiContacts,
                href: '/user/support-ticket',
            },
        ]
    },
    {
        label: 'Live Pages',
        icon: CgMediaLive,
        child: [
            {
                label: 'Home Page',
                icon: TiContacts,
                href: '/live/home',
            },
            {
                label: 'About Page',
                icon: TiContacts,
                href: '/live/about',
            },
            {
                label: 'Contact Page',
                icon: TiContacts,
                href: '/live/contact',
            },
            {
                label: 'Tax Situation Pages',
                icon: TiContacts,
                href: '/live/taxSituation',
            },
            {
                label: 'More Pages',
                icon: TiContacts,
                href: '/live/more',
            },
        ]
    },
    {
        label: 'Tawk to',
        icon: MdPhoneInTalk,
        href: '/tawkTo',
    },
    {
        label: 'Password Reset',
        icon: MdPassword,
        href: '/password',
    },
    {
        label: 'Help and Support',
        icon: MdOutlineSupportAgent,
        href: '/help',
    },
]


const getMenu = () => {
    return menu;
}
