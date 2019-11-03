# sch-coll-new-schematic-function-name

Add a schematic to collection.json by function name

```typescript
"${1:schematic-name}": {
  "description": "${3:Description.}",
  "factory": "./${1:schematic-name}/index#${2:functionName}",
  "schema": "./${1:schematic-name}/schema.json"
}
```
