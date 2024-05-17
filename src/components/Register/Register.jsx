"use client"
import styles from "./Register.module.css"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [res, setRes] = useState()
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(userInfo)
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
    })

    setRes(res)
  }

  if (res?.ok) {
    router.push("/auth/login")
    router.refresh()
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>Register</div>
        <div className={styles.content}></div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.rows}>
            <label htmlFor="firstName">First Name</label>
            <input
              className={styles.inputField}
              type="text"
              value={userInfo.firstName}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, firstName: target.value })
              }
            />
          </div>

          <div className={styles.rows}>
            <label htmlFor="lastName">Last Name</label>
            <input
              className={styles.inputField}
              type="text"
              value={userInfo.lastName}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, lastName: target.value })
              }
            />
          </div>

          <div className={styles.rows}>
            <label htmlFor="username">Email Address</label>
            <input
              className={styles.inputField}
              type="email"
              value={userInfo.email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
            />
          </div>

          <div className={styles.rows}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.inputField}
              type="password"
              value={userInfo.password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />
          </div>

          <div className={styles.buttonRow}>
            <div className={styles.rememberPassword}></div>
            <button type="submit" className={styles.registerButton}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
