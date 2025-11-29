import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Workoryy</div>
      <Link href={"/"}>Need Help?</Link>
    </div>
  );
}
