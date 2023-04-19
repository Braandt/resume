import { FaPrint } from "react-icons/fa";

export default function PrintButton() {
    return (
        <a
            href=""
            className="fixed top-12 group right-12"
        >
            <div className="h-12 flex items-center justify-center text-white rounded-lg transition-all">
                <div
                    className="scale-x-0 bg-emerald-500 p-2 transition-all origin-right rounded-l-lg -mr-2 pr-4
                    group-hover:scale-x-100"
                >
                    Print
                </div>
                <FaPrint className="p-2 w-10 h-10 bg-emerald-500 rounded-lg" />
            </div>
        </a>
    )
}