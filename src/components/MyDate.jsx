import { FaCalendarAlt } from "react-icons/fa";

export default function MyDate({ date }) {
    return (
        <div className="flex items-center gap-2 text-color1/70 text-[0.9rem]">
            <FaCalendarAlt />
            {date.start} - {date.end}
        </div>
    )
}
