# sch-set-package-dependencies

Set dependencies to package.json

```
const content = JSON.parse(tree.read('package.json')!.toString('UTF-8'));
content.dependencies['${1:package}'] = '${2:version}';
tree.overwrite('package.json', JSON.stringify(content, null, 2));
```
