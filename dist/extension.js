"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    let schemaJsonProvider = vscode.languages.registerCompletionItemProvider({ scheme: 'schema.json', language: 'json' }, {
        provideCompletionItems(document, _position, _token, _context) {
            console.error('event');
            const completionItems = [];
            // const obj = JSON.parse(fs.readFileSync('~/snippets/schema-snippets.json').toString('UTF-8'));
            // console.log(obj);
            // Object.keys(obj).forEach(desc => {
            //   const prefix = obj[desc]['prefix'];
            //   const body = obj[desc]['body'];
            //   const completion = new vscode.CompletionItem(prefix);
            //   completion.insertText = new vscode.SnippetString(Array.isArray(body) ? (body as string[]).join('\n') : body);
            //   completion.documentation = desc;
            //   completionItems.push(completion);
            // });
            // a simple completion item which inserts `Hello World!`
            const simpleCompletion = new vscode.CompletionItem('Hello World!');
            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which will be
            // honored by the editor.
            const snippetCompletion = new vscode.CompletionItem('Good part of the day');
            snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            snippetCompletion.documentation = new vscode.MarkdownString('Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.');
            completionItems.push(simpleCompletion);
            return completionItems;
            // a simple completion item which inserts `Hello World!`
            // const simpleCompletion = new vscode.CompletionItem('Hello World!');
            // // a completion item that inserts its text as snippet,
            // // the `insertText`-property is a `SnippetString` which will be
            // // honored by the editor.
            // const snippetCompletion = new vscode.CompletionItem('Good part of the day');
            // snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            // snippetCompletion.documentation = new vscode.MarkdownString(
            //   'Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.'
            // );
            // // a completion item that can be accepted by a commit character,
            // // the `commitCharacters`-property is set which means that the completion will
            // // be inserted and then the character will be typed.
            // const commitCharacterCompletion = new vscode.CompletionItem('console');
            // commitCharacterCompletion.commitCharacters = ['.'];
            // commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
            // // a completion item that retriggers IntelliSense when being accepted,
            // // the `command`-property is set which the editor will execute after
            // // completion has been inserted. Also, the `insertText` is set so that
            // // a space is inserted after `new`
            // const commandCompletion = new vscode.CompletionItem('new');
            // commandCompletion.kind = vscode.CompletionItemKind.Keyword;
            // commandCompletion.insertText = 'new ';
            // commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            // // return all completion items as array
            // return [simpleCompletion, snippetCompletion, commitCharacterCompletion, commandCompletion];
        }
    });
    context.subscriptions.push(schemaJsonProvider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map