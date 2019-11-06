import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

const collectionObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'collection-snippets.json')).toString('UTF-8'));
const schemaObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'schema-snippets.json')).toString('UTF-8'));
const schematicsObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'schematics-snippets.json')).toString('UTF-8'));
const typescriptObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'typescript-snippets.json')).toString('UTF-8'));

const generateCompletionItems = (obj: any, selector: vscode.DocumentSelector) => {
  return vscode.languages.registerCompletionItemProvider(selector, {
    provideCompletionItems(
      _document: vscode.TextDocument,
      _position: vscode.Position,
      _token: vscode.CancellationToken,
      _context: vscode.CompletionContext
    ) {
      const completionItems: vscode.CompletionItem[] = [];

      Object.keys(obj).forEach(desc => {
        const prefix = obj[desc]['prefix'];
        const body = obj[desc]['body'];
        const snippet = Array.isArray(body) ? (body as string[]).join('\n') : body;
        const completion = new vscode.CompletionItem(prefix);
        completion.insertText = new vscode.SnippetString(snippet);
        completion.documentation = new vscode.MarkdownString(desc);

        completionItems.push(completion);
      });

      return completionItems;
    }
  });
};

export function registerCodeSnippets(context: vscode.ExtensionContext) {
  let collectionJsonProvider = generateCompletionItems(collectionObj, { scheme: 'file', pattern: '**/collection.json', language: 'json' });
  let schemaJsonProvider = generateCompletionItems(schemaObj, { scheme: 'file', pattern: '**/schema.json', language: 'json' });
  let schematicsTsProvider = generateCompletionItems(schematicsObj, { language: 'typescript' });
  let typescriptHelpersProvider = generateCompletionItems(typescriptObj, { language: 'typescript' });
  context.subscriptions.push(collectionJsonProvider, schemaJsonProvider, schematicsTsProvider, typescriptHelpersProvider);
}
