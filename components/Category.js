function Category({ name, image }) {
    return (
        <div className="flex flex-col items-center space-y-1 cursor-pointer group hover:scale-105 transition duration-150 ease-out">
            <img className="h-6" src={image}></img>
            <h1 className="text-sm font-semibold">{name}</h1>
            <span className="bg-gray w-9 h-[1px] invisible group-hover:visible transition duration-150 ease-out"></span>
        </div>
    );
}

export default Category;