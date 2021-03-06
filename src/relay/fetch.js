import {getHeaders, getRequestBody, handleData} from './helpers'

export default async function _fetch(
  operation,
  variables,
  cacheConfig,
  uploadables
) {
  const body = getRequestBody(operation, variables, uploadables)
  const headers = {
    ...getHeaders(uploadables),
    Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`,
  }
  const response = await fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT, {
    body,
    headers,
    method: `POST`,
  })

  return handleData(response)
}
