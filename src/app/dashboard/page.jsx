"use client"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
<<<<<<< HEAD
import Header from "@/components/Header/Header"
import DashboardBox from "@/components/DashboardBox/DashboardBox"
import FeatureButtons from "@/components/FeatureButtons/FeatureButtons"
import Footer from "@/components/Footer/Footer"
=======
import LogoutButton from "@/components/Logout/LogoutButton"
import Navbar from "@/components/Navbar/Navbar"
import Link from "next/link"
>>>>>>> feature-summary

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
<<<<<<< HEAD
      <Header />
      <DashboardBox />
      <FeatureButtons />
      <Footer />
=======
      <Navbar />
      <div>You are logged in :3</div>
      <Link href="/dashboard/summary">
        <button>Summary Page</button>
      </Link>
      <LogoutButton />
>>>>>>> feature-summary
    </div>
  )
}

export default Dashboard
