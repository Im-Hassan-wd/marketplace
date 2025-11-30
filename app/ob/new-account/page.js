"use client";

import "./account.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAccount } from "@/hooks/useAccount";

export default function Account() {
  const router = useRouter();
  const { type, changeType } = useAccount();

  const handleNext = () => {
    router.push("/ob/signup");
  };

  return (
    <>
      <div className="new-account">
        <h3>How do you want to use the platform?</h3>
        {/* <p>Select which describes you</p> */}

        <div className="account-type">
          {/* client  */}
          <button
            className={type === "Client" ? "active" : ""}
            onClick={() => changeType("Client")}
          >
            <div className="top">
              <Image
                src="/icon/briefcase.svg"
                alt="client"
                width={30}
                height={30}
              />
              <div className="radio"></div>
            </div>
            <div className="p">
              <span>I’m a client</span>, I need professional services
            </div>
          </button>

          {/* freelancer  */}
          <button
            className={type === "Freelancer" ? "active" : ""}
            onClick={() => changeType("Freelancer")}
          >
            <div className="top">
              <Image
                src="/icon/user.svg"
                alt="freelancer"
                width={30}
                height={30}
              />
              <div className="radio"></div>
            </div>
            <div className="p">
              <span>I’m a freelancer</span>, I offer professional services
            </div>
          </button>
        </div>

        <div className="action">
          <span>
            Already have an account? <Link href={"/ob/login"}>Login</Link>
          </span>
          <button
            className={type == "" ? "btn" : "active btn"}
            onClick={handleNext}
          >
            {type == "" ? "Create Account" : "Join as a" + " " + type}
          </button>
        </div>
      </div>
    </>
  );
}
