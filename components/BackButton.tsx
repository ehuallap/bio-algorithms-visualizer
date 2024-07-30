import Link from "next/link";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link legacyBehavior href={href}>
      <a className="flex items-center p-2 rounded-lg bg-light text-dark transition-transform hover:scale-105 hover:bg-dark hover:text-light font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>  
        VOLVER
      </a>
    </Link>
  );
}
