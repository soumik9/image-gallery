import AddImagesCard from "../../../components/AddImagesCard";
import ImageItem from "../../../components/ImageItem"
import { useRef } from "react";

const ImageLayout = ({ items, setItems, selectedItems, setSelectedItems }) => {

    const parentRef = useRef();

    // handle checkbox itmes
    const handleCheckboxChange = (e) => {
        const src = e.target.value;

        if (e.target.checked) {
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, src]);
        } else {
            setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((g) => g !== src));
        }
    };

    return (
        <div className="pt-5 px-5">
            <div ref={parentRef} className="grid grid-cols-5 gap-5">
                {items.map((item, index) => (
                    <ImageItem
                        key={index}
                        index={index}
                        item={item}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                        handleCheckboxChange={handleCheckboxChange}
                        parentRef={parentRef}
                    />
                ))}

                <AddImagesCard />
            </div>
        </div>
    )
}

export default ImageLayout