import styles from '../styles/Home.module.css'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import delPost from '../utils/delPost'

// Post component to be used inside a styles.grid div
// To display a post, it requires the following props:
// - the _id of the post
// - the title and imgUrl

function Post(props) {
    return (
        <div className={styles.card}>
                <Link href={'posts/' + props._id}>
                  <a>
                    <Image
                      src={props.imgUrl}
                      alt={"picture of " + props.title}
                      width="auto"
                      height="auto"
                      fluid
                    />
                  </a>
                </Link>
                <h3>{props.title}</h3>
                <Button
                  variant="danger"
                  size='sm'
                  onClick={() => delPost(props._id)}
                >
                  delete
                </Button>
        </div>
    )
}

export default Post;