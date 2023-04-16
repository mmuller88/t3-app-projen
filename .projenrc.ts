import { typescript } from "projen";
import {
  TypeScriptJsxMode,
  TypeScriptModuleResolution,
} from "projen/lib/javascript";
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
      allowJs: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      noEmit: true,
      // incremental: true,
      strict: false,
      target: "es5",
      moduleResolution: TypeScriptModuleResolution.NODE,
      isolatedModules: true,
      jsx: TypeScriptJsxMode.PRESERVE,
      rootDir: undefined,
    },
    include: [
      ".eslintrc.cjs",
      "next-env.d.ts",
      "**/*.ts",
      "**/**/*.tsx",
      "**/*.cjs",
      "**/*.mjs",
    ],
  },
  // eslintOptions: {
  //   dirs: ["src"],
  //   ignorePatterns: ["_app.tsx"],
  // },
});
project.tsconfig!.file.readonly = false;
project.synth();
