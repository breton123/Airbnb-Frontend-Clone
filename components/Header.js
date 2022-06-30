import { GlobeAltIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <div className="flex p-4 shadow-md justify-between items-center mt-3">
            <div className="w-28 ml-40">
                <img className="cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
            </div>
            <div className="flex items-center shadow-md justify-between place-center space-x-8 px-5 py-2 rounded-full ml-10 cursor-pointer hover:shadow-lg">
                <h1 className="font-semibold">Anywhere</h1>
                <h1 className="font-semibold">Any week</h1>
                <div className="flex items-center justify-between space-x-5">
                    <h1 className="text-gray">Add guests</h1>
                    <div className="flex items-center">
                        <div className="bg-red p-4 rounded-full opacity-90"></div>
                        <SearchIcon className="absolute h-4 ml-[8px] fill-white" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-5 mr-40">
                <h1 className="text-black font-semibold cursor-pointer">Become a host</h1>
                <GlobeAltIcon className="h-5 cursor-pointer" />
                <div className="rounded-full flex space-x-1 px-3 py-2 items-center justify-center shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition duration-150 ease-out">
                    <MenuIcon className="h-5" />
                    <span className="bg-gray p-3 rounded-full"></span>
                </div>

            </div>
        </div>
    );
}

export default Header;