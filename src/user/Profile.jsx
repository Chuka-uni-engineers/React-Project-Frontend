const Profile = () => {
    return (
        <div className="flex flex-col p-3 sm:p-4 md:p-10 items-center justify-center h-screen bg-gray-100">

            <div className="relative h-[300px] overflow-clip w-full max-w-sm rounded-2xl shadow-sm">

                <div
                    className="absolute top-[-30px] w-[600px] left-[-200px] bg-primary h-48 shadow-sm rotate-[-15deg] ">
                </div>
                <div
                    className="absolute ring-4 ring-primary top-[-20px] rounded-full right-1/2 translate-y-1/2 translate-x-1/2">
                   <div className="relative">
                       <img src="https://i.pravatar.cc/300" alt="avatar"
                            className="rounded-full h-40 w-40 border-4 border-white shadow-sm"/>
                          <div className="absolute btn btn-xs btn-circle ring-2 bottom-2 right-2 rounded-full p-1">
                                <i className="fa-solid fa-camera"></i>
                          </div>
                   </div>
                </div>
                <div className="absolute w-full p-2 text-2xl flex justify-between">
                    <div className="left flex flex-col">
                        <i className="fa-solid fa-circle-chevron-left"></i>
                        <div className="text-xs font-semibold">
                            Back
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-white">
                        Raccoon
                    </h1>
                    <div className="right flex flex-col">
                        <i className="fa-solid fa-palette"></i>
                        <div className="text-xs font-semibold">
                            Edit
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="m-3 p-3 sm:p-4 md:p-10 bg-gray-100 border-2 border-blue-500 rounded-2xl shadow-lg max-w-sm w-full sm:w-1/2 md:w-1/3">
            </div>
        </div>
    )
}

export default Profile;