import { Link } from "@remix-run/react";
import SnackIcon from "./snack-icon";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" to="/">
        <SnackIcon className="h-16 w-16" />
        <span className="sr-only">Resume</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#at-a-glance">
          At a Glance
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" to="#experience">
          Experience
        </Link>
      </nav>
    </header>
  );
}
