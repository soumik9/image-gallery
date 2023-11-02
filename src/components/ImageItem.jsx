import { useState } from 'react';
import { cx } from '../hooks/helpers'
import { motion, useDragControls } from 'framer-motion';

const ImageItem = ({ index, item, selectedItems, handleCheckboxChange, parentRef }) => {

    const controls = useDragControls();

    // states
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={cx(
                "border relative rounded-lg",
                index === 0 && "col-span-2 row-span-2"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            id={item}
            drag
            dragConstraints={parentRef}
            dragControls={controls}
            onPointerDown={(e) => {
                console.log(e.target.value);
            }}
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
        </motion.div>
    )
}

export default ImageItem