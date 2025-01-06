import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">[h] home</Link>
      <Link href="/projects">[p] projects</Link>
      <Link href="/blog">[b] blog</Link>
    </header>
  );
};

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="mailto:magsubc@student.ubc.ca">email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/matthew-ag-smith/">linkedin</a>
        </li>
        <li>
          <a href="https://github.com/matts421">github</a>
        </li>
      </ul>
      <div>{year}</div>
    </footer>
  );
};
