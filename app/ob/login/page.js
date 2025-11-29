"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
      <h3>Continue from where you left off.</h3>

      <div className="create-with-socials">
        <button className="social linkedin">
          <Image
            src="/icon/linkedin.svg"
            alt="Linkedin"
            width={24}
            height={24}
          />
        </button>
        <button className="social google">
          <Image src="/icon/google.svg" alt="Google" width={24} height={24} />
        </button>
        <button className="social github">
          <Image src="/icon/github.svg" alt="Github" width={24} height={24} />
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
          <span>Email address</span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value.trim())}
            value={password}
          />
        </label>

        <div className="action">
          <span>
            Dont have an account? <Link href={"/ob/new-account"}>Signup</Link>
          </span>
          <button className={emptyFields ? "btn" : "btn active"}>Login</button>
        </div>
      </form>
    </div>
  );
}
