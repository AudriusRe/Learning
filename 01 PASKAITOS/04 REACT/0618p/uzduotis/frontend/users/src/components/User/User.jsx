import styles from "./User.module.css"

export default function User({ user }) {
  return (
    <div className={styles.card}>
    <h2>{user.name}</h2>
    <h3>Username: {user.username}</h3>
    <h4>Email: {user.email}</h4>
    </div>
  )
}
