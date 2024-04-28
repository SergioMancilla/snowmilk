import type { APIRoute } from "astro"
import { getMenu } from "@services/get-assets"
import type { Asset } from "@services/get-assets"

export const GET: APIRoute = async ({ url }) =>  {
  let menu: Asset[] = []
  let status = true
  let code: number = 200

  try {
    const menuType = url.searchParams.get('menuType')
    const transformations = url.searchParams.get('transformations')
  
    switch(menuType) {
      case 'menu':
        menu = await getMenu('menu', transformations)
        break;
      case 'drinks':
        menu = await getMenu('menu/drinks', transformations)
        break;
      case 'dishes':
        menu = await getMenu('menu/food', transformations)
        break;
      case 'desserts':
        menu = await getMenu('menu/desserts', transformations)
        break;
      default:
        status = false
        code = 404
    }
  } catch (error) {
    console.log(error)
    code = 500
    status = false
  }

  if (!menu) status = false
  return new Response(JSON.stringify({
      status,
      code,
      menu
  }))
}