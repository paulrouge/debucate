import json
import os
import shutil
import sys
import ctypes

def is_admin():
    if os.name == 'nt':
        try:
            return ctypes.windll.shell32.IsUserAnAdmin()
        except:
            return False
    else:
        return os.geteuid() == 0
    
if not is_admin():
    print('Please run this script as administrator')
    sys.exit()

# Remove package-lock.json if it exists
if os.path.exists('package-lock.json'):
    os.remove('package-lock.json')

# Run yarn install
os.system('yarn install')

# Overwrite app/global.css with template_files/global.css
shutil.copyfile('template_files/globals.css', 'app/globals.css')

# Overwrite tailwind.config.js with template_files/tailwind.config.js
shutil.copyfile('template_files/tailwind.config.js', 'tailwind.config.js')

# Load the contents of package.json into a dictionary
with open('package.json', 'r') as f:
    package_data = json.load(f)

# Update the scripts key with the new value
package_data['scripts'] = {
    "dev": "concurrently \"next dev\" \"tailwindcss --input ./app/globals.css --output ./app/output.css --watch\"",
    "build": "tailwindcss ./app/globals.css --output ./app/output.css && next build",
    "start": "next start",
    "lint": "next lint"
}

# Write the updated dictionary back to package.json
with open('package.json', 'w') as f:
    json.dump(package_data, f, indent=2)


msg = """\n\n\nThanks for using the Paul Rouge Mega Template!

Next.js13 has been installed with TailwindCSS and PostCSS.

To start the development server, run 'yarn next dev' in the terminal.

See the Readme.md file for more information. I also advise to check tailwind.config.js,
you can easily add custom colors, fonts, etc. that you can then easily use as tailwind classes.
"""

print(msg)
