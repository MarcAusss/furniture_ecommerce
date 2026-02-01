import Image from "next/image";


export default function ProductSelection() {
    return (
        <div className="mx-20 mt-20">
            <div className="w-[60%]">
                <h1 className="text-7xl tracking-wide">
                    We meticulously curate our <span className="text-gray-400">product selections</span> to ensure you receive only the best.
                </h1>
            </div>
            <div className="grid grid-cols-6 grid-rows-2 gap-4 my-16">
                <div >
                    <Image
                        src="/images/living2.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>
                <div className="row-span-2">
                    <Image
                        src="/images/dining2.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>
                <div className="row-span-3">
                    <Image
                        src="/images/bedroom2.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>
                <div className="row-span-3">
                    <Image
                        src="/images/dining1.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>
                <div className="row-span-2">
                    <Image
                        src="/images/living1.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="!h-[370px]"
                    />
                </div>
                <div >
                    <Image
                        src="/images/bedroom1.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className=""
                    />
                </div>
            </div>
                
        </div>
    );
}