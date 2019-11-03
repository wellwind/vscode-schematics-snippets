# sch-rule

Generate a basic rule of schematics

```json
function ${1:name}(${2:options}: ${3:any}): Rule {
  return (${4:tree}: Tree, ${5:context}: SchematicContext) => {
    ${6}
    return tree;
  };
}
```
