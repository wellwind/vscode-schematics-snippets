# Schematics Snippets

Code snippets collection for writing [@angular-devkit/schematics](https://www.npmjs.com/package/@angular-devkit/schematics)

## Features

- Simply use `sch-*` schematics to generate schematics related codes.
- Sometimes we might use TypeScript Compiler API, there are `ts-*` snippets to generate some useful AST (Abstract Syntax Tree) manipulation code.
- For the code of snippet, see it [here](docs/).

### Schematics Snippets

#### In \*.ts

<!-- Schematics Begin -->

| Snippet Name                       | Generated Code                                              | Description                                          |
| ---------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------- |
| `sch-export-function-template`     | [code](docs/schematics/sch-export-function-template.md)     | Generate an export function with schematics template |
| `sch-rule`                         | [code](docs/schematics/sch-rule.md)                         | Generate a basic rule of schematics                  |
| `sch-tree-create`                  | [code](docs/schematics/sch-tree-create.md)                  | Create a file to the tree                            |
| `sch-tree-overwrite`               | [code](docs/schematics/sch-tree-overwrite.md)               | Overwrite a file content from the tree               |
| `sch-tree-delete`                  | [code](docs/schematics/sch-tree-delete.md)                  | Delete a file from the tree                          |
| `sch-tree-delete-directory`        | [code](docs/schematics/sch-tree-delete-directory.md)        | Delete a directory from the tree                     |
| `sch-tree-rename`                  | [code](docs/schematics/sch-tree-rename.md)                  | Rename a file from the tree                          |
| `sch-tree-read`                    | [code](docs/schematics/sch-tree-read.md)                    | Read a file from the tree                            |
| `sch-tree-exist`                   | [code](docs/schematics/sch-tree-exist.md)                   | Check a file exist in the tree                       |
| `sch-external-schematics`          | [code](docs/schematics/sch-external-schematics.md)          | Run external schematics                              |
| `sch-chain-rules`                  | [code](docs/schematics/sch-chain-rules.md)                  | Chain schematic rules                                |
| `sch-apply-merge-templates-import` | [code](docs/schematics/sch-apply-merge-templates-import.md) | Import functions to apply and merge templates        |
| `sch-apply-merge-templates`        | [code](docs/schematics/sch-apply-merge-templates.md)        | Apply and merge templates                            |
| `sch-read-json-file`               | [code](docs/schematics/sch-read-json-file.md)               | Read json file                                       |
| `sch-write-json-file`              | [code](docs/schematics/sch-write-json-file.md)              | Write json file                                      |
| `sch-create-json-file`             | [code](docs/schematics/sch-create-json-file.md)             | Create json file                                     |

<!-- Schematics End -->

#### In schema.json

<!-- Schema Begin -->

| Snippet Name                           | Generated Code                                              | Description                                             |
| -------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| `sch-schema-json`                      | [code](docs/schema/sch-schema-json.md)                      | schema.json template                                    |
| `sch-schema-property`                  | [code](docs/schema/sch-schema-property.md)                  | Add a property to schema.json                           |
| `sch-schema-property-prompt-input`     | [code](docs/schema/sch-schema-property-prompt-input.md)     | Add a property to schema.json contains prompt input     |
| `sch-schema-property-prompt-yes-no`    | [code](docs/schema/sch-schema-property-prompt-yes-no.md)    | Add a property to schema.json contains prompt Y/N       |
| `sch-schema-property-prompt-selection` | [code](docs/schema/sch-schema-property-prompt-selection.md) | Add a property to schema.json contains prompt selection |
| `sch-schema-property-dollar-default`   | [code](docs/schema/sch-schema-property-dollar-default.md)   | Property $default                                       |

<!-- Schema End -->

#### In collection.json

<!-- Collection Begin -->

| Snippet Name                           | Generated Code                                                  | Description                                            |
| -------------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------ |
| `sch-coll-new-schematic-default`       | [code](docs/collection/sch-coll-new-schematic-default.md)       | Add a schematic to collection.json by deafult function |
| `sch-coll-new-schematic-function-name` | [code](docs/collection/sch-coll-new-schematic-function-name.md) | Add a schematic to collection.json by function name    |
| `sch-coll-ng-add`                      | [code](docs/collection/sch-coll-ng-add.md)                      | Add a schematic of "ng-add" to collection.json         |

<!-- Collection End -->

### TypeScript Compiler API Snippets

<!-- TypeScript Begin -->

| Snippet Name       | Generated Code                              | Description                    |
| ------------------ | ------------------------------------------- | ------------------------------ |
| `ts-import`        | [code](docs/typescript/ts-import.md)        | Import TypeScript Compiler API |
| `ts-string-to-ast` | [code](docs/typescript/ts-string-to-ast.md) | Convert string to AST node     |
| `ts-ast-to-code`   | [code](docs/typescript/ts-ast-to-code.md)   | Convert AST node to code       |

<!-- TypeScript End -->

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

- Initially add snippets

## LICENSE

MIT
