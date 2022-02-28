import { useRouter } from "next/router"
import requests from "../utils/requests"

function Nav() {
    const router = useRouter()
    return (
        <nav className="relative">
            <div className="
            flex px-10 
            sm:px-20
            text-xl
            space-x-10 
            text-center
            overflow-x-scroll
            xl:overflow-hidden
            overflow-y-hidden
            scrollbar-hide
            whitespace-nowrap">
                {
                    Object.entries(requests).map(([key, { title, url }]) =>
                    (

                        <h2 key={key}
                            onClick={() => router.push(`/?genre=${key}`)}
                            className={` 
                                        last:pr-24
                                        cursor-pointer 
                                        transition duration-100
                                        transform hover:scale-125 
                                    hover:text-white  
                                    ${key === router.query.genre ?
                                        "text-red-700 text-2xl hover:scale-100 hover:text-red-700 "
                                     :null }`
                            }>{title}</h2>
                    )

                    )
                }
            </div>
            <div className="absolute top-0 right-0
             bg-gradient-to-l from-[#06202A]
             h-10 w-1/12
            ">

            </div>
        </nav>
    )
}

export default Nav