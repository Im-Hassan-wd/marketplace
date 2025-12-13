"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password });
  };

  useEffect(() => {
    if (email && password) {
      setEmptyFields(false);
    } else {
      setEmptyFields(true);
    }
  }, [email, password]);

  return (
    <div className="signup">
      <Sidebar src="illustration__login" />
      <div className="form-wrapper">
        <h1>Welcome Back!</h1>
        <h3>Continue from where you left off.</h3>

        <div className="create-with-socials">
          {/* <button className="social linkedin">
            <Image
              src="/icon/linkedin.svg"
              alt="Linkedin"
              width={24}
              height={24}
            />
          </button> */}
          <button className="social google">
            <Image src="/icon/google.svg" alt="Google" width={24} height={24} />
          </button>
          <button className="social apple">
            <Image src="/icon/apple.svg" alt="Apple" width={24} height={24} />
          </button>
        </div>

        <Image
          src="/icon/border.svg"
          className="seperator"
          alt="seperator"
          width={50}
          height={50}
        />

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
            />
          </label>

          <label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value.trim())}
              value={password}
            />
          </label>

          <div className="action">
            <span>
              Dont have an account? <Link href={"/ob/new-account"}>Signup</Link>
            </span>
            <button className={emptyFields ? "btn" : "btn active"}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
