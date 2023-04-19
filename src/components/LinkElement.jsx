import { FaLink } from "react-icons/fa";

export default function LinkElement({ title, subtitle, href }) {
    return (
        <div>
            <a
                href={href}
                target="_blank"
            >
                <div
                    className="flex justify-between items-center bg-white shadow-sm px-4 py-2 rounded-xl transition-all
                    hover:shadow-md"
                >
                    <div className="w-[90%]">
                        <h1 className="text-primary-500 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                            {title}
                        </h1>
                        <h2 className="text-base text-neutral-400">{subtitle}</h2>
                    </div>
                    <FaLink className="text-primary-400 min-w-fit" />
                </div>
            </a>
        </div>
    )
}
