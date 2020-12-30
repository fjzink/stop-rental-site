import Link from "next/link";

export default function BorderLink({ children, href }) {
  return (
    <Link href={href}>
      <a className="p-1 my-1 text-blue-500 hover:text-blue-800 border rounded border-blue-500 hover:border-blue-800">
        {children}
      </a>
    </Link>
  );
}
