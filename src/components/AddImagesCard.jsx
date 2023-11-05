import { cx } from '../hooks/helpers'
import { BiImage } from 'react-icons/bi'

const AddImagesCard = () => {

    return (
        <div
            className={cx(
                "border rounded-lg flex flex-col justify-center items-center font-medium h-[300px] lg:h-full",
            )}
        >
            <BiImage className='text-[20px]' />
            Add Images
        </div>
    )
}

export default AddImagesCard