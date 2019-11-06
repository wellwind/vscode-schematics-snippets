import * as vscode from 'vscode';
import { registerCodeSnippets } from './register-code-snippets';
import { registerFileGenCommands } from './register-file-gen-commands';

export function activate(context: vscode.ExtensionContext) {
  registerCodeSnippets(context);
  registerFileGenCommands(context);
}
