import { useState } from 'react';
import { cx } from '../hooks/helpers'

const ImageItem = ({ index, item, selectedItems, handleCheckboxChange }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cx(
                "border relative rounded-lg",
                index === 0 && "col-span-2 row-span-2"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={item.src} alt={item.src} />

            {(isHovered || selectedItems.includes(item.src)) && (
                <div className={cx(
                    "absolute inset-0 pt-2 pl-2",
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