import Image from "next/image"

export default function Popular() {
    return (
        <div className="my-22">
            <div className="text-center mb-10">
                <p className="text-xl mb-4">POPULAR</p>
                <h1 className="text-6xl">Furniture Sale Now On!</h1>
            </div>
            <div className="flex gap-5 items-center justify-center">
                <div className="bg-[#eeeeee98]">
                    <Image
                        src="/images/grey_sofa.png"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="m-10"
                    />
                    <div className="flex justify-between mx-10 pb-5">
                        <h1 className="">Lorem</h1>
                        <h1 className="">₱2,000</h1>
                    </div>
                </div>
                <div className="bg-[#eeeeee98]">
                    <Image
                        src="/images/officeTable.png"
                        alt="Picture of the author"
                        width={600}
                        height={300}
                        className="m-10"
                    />
                    <div className="flex justify-between mx-10 pb-5">
                        <h1 className="">Lorem</h1>
                        <h1 className="">₱2,000</h1>
                    </div>
                </div>
                <div className="bg-[#eeeeee98]">
                    <Image
                        src="/images/bedsideTable.webp"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                        className="m-10"
                    />
                    <div className="flex justify-between mx-10 pb-5">
                        <h1 className="">Lorem</h1>
                        <h1 className="">₱2,000</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}