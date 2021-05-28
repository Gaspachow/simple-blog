
async function getOnePost(_id) {
    const res = await fetch(`http://localhost:3000/api/getPost/${_id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })

    const result = await res.json()
    return (result);
}

export default getOnePost;