import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
      <p onClick={() => window.open('https://www.facebook.com/profile.php?id=61551069984893', '_blank')}>Facebook</p>
      <p onClick={() => window.open('https://www.instagram.com/once.lerr', '_blank')}>Instagram</p>
      <p onClick={() => window.open('https://github.com/oncelerr', '_blank')}>Github</p>
      <p onClick={() => window.open('https://www.linkedin.com/in/mark-jonathan-bacarac-3b81b327a/', '_blank')}>Linkedin</p>
    </div>
  )
}
