# sch-property-prompt-yes-no

Add a property to schema.json contains prompt Y/N

```json
"${1:property}": {
  "description": "${2:description}",
  "type": "boolean",
  "default": "${3:true}",
  "x-prompt": "${4:message}"
}
```
