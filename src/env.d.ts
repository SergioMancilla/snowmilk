/// <reference path=".astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_SITE_URL: string;
    readonly PUBLIC_WHATSAPP_PHONE: String;
    readonly EMAIL_API_KEY: string;
    readonly EMAIL_RECEIVER: string;

    readonly CLOUDINARY_CLOUD_NAME: string;
    readonly CLOUDINARY_API_KEY: string;
    readonly CLOUDINARY_API_SECRET: string;

    readonly PUBLIC_URL_MENU_PDF: string
}

interface importMeta {
    readonly env: ImportMetaEnv
}