import NavComponent from "./header/NavComponent";

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-100 border-b border-gray-200">
      <div className="blogLogo ">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <NavComponent />
    </header>
  );
}
