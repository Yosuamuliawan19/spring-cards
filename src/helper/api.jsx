import axios from 'axios'
// const host = "http://192.168.1.5:1337"
// const host = 'https://backend.yosua.io'
const host = 'http://localhost:1337'

export const getViews = () => {
  return axios.post(`${host}/graphql`, {
    query: `query{
  picture(sort : "id"){
    title
  }
}
`
  })
}
