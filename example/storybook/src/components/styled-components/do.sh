ls -d */ | xargs -I {} bash -c "cd '{}' && cp -rf src/index.tsx ./index.tsx"
