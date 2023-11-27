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
                <div className="absolute text-base-100 w-full p-3 text-2xl flex justify-between">
                    <div className="left flex flex-col">
                        <i className="fa-solid fa-circle-chevron-left"></i>
                        <div className="text-xs font-semibold">
                            Back
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">
                        Raccoon
                    </h1>
                    <div className="right relative flex flex-col">
                        <i className="fa-solid fa-bell"></i>
                        <div className="absolute left-3 top-[-5px] rounded-full bg-red-500 text-white text-xs font-semibold w-4 h-4 flex justify-center items-center">
                            2
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full p-3 gap-3 flex justify-center">
                    <button className={'btn btn-sm ring-2 ring-secondary ring-offset-1 btn-outline btn-secondary'}>
                        Follow
                        <i className={"fa-solid fa-user-plus"}></i>
                    </button>

                    <button className={'btn btn-sm ring-2 ring-success ring-offset-1 btn-outline btn-success'}>
                        Inbox
                        <i className={"fa-solid fa-envelope"}></i>
                    </button>

                </div>
            </div>

            <div
                className="m-3 p-3 sm:p-4 md:p-10 bg-gray-100 border-2 border-blue-500 rounded-2xl shadow-lg max-w-sm w-full sm:w-1/2 md:w-1/3">
                <div className="flex px-3 border-b-2 pb-2 border-gray-300 justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-sm font-semibold text-gray-500">
                            Followers
                        </div>
                        <div className="text-xs font-bold">
                            1.2K
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-sm font-semibold text-gray-500">
                            Following
                        </div>
                        <div className="text-xs font-bold">
                            1.2K
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-sm font-semibold text-gray-500">
                            Projects
                        </div>
                        <div className="text-xs font-bold">
                            5
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">About Me</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Profile;