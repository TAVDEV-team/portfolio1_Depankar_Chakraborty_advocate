import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-950 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-2">
            <span className="text-primary text-3xl">⚖️</span>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                Advocate Chakroborty
              </span>

              <span className="text-[10px] uppercase tracking-widest text-slate-500">
                Judge Court of Bangladesh
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/">Home</Link>

            <Link href="/About">About</Link>

            <Link href="/Practice_Areas">Practice Areas</Link>

            <Link href="/Blog">Blog</Link>

            <Link href="/Contact">Contact</Link>

          </nav>

          {/* <button className="bg-primary text-white px-6 py-2 rounded-lg">
            Contact Now
          </button> */}

        </div>
      </div>
    </header>
  );
}