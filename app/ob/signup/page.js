"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ firstName, lastName, email, password });
  };

  useEffect(() => {
    if (email && password && firstName && lastName && checked) {
      setEmptyFields(false);
    } else {
      setEmptyFields(true);
    }
  }, [email, password, firstName, lastName, checked]);

  return (
    <div className="signup">
      <h3>This is where incredible careers begin.</h3>

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
        <div className="full-name">
          <label>
            <span>First name</span>
            <input
              type="text"
              name="first-name"
              onChange={(e) => setFirstName(e.target.value.trim())}
              value={firstName}
            />
          </label>

          <label>
            <span>Last name</span>
            <input
              type="text"
              name="last-name"
              onChange={(e) => setLastName(e.target.value.trim())}
              value={lastName}
            />
          </label>
        </div>

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

        <label className="checkbox-input">
          <input
            className="checkbox"
            type="checkbox"
            onClick={(e) => handleCheckbox(e)}
          />
          <p className="">
            Yes, I understand and agree to the{" "}
            <Link href={"#"}>Workoryy Terms of Service</Link>, including the{" "}
            <Link href={"#"}>User Agreement</Link> and{" "}
            <Link href={"#"}>Privacy Policy</Link>
          </p>
        </label>

        <div className="action">
          <span>
            Already have an account? <Link href={"/ob/login"}>Login</Link>
          </span>
          <button className={emptyFields ? "btn" : "active btn"}>
            Create My Account
          </button>
        </div>
      </form>
    </div>
  );
}
