import createRouteLoader from "next/dist/client/route-loader";

async function delPost(_id) {
  const res = await fetch('/api/delPost', {
    body: JSON.stringify({
      id: _id,
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  const result = await res.json()
  location.reload();
}

export default delPost;