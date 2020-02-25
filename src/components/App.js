import React, { useState } from "react"
import validator from "validator"

export default props => {
  const [fname, setFname] = useState("")
  const [fnameError, setFnameError] = useState("")
  const [lname, setLname] = useState("")
  const [lnameError, setLnameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [confirmpasswordError, setConfirmPasswordError] = useState("")
  const [url, setUrl] = useState("")
  const [urlError, setUrlError] = useState("")
  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (fname === "") {
      valid = false
      setFnameError("Cannot be blank")
    } else {
      setFnameError("")
    }

    if (lname === "") {
      valid = false
      setLnameError("Cannot be blank")
    } else {
      setLnameError("")
    }

    if (username === "") {
      valid = false
      setUsernameError("Cannot be blank")
    } else {
      setUsernameError("")
    }

    if (password !== confirmpassword) {
      valid = false
      setConfirmPasswordError("Must match password")
    } else {
      setConfirmPasswordError("")
    }

    if (password === "") {
      valid = false
      setPasswordError("Cannot be blank")
    } else {
      setPasswordError("")
    }

    if (!validator.isEmail(email)) {
      valid = false
      setEmailError("Must be a valid email")
    } else {
      setEmailError("")
    }

    if (!validator.isURL(url)) {
      valid = false
      setUrlError("Must be a valid URL")
    } else {
      setUrlError("")
    }

    if (valid) {
      alert("It's Valid!")
    } else {
      alert("Something went wrong!")
    }
  }

  return (
    <div className="wrapper">
      <h1 className="header">Form Submission - All fields required</h1>
      {/* First Name */}
      <form onSubmit={handleSubmit}>
        <label className={fnameError ? "error" : ""} htmlFor="fname">
          First Name {fnameError && fnameError}
        </label>
        <input
          className={fnameError ? "error" : ""}
          type="text"
          id="fname"
          placeholder="Enter your First name"
          value={fname}
          onChange={e => setFname(e.target.value)}
        />
        {/* Last Name */}
        <br />
        <label className={lnameError ? "error" : ""} htmlFor="lname">
          Last Name {lnameError && lnameError}
        </label>
        <input
          className={lnameError ? "error" : ""}
          type="text"
          id="lname"
          placeholder="Enter your Last name"
          value={lname}
          onChange={e => setLname(e.target.value)}
        />
        {/* Email */}
        <br />
        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}
        </label>
        <input
          className={emailError ? "error" : ""}
          type="email"
          id="email"
          placeholder="john@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {/* Username */}
        <br />
        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <input
          className={usernameError ? "error" : ""}
          type="username"
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        {/* Password */}
        <br />
        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <input
          className={passwordError ? "error" : ""}
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {/* Confirm Password */}
        <br />
        <label
          className={confirmpasswordError ? "error" : ""}
          htmlFor="confirmpassword"
        >
          Confirm Password {confirmpasswordError && confirmpasswordError}
        </label>
        <input
          className={confirmpasswordError ? "error" : ""}
          type="password"
          id="confirmpassword"
          placeholder="Confirm your password"
          value={confirmpassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        {/* Website URL */}
        <br />
        <label className={urlError ? "error" : ""} htmlFor="url">
          Website URL{urlError && urlError}
        </label>
        <input
          className={urlError ? "error" : ""}
          type="url"
          id="url"
          placeholder="Enter your website"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
