"use client"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import LogoutButton from "@/components/Logout/LogoutButton"
import Navbar from "@/components/Navbar/Navbar"

const Dashboard = () => {
  const [session, setSession] = useState()
  const router = useRouter()

  useEffect(() => {
    const handleSession = async () => {
      const session = await getSession()

      if (session) {
        setSession(session)
      } else {
        router.push("/auth/login")
      }
    }
    handleSession()
  }, [router])

  return (
    <div>
      <Navbar />
      <div>You are logged in :3</div>
      <LogoutButton />
    </div>
  )
}

export default Dashboard