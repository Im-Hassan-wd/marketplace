"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Login() {
  const [checked, setChecked] = useState(false);
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
          <img src="/icon/linkedin.svg" alt="Linkedin" />
        </button>
        <button className="social google">
          <img src="/icon/google.svg" alt="Google" />
        </button>
        <button className="social github">
          <img src="/icon/github.svg" alt="Github" />
        </button>
      </div>

      <img src="/icon/border.svg" className="seperator" alt="seperator" />

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
            Don't have an account? <Link href={"/ob/new-account"}>Signup</Link>
          </span>
          <button className={emptyFields ? "btn" : "btn active"}>Login</button>
        </div>
      </form>
    </div>
  );
}
