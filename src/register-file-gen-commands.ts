import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';
import { camelize, dasherize } from './utils/string';

const generateSchematic = (name: string) => {
  // TODO: generate a basic schematic
};

const updateCollectionJson = (path: string, name: string) => {
  const collectionJson = JSON.parse(fs.readFileSync(path).toString('UTF-8'));

  collectionJson.schematics[name] = {
    description: name,
    factory: `./${dasherize(name)}/index#{${camelize(name)}}`,
    schema: `./${dasherize(name)}/schema.json`
  };
  fs.writeFileSync(path, JSON.stringify(collectionJson, null, 2));
};

export function registerFileGenCommands(context: vscode.ExtensionContext) {
  const command = 'schematicToolkit.genSchematic';

  const commandHandler = async () => {
    const workspaceRoot = vscode.workspace.rootPath;

    const packageJsonFilePath = path.join(workspaceRoot || '', 'package.json');
    const foundPackageFile = fs.existsSync(packageJsonFilePath);

    if (foundPackageFile) {
      const content = fs.readFileSync(packageJsonFilePath).toString('UTF-8');
      const packageJsonContent = JSON.parse(content.toString());

      const collectionFilePath = packageJsonContent.schematics;
      if (packageJsonContent.schematics) {
        const collectionFilePhysicalPath = path.join(vscode.workspace.rootPath || '', collectionFilePath || '');

        const foundCollectionFile = fs.existsSync(collectionFilePhysicalPath);
        if (foundCollectionFile) {
          const collectionJson = JSON.parse(fs.readFileSync(collectionFilePhysicalPath).toString('UTF-8'));
          const schemaName = (await vscode.window.showInputBox({ prompt: 'Schematic Name:' })) || '';

          if (schemaName) {
            if (collectionJson.schematics[schemaName]) {
              vscode.window.showErrorMessage('This schematic name is exist.');
              return;
            }

            generateSchematic(schemaName);
            updateCollectionJson(collectionFilePhysicalPath, schemaName);

            vscode.window.showTextDocument(vscode.Uri.parse(collectionFilePhysicalPath));
          }

          return;
        }
      }
    }

    vscode.window.showErrorMessage('You are not in a schematic workspace.');
  };

  context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}
