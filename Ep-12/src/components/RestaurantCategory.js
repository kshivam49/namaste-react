
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false);


    const handleClick = () => {
        // if (showItems === false) { setShowItems(true) }
        // else setShowItems(false)
        // console.log("clicked")
        setShowIndex();
    }
    return (
        <div>
            <div className=" w-6/12 my-4 mx-auto p-4 bg-gray-100 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>

        </div>

    );
};

export default RestaurantCategory;