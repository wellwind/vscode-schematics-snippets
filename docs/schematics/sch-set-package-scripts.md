# sch-set-package-scripts

Set script to package.json

```json
const content = JSON.parse(tree.read('package.json')!.toString('UTF-8'));
content.scripts['${1:alias}'] = '${2:command}';
tree.overwrite('package.json', JSON.stringify(content, null, 2));
```
