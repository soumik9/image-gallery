const Header = () => {
    return (
        <div className="py-2.5 flex justify-between border-b-2 border-b-stale-900 px-5">
            <div className="flex items-center gap-2.5 font-semibold">
                <input type="checkbox" checked />
                <p>3 Files Selected</p>
            </div>
            <button type="button" className="text-red-500 font-medium">Delete Files</button>
        </div>
    )
}

export default Header