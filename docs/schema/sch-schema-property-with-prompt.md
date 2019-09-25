# sch-schema-property-with-prompt

Add a property to schema.json with prompt

```
"${1:property}": {
  "description": "${2:description}",
  "type": "${3:string}",
  "default": "${4:value1}",
  "x-prompt": {
    "message": "${5:message}",
    "type": "list",
    "items": [
      { "value": "${6:value1}", "label": "${7:label1}" },
      { "value": "${8:value2}", "label": "${9:label2}" }
    ]
  }
}
```
