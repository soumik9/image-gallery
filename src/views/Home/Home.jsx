import { useState } from "react";
import { Reorder } from "framer-motion";
import Header from "../../components/Header";
import ImageItem from "../../components/ImageItem";
import { galleryItems } from "../../constants/gallery";

const Home = () => {

    const [items, setItems] = useState(galleryItems);
    const [selectedItems, setSelectedItems] = useState([]);


    // handle checkbox
    const handleCheckboxChange = (e) => {
        const src = e.target.value;

        if (e.target.checked) {
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, src]);
        } else {
            setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((g) => g !== src));
        }
    };

    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">

            <div className="container ">

                <div className="bg-white rounded-lg pb-5 h-[90vh]  w-full">

                    {/* header */}
                    <Header />

                    <div className="pt-5 px-5">
                        <div className="grid grid-cols-5 gap-5">
                            {items.map((item, index) => (
                                <ImageItem
                                    key={index}
                                    index={index}
                                    item={item}
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                    handleCheckboxChange={handleCheckboxChange}
                                />
                            ))}
                        </div>
                    </div>


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