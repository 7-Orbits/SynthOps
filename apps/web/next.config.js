import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the workspace root for Turbopack to prevent
  // incorrect detection of global lockfiles as project roots.
  turbopack: {
    root: join(__dirname, "../../"),
  },
};

export default nextConfig;
