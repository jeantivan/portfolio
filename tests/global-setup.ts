import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

export default function setup() {
  const distDir = path.resolve(import.meta.dirname, "../dist");
  if (
    !fs.existsSync(distDir) ||
    !fs.existsSync(path.join(distDir, "index.html"))
  ) {
    execSync("pnpm astro build", { stdio: "ignore" });
  }
}
