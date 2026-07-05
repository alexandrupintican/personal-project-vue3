/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_API_SS_URL: string;
  readonly VITE_BASE_URL: string;
  readonly VITE_LOCAL_HOST: string;
  readonly NODE_ENV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export type EnvKeys = keyof ImportMetaEnv;
