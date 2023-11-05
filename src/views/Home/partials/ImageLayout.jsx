import AddImagesCard from "../../../components/AddImagesCard";
import ImageItem from "../../../components/ImageItem"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ImageLayout = ({ items, setItems, selectedItems, setSelectedItems }) => {

    // handle checkbox itmes
    const handleCheckboxChange = (e) => {
        const src = e.target.value;

        if (e.target.checked) {
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, src]);
        } else {
            setSelectedItems((prevSelectedItems) => prevSelectedItems.filter((g) => g !== src));
        }
    };

    // chaning image position
    const moveImage = (fromIndex, toIndex) => {
        const updatedImages = [...items];
        const [draggedImage] = updatedImages.splice(fromIndex, 1);
        updatedImages.splice(toIndex, 0, draggedImage);
        setItems(updatedImages);
    };

    return (
        <div className="pt-5 px-5">
            <DndProvider backend={HTML5Backend}>
                <div className="grid grid-cols-5 gap-5">
                    {items.map((item, index) => (
                        <ImageItem
                            key={index}
                            index={index}
                            item={item}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            handleCheckboxChange={handleCheckboxChange}
                            moveImage={moveImage}
                        />
                    ))}

                    <AddImagesCard />
                </div>
            </DndProvider>
        </div>
    )
}

export default ImageLayout