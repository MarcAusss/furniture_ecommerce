import Image from "next/image";
import Link from 'next/link'


export default function Landing() {
    return (
        <div className="my-20 flex justify-between mx-20">
            <div className="w-[40%]">
                <h1 className="text-7xl text-justify tracking-wide leading-24">Discover elegant & affordable furniture for every room</h1>
                <p className="text-xl mt-10 tracking-wide leading-10 text-gray-400 w-[80%]">Transform your furniture with sophisticated and stylish pieces, and create a serene and inviting home</p>
                <div className="mt-50 flex gap-10">
                    <Link href="/blog" className="py-3 px-8 bg-black text-white">Show Now</Link>
                    <div className="flex gap-9">
                        <Link href="/blog" className="py-3 flex gap-5 items-center">
                            <Image
                                src="/icons/delivery.png"
                                alt="Picture of the author"
                                width={25}
                                height={25}
                                className=""
                            />
                            Free delivery
                        </Link>
                        <Link href="/blog" className=" flex gap-5 items-center">
                            <Image
                                src="/icons/clock.png"
                                alt="Picture of the author"
                                width={25}
                                height={25}
                                className=""
                            />
                            Always on-time
                        </Link>
                    </div>
                </div>
            </div>
            
            
            <div className="">
                <div className="grid grid-cols-2 grid-rows-5 gap-4">
                    <div className="row-span-3 bg-[#f1f0eeab]">
                        <Image
                            src="/images/officeChair.png"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            className="m-10"
                        />
                    </div>
                    <div className="row-span-2 col-start-1 row-start-4">
                        <Image
                            src="/images/table_landing.avif"
                            alt="Picture of the author"
                            width={400}
                            height={300}
                            className=""
                        />
                    </div>
                    <div className="row-span-5 col-start-2 row-start-1">
                        <Image
                            src="/images/BONAGUA.jpg"
                            alt="Picture of the author"
                            width={400}
                            height={300}
                            className=""
                        />
                    </div>
                    <div className="col-start-2 row-start-5 bg-[#eeeeee98]"></div>
                </div>
            </div>
        </div>
    );
}