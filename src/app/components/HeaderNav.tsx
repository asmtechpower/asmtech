import NavLink from "./NavLink";

export default function HeaderNav() {
  return (
    <nav>
      <ul className="flex items-center gap-4 uppercase">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/solar-solutions">Solar Solutions</NavLink>
        </li>
        <li>
          <NavLink href="/solar-calculator">Savings calculator</NavLink>
        </li>
      </ul>
    </nav>
  );
}
