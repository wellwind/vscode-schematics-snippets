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
| `sch-default-function`             | [code](docs/schematics/sch-default-function.md)             | Generate an export function with schematics template |
| `sch-rule`                         | [code](docs/schematics/sch-rule.md)                         | Generate a basic rule of schematics                  |
| `sch-tree-create`                  | [code](docs/schematics/sch-tree-create.md)                  | Create a file to the tree                            |
| `sch-tree-overwrite`               | [code](docs/schematics/sch-tree-overwrite.md)               | Overwrite a file content from the tree               |
| `sch-tree-delete`                  | [code](docs/schematics/sch-tree-delete.md)                  | Delete a file from the tree                          |
| `sch-tree-delete-directory`        | [code](docs/schematics/sch-tree-delete-directory.md)        | Delete a directory from the tree                     |
| `sch-tree-rename`                  | [code](docs/schematics/sch-tree-rename.md)                  | Rename a file from the tree                          |
| `sch-tree-read`                    | [code](docs/schematics/sch-tree-read.md)                    | Read a file from the tree                            |
| `sch-tree-exist`                   | [code](docs/schematics/sch-tree-exist.md)                   | Check a file exist in the tree                       |
| `sch-import-external-schematic`    | [code](docs/schematics/sch-import-external-schematic.md)    | Import externalSchematic                             |
| `sch-external-schematics`          | [code](docs/schematics/sch-external-schematics.md)          | Run external schematics                              |
| `sch-import-chain`                 | [code](docs/schematics/sch-import-chain.md)                 | Import chain rule                                    |
| `sch-chain-rules`                  | [code](docs/schematics/sch-chain-rules.md)                  | Chain schematic rules                                |
| `sch-import-apply-merge-templates` | [code](docs/schematics/sch-import-apply-merge-templates.md) | Import rules to apply and merge templates            |
| `sch-apply-merge-templates`        | [code](docs/schematics/sch-apply-merge-templates.md)        | Apply and merge templates                            |
| `sch-read-json-file`               | [code](docs/schematics/sch-read-json-file.md)               | Read json file                                       |
| `sch-write-json-file`              | [code](docs/schematics/sch-write-json-file.md)              | Write json file                                      |
| `sch-create-json-file`             | [code](docs/schematics/sch-create-json-file.md)             | Create json file                                     |
| `sch-import-install-package-task`  | [code](docs/schematics/sch-import-install-package-task.md)  | Import install package task                          |
| `sch-install-package`              | [code](docs/schematics/sch-install-package.md)              | Run install package task                             |
| `sch-set-package-dependencies`     | [code](docs/schematics/sch-set-package-dependencies.md)     | Set dependencies to package.json                     |
| `sch-set-package-dev-dependencies` | [code](docs/schematics/sch-set-package-dev-dependencies.md) | Set devDependencies to package.json                  |
| `sch-set-package-scripts`          | [code](docs/schematics/sch-set-package-scripts.md)          | Set script to package.json                           |

<!-- Schematics End -->

#### In schema.json

<!-- Schema Begin -->

| Snippet Name                    | Generated Code                                       | Description                                             |
| ------------------------------- | ---------------------------------------------------- | ------------------------------------------------------- |
| `sch-default-json`              | [code](docs/schema/sch-default-json.md)              | schema.json template                                    |
| `sch-property`                  | [code](docs/schema/sch-property.md)                  | Add a property to schema.json                           |
| `sch-property-prompt-input`     | [code](docs/schema/sch-property-prompt-input.md)     | Add a property to schema.json contains prompt input     |
| `sch-property-prompt-yes-no`    | [code](docs/schema/sch-property-prompt-yes-no.md)    | Add a property to schema.json contains prompt Y/N       |
| `sch-property-prompt-selection` | [code](docs/schema/sch-property-prompt-selection.md) | Add a property to schema.json contains prompt selection |
| `sch-property-dollar-default`   | [code](docs/schema/sch-property-dollar-default.md)   | Property $default                                       |

<!-- Schema End -->

#### In collection.json

<!-- Collection Begin -->

| Snippet Name                      | Generated Code                                             | Description                                            |
| --------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| `sch-new-schematic-default`       | [code](docs/collection/sch-new-schematic-default.md)       | Add a schematic to collection.json by deafult function |
| `sch-new-schematic-function-name` | [code](docs/collection/sch-new-schematic-function-name.md) | Add a schematic to collection.json by function name    |
| `sch-ng-add`                      | [code](docs/collection/sch-ng-add.md)                      | Add a schematic of "ng-add" to collection.json         |

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

### 4.0.1

- Because of some technical problem, now we are in 4.0.1 😜.

### 2.0.0

- Now we support snippet in `schema.json` and `collection.json` separately.
- In ver1, we use `sch-schema-*` and `sch-coll-*` to identify the snippet type in json file, but now we don't have to, so we remove `schema-` and `coll-` prefix.
- Because it's a breaking change, so let's upgrade to `2.0.0`

### 1.0.0

- Initially add snippets

## LICENSE

MIT
