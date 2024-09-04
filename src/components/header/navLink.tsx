import Link from "next/link";
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink(props: Props) {
  const { href, children } = props;

  return (
    <Link href={href}>
      {children}
    </Link>
  )
}
