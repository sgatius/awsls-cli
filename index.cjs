#!/usr/bin/env node
var e=require("inquirer"),r=require("fs"),t=require("path"),n=require("url");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),r.default=e,r}var a=/*#__PURE__*/c(e),u=/*#__PURE__*/i(r),o=process.cwd(),d=function e(r,t){u.readdirSync(r).forEach(function(n){var c=r+"/"+n,i=u.statSync(c);if(i.isFile()){var a=u.readFileSync(c,"utf8");".npmignore"===n&&(n=".gitignore"),u.writeFileSync(o+"/"+t+"/"+n,a,"utf8")}else i.isDirectory()&&(u.mkdirSync(o+"/"+t+"/"+n),e(r+"/"+n,t+"/"+n))})},f=process.cwd(),s=t.dirname(n.fileURLToPath("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("index.cjs",document.baseURI).href)),l=u.readdirSync(s+"/templates");a.default.prompt([{name:"project-choice",type:"list",message:"What project template would you like to generate?",choices:l},{name:"project-name",type:"input",message:"Project name:",validate:function(e){return!!/^([A-Za-z\-\\_\d])+$/.test(e)||"Project name may only include letters, numbers, underscores and hashes."}}]).then(function(e){var r=e["project-name"],t=s+"/templates/"+e["project-choice"];u.mkdirSync(f+"/"+r),d(t,r)});
//# sourceMappingURL=index.cjs.map