import { cx } from '../hooks/helpers'
import { BiImage } from 'react-icons/bi'
// import { useDrop } from 'react-dnd';

const AddImagesCard = () => {

    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: 'IMAGE', // Specify the type of item this component can accept
    //     drop: (item) => {
    //         onDrop(item)
    //     }, // Handle the dropped item
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }));

    return (
        <div
            // ref={drop}
            className={cx(
                "border rounded-lg flex flex-col justify-center items-center font-medium",
                // isOver ? 'bg-gray-300' : 'bg-slate-50'
            )}
        >
            <BiImage className='text-[20px]' />
            Add Images
        </div>

    )
}

export default AddImagesCard