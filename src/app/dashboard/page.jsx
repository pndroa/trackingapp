"use client"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Header from "@/components/Header/Header"
import DashboardBox from "@/components/DashboardBox/DashboardBox"
import FeatureButtons from "@/components/FeatureButtons/FeatureButtons"
import Footer from "@/components/Footer/Footer"

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
      <Header />
      <DashboardBox />
      <FeatureButtons />
      <Footer />
    </div>
  )
}

export default Dashboard
