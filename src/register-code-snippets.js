"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const collectionObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'collection-snippets.json')).toString('UTF-8'));
const schemaObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'schema-snippets.json')).toString('UTF-8'));
const schematicsObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'schematics-snippets.json')).toString('UTF-8'));
const typescriptObj = JSON.parse(fs.readFileSync(path.join(__dirname, 'snippets', 'typescript-snippets.json')).toString('UTF-8'));
const generateCompletionItems = (obj, selector) => {
    return vscode.languages.registerCompletionItemProvider(selector, {
        provideCompletionItems(_document, _position, _token, _context) {
            const completionItems = [];
            Object.keys(obj).forEach(desc => {
                const prefix = obj[desc]['prefix'];
                const body = obj[desc]['body'];
                const snippet = Array.isArray(body) ? body.join('\n') : body;
                const completion = new vscode.CompletionItem(prefix);
                completion.insertText = new vscode.SnippetString(snippet);
                completion.documentation = new vscode.MarkdownString(desc);
                completionItems.push(completion);
            });
            return completionItems;
        }
    });
};
function registerCodeSnippets(context) {
    let collectionJsonProvider = generateCompletionItems(collectionObj, { scheme: 'file', pattern: '**/collection.json', language: 'json' });
    let schemaJsonProvider = generateCompletionItems(schemaObj, { scheme: 'file', pattern: '**/schema.json', language: 'json' });
    let schematicsTsProvider = generateCompletionItems(schematicsObj, { language: 'typescript' });
    let typescriptHelpersProvider = generateCompletionItems(typescriptObj, { language: 'typescript' });
    context.subscriptions.push(collectionJsonProvider, schemaJsonProvider, schematicsTsProvider, typescriptHelpersProvider);
}
exports.registerCodeSnippets = registerCodeSnippets;
//# sourceMappingURL=register-code-snippets.js.map