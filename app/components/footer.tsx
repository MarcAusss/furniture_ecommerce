import Image from "next/image";
import Link from "next/link";
import Form from "next/form";


export default function Footer() {
    return (
        <>
        <div className="flex justify-between items-start mx-20 py-10">
            <Image 
                src="/images/logo_black.png"
                alt="Picture of the author"
                width={100}
                height={100}
            />            
            <div className="flex gap-52">
                <div className="flex flex-col gap-5">
                    <p className="text-md">Company</p>
                    <Link href="" className="text-xl">About</Link>
                    <Link href="" className="text-xl">Shop</Link>
                    <Link href="" className="text-xl">Careers</Link>
                    <Link href="" className="text-xl">FAQ</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-md">Category</p>
                    <Link href="" className="text-xl">Living Room</Link>
                    <Link href="" className="text-xl">Dining Room</Link>
                    <Link href="" className="text-xl">Home Office</Link>
                    <Link href="" className="text-xl">Bedroom</Link>
                    <Link href="" className="text-xl">Outdoor</Link>
                </div>
                <div className="">
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
                </div>
            </div>
        </div>
        <div className="mx-20 flex justify-between my-5">
            <p className="text-md w-[33.3%]">Copyright © 2026 Marc Austin Bonagua, All rights reserved.</p>
            <p className="text-md w-[33.3%]">Terms of Condition</p>
            <p className="text-md">Privacy Policy</p>
        </div>
        </>
    );
}