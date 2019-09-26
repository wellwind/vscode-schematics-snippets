# sch-coll-new-sch-function-name

Add a schematic to collection.json by function name

```
"${0:schematic-name}": {
  "description": "Describe the schematic.",
  "factory": "./${0:schematic-name}/index#${1:schematicName}",
  "schema": "./${0:schematic-name}/schema.json"
}
```
