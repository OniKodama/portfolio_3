import styles from '../styles/Testimonials.module.css'
import Circle from './Circle'
import {users} from '../data'
import Image from 'next/image'

function Testimonials() {
  return (
    <div className = {styles.container}>
        <Circle backgroundColor = "darkblue" top = "-50vh"/>
        <h1 className = {styles.title}>Testimonials</h1>
        <div className= {styles.wrapper}>
            {users.map(user =>(
                <div key = {user.id}className= {styles.card}>
                    <Image src = {`/img/${user.logo}`} alt = "" height = "30px" width = "30px"/>
                    <p className = {styles.comment}>{user.comment}</p>

                    <div className= {styles.person}>
                        <Image  className={styles.avatar} src = {`/img/${user.avatar}`} alt = "" width = "45px" height = "45px" objectFit = "cover"/>
                        <div className = {styles.info}>
                            <span className = {styles.username}>{user.name}</span>
                            <span className = {styles.jobTitle}>{user.title}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials