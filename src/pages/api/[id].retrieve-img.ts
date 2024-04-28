import type { APIRoute } from "astro";
import type { Asset } from "@services/get-assets";
import { getImage } from "@services/get-assets";


export const GET: APIRoute = async ({ params, url }) => {
  const id = params.id
  let imgResponse: Asset[] = null
  let status = true
  let code: number = 200

  try {
    const transformations = url.searchParams.get('transformations')

    imgResponse = await getImage(id, transformations)

  } catch (error) {
    code = 500
    status = false
  }

  return new Response(JSON.stringify({
    status,
    code,
    img: imgResponse[0]
  }))

}