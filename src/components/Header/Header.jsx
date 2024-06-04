import { useState } from "react"
import LogoutButton from "@/components/Logout/LogoutButton"
import Navbar from "@/components/Navbar/Navbar"
import styles from "./Header.module.css"
import Image from "next/image"
import profilePictureIcon from "@/app/pictures/acheron.png"

const Header = () => {
  const [showRewards, setShowRewards] = useState(false)

  const handleLevelClick = () => {
    setShowRewards(!showRewards)
  }

  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <Image
          src={profilePictureIcon}
          alt="profileIcon"
          className={styles.profilePicture}
        />
        <div className={styles.level} onClick={handleLevelClick}>
          Level 5
        </div>
      </div>
      <div className={styles.text}>
        We are so happy to see <span className={styles.you}>you</span> again!
      </div>
      <div className={styles.premium}>Go Premium!</div>
      <div className={styles.navBar}>
        <LogoutButton />
      </div>
      {showRewards && (
        <div className={styles.rewards}>
          <button className={styles.closeButton} onClick={handleLevelClick}>
            ✖
          </button>
          <h2>Rewards :) </h2>
          <br />
          <ul>
            <li>
              <strong>Level 5:</strong> ✅ <strong>Collected</strong>
            </li>
            <li>Level 10: 🏅 Collect Item</li>
            <li>Level 15: 💎 Collect Item</li>
            <li>Level 20: 🏆 Collect Item</li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
