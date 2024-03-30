/// <reference path=".astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string;
    readonly PUBLIC_WHATSAPP_PHONE: String;
    readonly EMAIL_API_KEY: string;
    readonly EMAIL_RECEIVER: string;
}

interface importMeta {
    readonly env: ImportMetaEnv
}