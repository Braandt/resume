export default function Block({ title, children }) {
    return (
        <div className="text-lg">
            <div className="text-primary-500 text-3xl font-bold uppercase mb-2 border-b border-primary-400">
                {title}
            </div>
            {children}
        </div>
    )
}
