const categories = [
    { label: "Mais assistidos", active: true, link: "/mais-assistidos" },
    { label: "Mais votados", active: false, link: "/votados" },
    { label: "Novidades", active: false, link: "/novidades" },
    { label: "Top 10", active: false, link: "/top10" },
    { label: "Gêneros 10", active: false, link: "/generos" },
];

export function Navbar() {
    return (
        <nav className="bg-[#1c1c1c] border-b border-b-[#333] max-w-6xl mx-auto">
            <ol className="flex gap-8 list-none py-6">
                {categories.map((item)=>(
                <li><a href={item.link} 
                className={`text-sm 
                    ${item.active 
                        ? 'text-[#e50914] border-[#e50914] hover:text-[#e50914]' 
                        : 'text-[#ccc] hover:text-white'
                    }
                `}>
                {item.label}</a></li>
                ))}
            </ol>
        </nav>
    )
}