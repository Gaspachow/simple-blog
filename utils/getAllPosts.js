
async function getAllPosts() {
    const res = await fetch('http://localhost:3000/api/getPosts', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    const result = await res.json()
    return (result);
}

export default getAllPosts;