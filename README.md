# Schematics Snippets

Code snippets collection for writing [@angular-devkit/schematics](https://www.npmjs.com/package/@angular-devkit/schematics)

## Features

- Simply use `sch-*` schematics to generate schematics related codes.
- Sometimes we should use TypeScript Compiler API, use `ts-*` schematics to generate some useful ast (Abstract Syntax Tree) manipulation code.
- For the code of snippet, see it [here](docs/).

### Schematics Snippets

<!-- Schematics Begin -->

| Snippet Name         | Generated Code                                | Description                            |
| -------------------- | --------------------------------------------- | -------------------------------------- |
| `sch-rule`           | [code](docs/schematics/sch-rule.md)           | Generate a basic rule of schematics    |
| `sch-tree-create`    | [code](docs/schematics/sch-tree-create.md)    | Create a file to the tree              |
| `sch-tree-overwrite` | [code](docs/schematics/sch-tree-overwrite.md) | Overwrite a file content from the tree |
| `sch-tree-delete`    | [code](docs/schematics/sch-tree-delete.md)    | Delete a file from the tree            |
| `sch-tree-rename`    | [code](docs/schematics/sch-tree-rename.md)    | Rename a file from the tree            |
| `sch-tree-read`      | [code](docs/schematics/sch-tree-read.md)      | Read a file from the tree              |

<!-- Schematics End -->

### TypeScript Snippets

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

Initial release of ...
