/* eslint-env node */
// Create basic file for a component[s]:
// node create_components.js header footer ...

import * as fs from "node:fs";
import path from "node:path";

for (const compName of process.argv.slice(2)) {
  mkComp(compName);
}

function mkComp(name) {
  const dir = path.resolve(`src/components/${name}`);
  const compFile = `${dir}/component.jsx`;
  if (fs.existsSync(compFile)) {
    return;
  }
  const tmpl = `export const ${name[0].toUpperCase() + name.slice(1)} = ({${name}}) => {\n    return <div>${name}</div>\n}\n`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(compFile, tmpl);
}
