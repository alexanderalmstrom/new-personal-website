import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="w-9 h-9 fill-white"
      >
        <path d="M445.1 500l-97.9-215.2v-.4L217.6 0l-37.5 82 92.2 202.4H85.8l-30.9 67.5h248.2l67 148.1h75z" />
        Alexander Almström
      </svg>
    </Link>
  );
}
