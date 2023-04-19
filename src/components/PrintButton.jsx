import { FaPrint } from "react-icons/fa";

export default function PrintButton() {
    return (
        <a
            href="/Resume - Leonardo Brandt.pdf"
            target="_blank"
            className="fixed bottom-6 right-6 group
            md:right-12"
        >
            <div className="h-12 flex items-center justify-center text-white rounded-lg transition-all">
                <div
                    className="scale-x-0 bg-emerald-500 p-2 transition-all origin-right rounded-l-lg -mr-2 pr-4 font-bold
                    group-hover:scale-x-100"
                >
                    Print
                </div>
                <FaPrint className="p-2 w-10 h-10 bg-emerald-500 rounded-lg" />
            </div>
        </a>
    )
}
