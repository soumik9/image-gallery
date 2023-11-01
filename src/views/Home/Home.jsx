import { useState } from "react";
// import { Reorder } from "framer-motion";
import Header from "../../components/Header";
import { galleryItems } from "../../constants/gallery";
import ImageLayout from "./partials/ImageLayout";

const Home = () => {

    // states
    const [items, setItems] = useState(galleryItems);
    const [selectedItems, setSelectedItems] = useState([]);

    // delete item or items function
    const deleteItems = () => {
        const unmatchedItems = items.filter((item) => !selectedItems.some(selectedItem => item.src === selectedItem));
        setItems(unmatchedItems)
        setSelectedItems([]);
    }

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">

            <div className="container ">
                <div className="bg-white rounded-lg pb-5 h-[90vh]  w-full">

                    {/* header */}
                    <Header
                        selectedItems={selectedItems}
                        deleteItems={deleteItems}
                    />

                    {/* image layout */}
                    <ImageLayout
                        items={items}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                </div>

                {/* <Reorder.Group axis="y" onReorder={setItems} values={items}>
                    {items.map((item) => (
                        <Item key={item} item={item} />
                    ))}
                </Reorder.Group> */}

            </div>
        </div>
    )
}

export default Home