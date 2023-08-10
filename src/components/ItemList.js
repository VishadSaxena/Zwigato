

const ItemList = (items) => {

    //console.log(items.data)

    const category = items?.data;

    return (
        <div>
            {category.map((item) => 
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex bg-orange-100 justify-between w-6/12 mx-auto my-4 shadow-lg">
                <div className="w=9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>
                         -  ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </span>
                    </div>
                    <p className="text-xs">
                        {item.card.info.description}
                    </p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                            Add +
                        </button>
                    </div>
                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} className="w-20"/>
                </div>
            </div> 
            
            )}
        </div>
    );
};
export default ItemList;

