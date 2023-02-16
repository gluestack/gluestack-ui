ls -d */ | xargs -I {} bash -c "cd '{}' && cp -rf src/styled-components/* . && rm -rf src/styled-components/ .npmignore babel.config.js package.json README.md"
