import { useState } from 'react';
import { cx } from '../hooks/helpers'
import { useDrag, useDrop } from 'react-dnd';

const ImageItem = ({ index, item, selectedItems, handleCheckboxChange, moveImage }) => {

    // states
    const [isHovered, setIsHovered] = useState(false);

    // dragged image index
    const [{ isDragging }, ref] = useDrag({
        type: 'IMAGE',
        item: { index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    // dropping image to other card position
    const [, drop] = useDrop({
        accept: 'IMAGE',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveImage(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div
            className={cx(
                "border relative rounded-lg",
                index === 0 && "col-span-2 row-span-2",
                isDragging && 'image-dragging'
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id={item}
            ref={(node) => ref(drop(node))}
        >
            <img src={item.src} alt={item.src} className='rounded-lg' />

            {(isHovered || selectedItems.includes(item.src)) && (
                <div className={cx(
                    "absolute inset-0 pt-2 pl-2 rounded-lg",
                    isHovered && " bg-black bg-opacity-50",
                    selectedItems.includes(item.src) && " bg-white bg-opacity-50",
                )}>
                    <input
                        type="checkbox"
                        defaultChecked={selectedItems.includes(item.src)}
                        onChange={handleCheckboxChange}
                        value={item.src}
                        className="h-6 w-6 border rounded text-green-500 bg-black cursor-pointer"
                    />
                </div>
            )}
        </div>
    )
}

export default ImageItem