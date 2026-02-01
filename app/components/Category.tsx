import Image from "next/image"

export default function Category() {
    return (
        <div className="mx-20 my-30">
            <div className="mb-10">
                <p className="text-xl mb-4">CATEGORY</p>
                <h1 className="text-6xl">Design you perfect Home</h1>
            </div>
            <div className="flex gap-5 items-center justify-center">
                <div className="">
                    <Image
                        src="/images/modernLivingRoom.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                    <div className="flex justify-between">
                        <h1 className="">Living Room</h1>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/images/bedroom.jpeg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className=""
                    />
                    <div className="flex justify-between">
                        <h1 className="">Bedroom</h1>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/images/diningroom.webp"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className=""
                    />
                    <div className="flex justify-between">
                        <h1 className="">Lorem</h1>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/images/homeOfficeroom.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className=""
                    />
                    <div className="flex justify-between">
                        <h1 className="">Lorem</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}