/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string
}

interface importMeta {
    readonly env: ImportMetaEnv
}