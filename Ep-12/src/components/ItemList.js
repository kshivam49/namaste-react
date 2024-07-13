import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="flex flex-row justify-between p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="font-bold">{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 relative">
                        <button className="absolute bottom-0 px-8 py-2 mx-8 z-10 rounded-lg font-bold bg-white text-green-700" onClick={() => handleAddItem(item)}>ADD</button>
                        <img className="w-full p-2" src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemList;