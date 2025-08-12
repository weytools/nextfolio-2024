import Image from "next/image";
export const Marquee = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="marquee whitespace-nowrap flex mb-2">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-x-14 mx-4">
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />electrical
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />plumbing
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />HVAC
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />carpentry
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />small engines
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />appliance repair
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />midwifery
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />electrical
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />plumbing
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />HVAC
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />carpentry
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />small engines
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />appliance repair
                        </div>
                        <div className="flex items-center text-sm text-white gap-2">
                            <Image src="/checkmark.svg" alt="" width={16} height={16} />midwifery
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}