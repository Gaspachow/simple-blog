
async function newPost(imgUrl) {

    const res = await fetch('/api/newPost', {
      body: JSON.stringify({
        title: 'Test x',
        desc: 'Test description!',
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

export default newPost;