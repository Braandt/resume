export default function Block({ title, children }) {
    return (
        <div>
            <div className="text-primary-500 text-xl font-bold uppercase mb-2 border-b border-primary-400">
                {title}
            </div>
            {children}
        </div>
    )
}
