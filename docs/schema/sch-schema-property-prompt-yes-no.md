# sch-schema-property-prompt-yes-no

Add a property to schema.json contains prompt Y/N

```
"${1:property}": {
  "description": "${2:description}",
  "type": "${3:boolean}",
  "default": "${4:true}",
  "x-prompt": "${5:message}"
}
```
