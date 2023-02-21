#!/bin/bash

# remove package-lock.json
# rm package-lock.json

# # yarn init
# yarn install

# # Install PostCSS
# yarn add postcss@^8.4

# # Install Tailwind
# yarn add -D postcss-preset-env tailwindcss

# # Create the Tailwind config file
# npx tailwind init -p

# # Install concurrently
# yarn add concurrently

# overwrite app/global.css with template_files/global.css
cp template_files/global.css app/global.css

# overwrite package.json with template_files/package.json
cp template_files/package.json package.json

# overwrite tailwind.config.js with template_files/tailwind.config.js
cp template_files/tailwind.config.js tailwind.config.js

