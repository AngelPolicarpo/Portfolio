import Link from 'next/link';

function NavLink({ title, url, isSelected }) {
  return (
    <li
      className={`pt-6 px-6 pb-6 nav-footer-text transition hover:text-hoverfx ${
        isSelected ? 'bg-background border-r border-l border-borderfx border-selected' : ''
      }`}
    >
      <Link href={url}>
        {title}
      </Link>
    </li>
  );
}

function Navbar({ pageId }) {
  return (
    <nav className="border-b border-borderfx">
      <ul className="flex">
        <NavLink title={'PERFIL'} url={'/'} isSelected={pageId === 'about_me'} />
        <div className="hidden">
        <NavLink title={'PROJETOS'} url={'/projects'} isSelected={pageId === 'projects'} />
        <NavLink title={'CONTATO'} url={'/contact'} isSelected={pageId === 'contact'} />
        </div>
      </ul>
    </nav>
  );
}


  function Footer() {
    return (
      <footer className="border-t border-borderfx pt-6 px-6 pb-6 nav-footer-text">
        <div className="flex sm:flex-col sm:text-center">
          <p className="px-6">
            &copy; 2023 <span title="Nobody - 4E6F626F64790A">Angel Policarpo</span>.
          </p>
          <p>
            Todos os direitos reservados.
          </p>
        </div>
    </footer>
    )
  }
  
export default function Layout({children}) {
    return (
      <div id="bgc">
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
  
