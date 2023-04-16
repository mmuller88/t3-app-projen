import { typescript } from "projen";
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "t3-app-projen",
  projenrcTs: true,

  authorUrl: "https://martinmueller.dev",
  authorName: "Martin Müller",
  authorEmail: "office@martinmueller.dev",

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

  deps: [
    "@prisma/client",
    "@tanstack/react-query",
    "@trpc/client",
    "@trpc/next",
    "@trpc/react-query",
    "@trpc/server",
    "next",
    "react",
    "react-dom",
    "superjson",
    "zod",
  ],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    "@types/prettier",
    "@types/react",
    "@types/react-dom",
    "autoprefixer",
    "eslint",
    "eslint-config-next",
    "postcss",
    "prettier-plugin-tailwindcss",
    "prisma",
    "tailwindcss",
  ],
  tsconfig: {
    compilerOptions: {
      lib: ["dom", "dom.iterable", "esnext"],
      paths: {
        "~/*": ["./src/*"],
      },
    },
    include: [
      ".eslintrc.cjs",
      "next-env.d.ts",
      "**/*.ts",
      "**/*.tsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
  },
});
project.tsconfig!.file.readonly = false;
project.synth();
