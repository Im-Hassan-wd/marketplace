import "./Sidebar.css";
import Image from "next/image";

export default function Sidebar({ src }) {
  return (
    <div className="sidebar">
      <div className="logo">Workoryy</div>
      <Image
        src={`/img/${src}.svg`}
        alt="illustration"
        height={700}
        width={700}
      />
    </div>
  );
}
