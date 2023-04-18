import { FaCalendarAlt } from "react-icons/fa";

export default function MyDate({ date }) {
    return (
        <div className="flex items-center gap-2 text-base text-neutral-500">
            <FaCalendarAlt />
            {date.start} - {date.end}
        </div>
    )
}
