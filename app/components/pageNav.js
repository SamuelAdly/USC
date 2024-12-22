import Link from "next/link";
export default function PageNav ({underlinedLink}) {
    const links = [
        { href: "/", label: "Overview" },
        { href: "/meet-fellows", label: "Meet Our Fellows" },
        { href: "/application-process", label: "Application Process" },
        { href: "/fellow-life", label: "Fellow Life" },
        { href: "/curriculum", label: "Curriculum" },
        { href: "/alumni", label: "Alumni" },
        { href: "/faculty", label: "Meet The Faculty" },
    ];
    return (
        <>
        {/* Mobile Page Nav Header */}
        <div className="font-sans text-sm md:hidden">
            <ul className="grid grid-cols-2 sticky top-0 bg-white z-10 px-4 py-4">
                {links.map((link) => (
                <li key={link.label} className="py-2">
                    <Link
                    href={link.href}
                    className={`hover:underline ${link.label === underlinedLink ? 'underline-offset-8 underline' : ''}`}
                    >
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    
          {/* Desktop Page Nav Header */}
        <div className="font-sans text-sm">
            <ul className="hidden md:flex sticky top-0 bg-white z-10 px-4 py-4 space-x-4">
                {links.map((link) => (
                <li key={link.label} className="py-2">
                    <Link
                    href={link.href}
                    className={`hover:underline ${link.label === underlinedLink ? 'underline-offset-8 underline' : ''}`}
                    >
                    {link.label}
                    </Link>
                </li>
                ))}
            </ul>
            </div>
        </>
        );
    }