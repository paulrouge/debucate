#!/bin/bash

# remove package-lock.json
rm package-lock.json

# yarn init
yarn install

# Install PostCSS
yarn add postcss@^8.4

# Install Tailwind
yarn add -D postcss-preset-env tailwindcss@latest autoprefixer@latest

# Create the Tailwind config file
npx tailwind init -p

# Install concurrently
yarn add concurrently

# Install @headlessui/react
yarn add @headlessui/react

# Install @heroicons/react
yarn add @heroicons/react

# Install framer-motion
yarn add framer-motion

# Install ethers 5.4
yarn add ethers@5.4

# Install icon-sdk-js
yarn add icon-sdk-js

# Install @metamask/detect-provider
yarn add @metamask/detect-provider

# overwrite app/global.css with template_files/global.css
cp template_files/globals.css app/globals.css

# overwrite package.json with template_files/package.json
cp template_files/package.json package.json

# overwrite tailwind.config.js with template_files/tailwind.config.js
cp template_files/tailwind.config.js tailwind.config.js

