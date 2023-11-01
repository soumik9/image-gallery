import Swal from "sweetalert2"

const Header = ({ selectedItems, deleteItems }) => {

    // length of slected items
    const selectedItemsLength = selectedItems.length;

    // delete item or items with sweetalert with validation
    const handleDeleteItems = () => {

        // checking items length is there or not
        if (!selectedItems.length) {
            Swal.fire(
                'No items selected?',
                '',
                'question'
            )
            return;
        }

        // deleting item or items with validation
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                deleteItems();

                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="py-2.5 flex justify-between border-b-2 border-b-stale-900 px-5">
            {selectedItemsLength ? <>
                <div className="flex items-center gap-2.5 font-semibold">
                    <input type="checkbox" checked />
                    <p>{selectedItemsLength} File{selectedItemsLength > 1 && 's'} Selected</p>
                </div>

                <button
                    type="button"
                    className="text-red-500 font-medium"
                    onClick={handleDeleteItems}
                >
                    Delete File{selectedItemsLength > 1 && 's'}
                </button>
            </> : <p className="font-semibold">Gallery</p>}
        </div>
    )
}

export default Header