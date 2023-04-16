import { typescript } from "projen";
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "t3-app-projen",
  projenrcTs: true,

  prettier: true,

  gitignore: [
    "/.pnp",
    ".pnp.js",
    "/prisma/db.sqlite",
    "/prisma/db.sqlite-journal",
    "/.next/",
    "/out/",
    // "next-env.d.ts",
    ".DS_Store",
    "*.pem",
    ".env",
    ".env*.local",
    ".vercel",
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
