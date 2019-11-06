import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

const generateSchematic = (name: string) => {
// TODO: generate a basic schematic
}


export function registerFileGenCommands(context: vscode.ExtensionContext) {
  const command = 'schematicToolkit.genSchematic';

  const commandHandler = async() => {

    const workspaceRoot = vscode.workspace.rootPath;

    const packageJsonFilePath = path.join(workspaceRoot || '', 'package.json');
    const foundPackageFile = fs.existsSync(packageJsonFilePath);

    if (foundPackageFile) {
      const content = fs.readFileSync(packageJsonFilePath).toString('UTF-8');
      const packageJsonContent = JSON.parse(content.toString());

      const collectionFilePath = packageJsonContent.schematics;
      const collectionFilePhysicalPath = path.join(vscode.workspace.rootPath || '', collectionFilePath);

      const foundCollectionFile = fs.existsSync(collectionFilePhysicalPath);
      if (foundCollectionFile) {
        const schemaName = await vscode.window.showInputBox({ prompt: 'Schematic Name:' });
        if(schemaName) {
          generateSchematic(schemaName);
        }

        return;
      }
    }

    vscode.window.showErrorMessage('You are not in a schematic workspace.');
  };

  context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}
