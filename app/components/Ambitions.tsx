import Image from "next/image"
import Link from "next/link"

export default function Ambitions() {
    return (
        <div className="my-36 flex gap-20 mr-20">

            <div className="">
                <Image
                    src="/images/livingRoom.jpg"
                    alt="Picture of the author"
                    width={1200}
                    height={1200}
                    className=""
                />
            </div>
            
            <div className="w-[50%] flex items-left flex-col justify-center">
                <p className="text-xl mb-4">OUR AMBITIONS</p>
                <h1 className="text-6xl leading-24">Pioneering innovation and excellence in furniture</h1>
                <p className="text-xl mt-10 leading-10 text-gray-400">Striving for excellence in every detail, we are committed to revolutionizing the online shopping experience. Our ambition is to set new standards in quality, customer satisfaction, and sustainability, ensuring that every purchase from our platform is a step towards a brighter, more innovative future.</p>
                <div className="mt-10 flex gap-10">
                    <Link href="/blog" className="py-3 px-8 bg-black text-white">Learn more</Link>
                </div>
            </div>
            
            
            
        </div>
    );
}