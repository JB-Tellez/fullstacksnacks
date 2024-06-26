import { Link } from "@remix-run/react";
import SnackIcon from "./snack-icon";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center"  to="#">
          <SnackIcon className="h-16 w-16 pt-2" />
          <div>
            <p>Full Stack</p>
            <p>Snacks</p>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/resume">
            Resume
          </Link>
        </nav>
      </header>
  );
}
