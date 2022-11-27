import Notice from "./Notice";
import Logo from "./Logo";
import Nav from "./Nav";

const notices = [
  "Frontend Developer & UI Designer",
  "Hello and welcome to my new website",
];

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-1">
        {notices.map((notice) => (
          <Notice key={notice}>{notice}</Notice>
        ))}
      </div>
      <header className="flex gap-x-8 justify-between items-center py-9 px-12 sticky top-0 z-50 text-white">
        <Logo />
        <Nav />
      </header>
    </>
  );
}
