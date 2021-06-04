import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import getAllPosts from '../utils/getAllPosts'
import Post from '../components/Post'
import Layout from '../components/Layout'

export async function getServerSideProps() {

  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    }
  };
}

export default function Home(props) {
  const posts = props.posts;


  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Posts list
          </h1>

          <div className={styles.grid}>
            {posts.map(({title, _id, imgUrl}) => (
              <Post
                title={title}
                _id={_id}
                imgUrl={imgUrl}
                key={_id}
              />
            ))}
          </div>

        </main>
      </div>
    </Layout>
  )
}
