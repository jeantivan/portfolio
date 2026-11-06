import { execSync } from "node:child_process";

export default function setup() {
  execSync("pnpm astro build", { stdio: "ignore" });
}
