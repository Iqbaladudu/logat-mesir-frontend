import Image from 'next/image'
import SearchIcon from "/public/Search.svg"

const Search = () => {
    return (
        <form className="flex items-center">
            <input type="text"
                placeholder=""
                className="w-[440px] h-[64px] text-gray-900 px-4 py-3 bg-gray-200 rounded-l-md focus:border-0 focus:outline-none" 
            />

            <button className="flex justify-center items-center bg-gray-200 text-white text-sm rounded-r-md h-[64px] w-[64px]" type="submit">
                <Image
                src={SearchIcon}
                height="24"
                width="24"
                alt="search"
                />
            </button>
        </form>
    )
}

export default Search