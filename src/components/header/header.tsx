import Link from 'next/link';
import NavLink from "@/components/header/navLink";

const nav = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Posts', href: '/posts' },
  { label: '', href: '' },
]

const Header = () => {
  return (
    <header>
      <div>
        <Link href='/'>
          Blog
        </Link>
      </div>
      <nav>
        <ul>
          {nav.map((navItem) => (
            <li key={navItem.label}>
              <NavLink href={navItem.href}>{navItem.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;