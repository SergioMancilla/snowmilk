import type { Asset, MenuType } from "@services/get-assets"

interface AseetsResponse {
  status: boolean,
  code: number,
  menu: Asset[]
}

interface AssetResponse {
  status: boolean,
  code: number,
  img: Asset | null
}

export async function getMenu (menuType: MenuType, serverUrl?: string, transformations?: string): Promise<AseetsResponse> {
  /* For request in the server side, is needed to provide a full url */
  const endpoint = 'api/retrieve-assets'
  let url = serverUrl? `${serverUrl}/${endpoint}?menuType=${menuType}` : `${endpoint}?menuType=${menuType}`
  if (transformations) url+= `&transformations=${transformations}`

  const response = await fetch(url)
  const data = await response.json()

  return data
}

export async function getImgByPublicId (publicId: string, serverUrl?: string, transformations?: string): Promise<AssetResponse> {
  const endpoint = `api/${publicId}`
  let url = serverUrl? `${serverUrl}/${endpoint}` : `${endpoint}`
  url += '.retrieve-img'
  if (transformations) url+= `?transformations=${transformations}`

  const response = await fetch(url)
  const data = await response.json()

  return data
}