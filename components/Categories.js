import { Carousel } from 'react-daisyui';
import Category from "../components/category";
import { AdjustmentsIcon } from "@heroicons/react/outline";

function Categories() {
    const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const categories = ["Barns","National parks","Tiny homes","Islands","Beaches","Chalets","OMG!","Camping","Historical homes","Design","Arctic","Bed & breakfasts","Lakefront","Surfing","A-frames","Yurts"];
    const images = ["https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg","https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg","https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg","https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg","https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg","https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg","https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg","https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg","https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg","https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg","https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg","https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg","https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg","https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg","https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg","https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg"];

    return (
        <div className="flex justify-between items-center mt-10">
            <div className="flex justify-between items-center ml-40 space-x-10">
                {categories.map((item, i) => (
                <Category 
                    key={ids[i]}
                    name={item}
                    image={images[i]}
                />
            ))}
            </div>
            <div className="mr-20 px-5 py-2 shadow-md rounded-md flex items-center justify-center cursor-pointer hover:scale-105 transition duration-150 ease-out">
                <AdjustmentsIcon className="h-5 rotate-90 mr-2"  />
                <h1 className="text-sm font-semibold">Filters</h1>
            </div>
        </div>
    );
}

export default Categories;