import * as vscode from 'vscode';
import { registerCodeSnippets } from './register-code-snippets';

export function activate(context: vscode.ExtensionContext) {
  registerCodeSnippets(context);
}
