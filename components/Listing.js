import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function Listing({county, country, price, rating, image}) {
    return (
        <div className="flex flex-col mt-10 cursor-pointer hover:scale-105 transition duration-150 ease-out">
            <div>
                <HeartIcon className="absolute h-8 ml-64 mt-3 fill-gray opacity-60 hover:opacity-80 cursor-pointer hover:scale-105 transition duration-100 ease-out" />
                <img className="rounded-2xl h-[270px] w-[300px] mb-2" src={image}></img>
            </div>
            <div className="flex justify-between">
                <h1 className="font-semibold">{county}, {country}</h1>
                <div className="flex justify-center items-center mr-10">
                    <h1 className="">{rating}</h1>
                    <StarIcon className="h-4" />
                </div>
            </div>
            <h1 className="opacity-70">Individual Host</h1>
            <h1 className="opacity-70">4-9 Sept</h1>
            <h1 className="underline font-semibold">£{price} total</h1>
        </div>
    );
}

export default Listing;