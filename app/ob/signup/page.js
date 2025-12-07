"use client";
import { useEffect, useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Link from "next/link";
import Image from "next/image";

// hooks
import { useAccount } from "@/hooks/useAccount";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Signup() {
  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyFields, setEmptyFields] = useState(true);
  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const { type } = useAccount();

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const handleSelect = (country) => {
    setCountry(country);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ firstName, lastName, email, password, country });
  };

  useEffect(() => {
    if (email && password && firstName && lastName && checked && country) {
      setEmptyFields(false);
    } else {
      setEmptyFields(true);
    }
  }, [email, password, firstName, lastName, checked, country?.value]);

  return (
    <div className="signup">
      <Sidebar src="illustration__signup" />
      <div className="form-wrapper">
        <h1>Begin Journey</h1>
        {type === "Freelancer" ? (
          <h3>This is where incredible careers begin.</h3>
        ) : (
          <h3>This is where your brand get big.</h3>
        )}

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
          <div className="full-name">
            <label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value.trim())}
                value={firstName}
              />
            </label>

            <label>
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value.trim())}
                value={lastName}
              />
            </label>
          </div>

          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
            />
          </label>

          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value.trim())}
              value={password}
            />
          </label>

          <label>
            <Select
              className="react-select"
              placeholder="Country"
              options={options}
              value={country}
              onChange={handleSelect}
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
    </div>
  );
}
