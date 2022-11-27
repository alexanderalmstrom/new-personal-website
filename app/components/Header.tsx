import Notice from "./Notice";
import Logo from "./Logo";
import Nav from "./Nav";

const notices = ["This is a notice", "This is another notice"];

export default function Header() {
  return (
    <>
      <div className="grid grid-cols-1 divide-y">
        {notices.map((notice) => (
          <Notice>{notice}</Notice>
        ))}
      </div>
      <header className="flex gap-x-8 justify-between py-9 px-12 sticky top-0 z-50 text-white">
        <Logo />
        <Nav />
      </header>
    </>
  );
}
