# sch-property-prompt-input

Add a property to schema.json contains prompt input

```json
"${1:property}": {
  "description": "${2:description}",
  "type": "string",
  "default": "${3:default}",
  "x-prompt": "${5:message}"
}
```
