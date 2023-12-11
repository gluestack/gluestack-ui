const path = require('path');
const sourcePath=path.join(__dirname,"../", 'src',)
const destPath=path.join(__dirname,"../", 'packages',"themed-native-base")
const { exec } = require('child_process');
const fs =require("fs")

function moveSrcToPackages(){
  const files=fs.readdirSync(sourcePath)
  console.log(sourcePath,destPath,files)
  files.forEach((file)=>{
    console.log(file)
    exec(`git mv ${sourcePath}/${file} ${destPath}`, (err, stdout, stderr) => {
      // handle err, stdout & stderr
     });
  })
}
moveSrcToPackages()