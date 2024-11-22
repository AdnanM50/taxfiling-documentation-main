
import AdminLayout from "../layout/adminLayout";


export default function Home() {



    return (
        <AdminLayout>
            <div className="flex justify-center items-center h-[400px] ">
                <div className="shadow w-[70%] p-10">
                    <h3 className="text-[24px] mb-4 font-bold text-center border-b-2 border-black pb-4">Welcome To Taxstick</h3>
                    <p className="text-[18px] text-justify">Taxstick is a web-based solution that provides a complete online-based tax management system. It provides a full company website with admin, account, and user panels where each individual can manage their tax file management easily. Any organization involved in tax management may use the solution in accordance with their demands because it is entirely dynamic as well as easy to customize.</p>
                </div>
            </div>
        </AdminLayout>
    );
}
