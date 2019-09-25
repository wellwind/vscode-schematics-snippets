# ts-ast-to-code

Convert AST node to code

```
const resultFile = ts.createSourceFile(
  '',
  '',
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
);

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed
});

const result = printer.printNode(
  ts.EmitHint.Unspecified,
  ${1:astNode},
  resultFile
);
```
