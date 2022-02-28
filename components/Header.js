import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { HomeIcon, BadgeCheckIcon, LightningBoltIcon, SearchIcon, UserIcon, CollectionIcon } from '@heroicons/react/outline'
function Header() {
    return (
        <header className="flex flex-col sm:flex-row justify-between m-5  items-center">
            <div className="flex justify-evenly flex-grow max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="treanding" Icon={LightningBoltIcon} />
                <HeaderItem title="verifid" Icon={BadgeCheckIcon} />
                <HeaderItem title="Collection" Icon={CollectionIcon} />
                <HeaderItem title="search" Icon={SearchIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain grayscale brightness-200 contrast-200  invert-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hulu_logo_%282014%29.svg/800px-Hulu_logo_%282014%29.svg.png?20201016084050"
                width={100}
                height={50}

            />
        </header>
    )
}

export default Header