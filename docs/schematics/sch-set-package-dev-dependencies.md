# sch-set-package-dev-dependencies

Set devDependencies to package.json

```json
const content = JSON.parse(tree.read('package.json')!.toString('UTF-8'));
content.devDependencies['${1:package}'] = '${2:version}';
tree.overwrite('package.json', JSON.stringify(content, null, 2));
```
