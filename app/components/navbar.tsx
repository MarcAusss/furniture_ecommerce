import Image from "next/image";
import Link from 'next/link'
import Form from 'next/form'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-between items-center my-5 mx-20">
                <div className="flex gap-14 items-center">
                    <Image
                        src="/images/logo_black.png"
                        alt="Picture of the author"
                        width={50}
                        height={50}
                    />
                    <nav className="flex gap-14 text-xl">
                        <Link href="/blog">Category</Link>
                        <Link href="/blog">Promo</Link>
                        <Link href="/blog">Interior Design</Link>
                        <Link href="/blog">Product Recommendation</Link>
                    </nav>
                </div>
                <div className="flex gap-14 items-center">
                    <Form action="/search" className="flex items-center">
                        <div className="flex items-center ">
                            <div className="relative">
                                <span className="absolute text-3xl left-2 top-1/2 -translate-y-1/2 text-gray-400">
                                    ⌕
                                </span>
                                <input
                                    name="query"
                                    className="border-b-2 border-black p-2 pl-8 outline-0"
                                    placeholder="Product Search"
                                />
                                </div>
                        </div>
                    </Form>
                    <div className="flex gap-4">
                        <Image
                            src="/icons/shopping-cart.png"
                            alt="Picture of the author"
                            width={25}
                            height={25}
                        />
                        <Image
                            src="/icons/heart.png"
                            alt="Picture of the author"
                            width={25}
                            height={25}
                        />
                        <Image
                            src="/icons/user.png"
                            alt="Picture of the author"
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}