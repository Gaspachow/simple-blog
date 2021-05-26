
async function createPost(postValues, imgUrl) {
    const res = await fetch('/api/newPost', {
      body: JSON.stringify({
        title: postValues.title,
        desc: postValues.desc,
        imgUrl: imgUrl,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log(result);
}

export default createPost;