"use client";
import "./account.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Account() {
  const [type, setType] = useState("");
  const router = useRouter();

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
            onClick={() => {
              setType("Client");
            }}
          >
            <div className="top">
              <img src="/icon/briefcase.svg" alt="client" />
              <div className="radio"></div>
            </div>
            <div className="p">
              <span>I’m a client</span>, I need professional services
            </div>
          </button>

          {/* freelancer  */}
          <button
            className={type === "Freelancer" ? "active" : ""}
            onClick={() => setType("Freelancer")}
          >
            <div className="top">
              <img src="/icon/user.svg" alt="freelancer" />
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
