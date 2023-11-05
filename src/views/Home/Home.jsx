import { useState } from "react";
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
        <main className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="container">

                <div className="bg-white rounded-lg pb-5 h-[90vh]  w-full">

                    {/* header */}
                    <Header
                        selectedItems={selectedItems}
                        deleteItems={deleteItems}
                    />

                    {/* image layout */}
                    <ImageLayout
                        items={items}
                        setItems={setItems}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />

                </div>

            </div> {/* container end */}
        </main>
    )
}

export default Home