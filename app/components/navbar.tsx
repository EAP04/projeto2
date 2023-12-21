import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-10 h-16 w-full items-center border-b md:h-20">
      <div className="relative mx-auto flex h-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative ml-5 flex w-full items-center justify-end p-1 sm:right-auto sm:mr-0">
            <Link href="/" className="relative block pr-5">
              Analytics de Atividade
            </Link>
            <Link href="/atividade/admin" className="relative block pr-5">
              Atividade Admin
            </Link>
            <Link href="/atividade/estudante" className="relative block pr-5">
              Atividade Estudande
            </Link>
          </div>
        </div>
      </div>
    </header>
  );

}
