import { v2 as cloudinary } from "cloudinary"
import { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } from '@conf'

export interface Asset {
  asset_id: string
  public_id: string,
  format: string,
  resource_type: 'image',
  type: string,
  width: number,
  height: number,
  folder: string,
  secure_url: string
  context: {
    custom: {
      name: string
      description: string
      price: string
    }
  }
  category?: string
}

export type MenuType = 'dishes' | 'drinks' | 'desserts' | 'food'

export interface AssetResult {
  resources: Asset[]
}

// TODO parametrizar las variables
cloudinary.config({ 
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret
}) as AssetResult;

async function getAssets (prefix: string, transformations: string, type: string = 'upload'): Promise<Asset[] | null> {
  let assetsResult: AssetResult
  let assetsError = false
  await cloudinary.api.resources({
    type: type,
    prefix: prefix,
    context: true
  }, function(error, result) {
    assetsError = error
    assetsResult = result
  });

  if (assetsError) return null

  /* For deeper folders, divide assets into categories */
  const menu = assetsResult.resources.map((menuAsset) => {
    const folder = menuAsset.folder
    if (folder !== prefix) {
      const recursiveFolders = folder.split('/')
      menuAsset.category = recursiveFolders[recursiveFolders.length - 1]
    }
    if (transformations) {
      menuAsset.secure_url = menuAsset.secure_url.replace('/upload', `/upload/${transformations}`)
    }
    return menuAsset
  }).filter(menuAsset => !!menuAsset.context?.custom)

  return menu
}

export async function getMenu (menuType: string, transformations: string = null): Promise<Asset[] | null> {
  return await getAssets(menuType, transformations)
}

export async function getImage (assetId: string, transformations?: string): Promise<Asset[] | null> {
  let imgResult: AssetResult
  let imgError = false

  await cloudinary.api.resources_by_asset_ids(assetId, {
    transformations: transformations,
    context: true
  }, function(error, result) {
    imgError = error
    imgResult = result
  })

  if (!imgResult) return null

  if (transformations) {
    imgResult.resources[0].secure_url = imgResult.resources[0].secure_url.replace('/upload', `/upload/${transformations}`)
  }

  return imgResult.resources
}