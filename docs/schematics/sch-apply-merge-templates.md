# sch-apply-merge-templates

Apply and merge templates

```json
const ${1:templateSource} = apply(url('${2:./files}'), [
  applyTemplates({
    classify: strings.classify,
    dasherize: strings.dasherize,
    name: options.name
  }),
  move(normalize(options.path as string))
]);

return chain([
  mergeWith(${1:templateSource})
]);
```
