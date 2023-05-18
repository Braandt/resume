export default function Block({ title, children }) {
    return (
        <div>
            <div className="text-color1 text-xl font-bold uppercase mb-2 border-b border-color1/60">
                {title}
            </div>
            {children}
        </div>
    )
}
