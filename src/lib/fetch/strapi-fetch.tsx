
//frontend/utils.js
const baseUrl = process.env.NEXT_STRAPI_BACKEND_URL
async function fetchQuery(path: any, params = null) {
  let url
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`
  } else {
    url = `${baseUrl}/${path}`
  }
  const response = await fetch(`${url}`)
  const data = await response.json()
  return data
}

export { baseUrl, fetchQuery }