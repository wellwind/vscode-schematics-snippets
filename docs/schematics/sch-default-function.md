# sch-default-function

Generate an export function with schematics template

```json
import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function ${1:index}(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    ${0}
    return tree;
  };
}
```
