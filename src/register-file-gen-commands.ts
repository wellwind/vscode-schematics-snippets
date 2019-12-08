import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import { camelize, dasherize } from "./utils/string";

const generateSchematic = (collectionPath: string, name: string) => {
  const dirName = path.join(path.dirname(collectionPath), dasherize(name));
  const indexFilePath = path.join(dirName, "index.ts");
  const schemaFilePath = path.join(dirName, "schema.json");
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }

  const indexContent = `import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function ${camelize(name)}(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    return tree;
  };
}
`;
  fs.writeFileSync(indexFilePath, indexContent);

  const schemaContent = `{
    "schema": "http://json-schema.org/schema",
    "id": "${name}",
    "title": "${name}",
    "type": "object",
    "description": "${name}",
    "properties": {},
    "required": []
}
`;

  fs.writeFileSync(schemaFilePath, schemaContent);

  vscode.window.showTextDocument(vscode.Uri.parse(schemaFilePath));
  vscode.window.showTextDocument(vscode.Uri.parse(indexFilePath));
};

const updateCollectionJson = (path: string, name: string) => {
  const collectionJson = JSON.parse(fs.readFileSync(path).toString("UTF-8"));

  collectionJson.schematics[name] = {
    description: name,
    factory: `./${dasherize(name)}/index#${camelize(name)}`,
    schema: `./${dasherize(name)}/schema.json`
  };
  fs.writeFileSync(path, JSON.stringify(collectionJson, null, 2));
  vscode.window.showTextDocument(vscode.Uri.parse(path));
};

const isSchemaWorkspace = async () => {
  const packageJsonFilePath = getPackageJsonFilePath();
  const foundPackageFile = fs.existsSync(packageJsonFilePath);

  if (foundPackageFile) {
    const collectionFilePath = getCollectionFilePath() || "";
    if (collectionFilePath) {
      const collectionFilePhysicalPath = getPhysicalFilePath(
        collectionFilePath
      );

      const foundCollectionFile = fs.existsSync(collectionFilePhysicalPath);
      if (foundCollectionFile) {
        return true;
      }
    }
  }
  return false;
};

const getPhysicalFilePath = (file: string) => {
  return path.join(vscode.workspace.rootPath || "", file || "");
};

const getCollectionFilePath = () => {
  const packageJsonFilePath = getPackageJsonFilePath();
  const packageJsonContent = JSON.parse(
    fs.readFileSync(packageJsonFilePath).toString("UTF-8")
  );
  const collectionFilePath = packageJsonContent.schematics;
  return collectionFilePath;
};

const getPackageJsonFilePath = () => {
  const workspaceRoot = vscode.workspace.rootPath;
  const packageJsonFilePath = path.join(workspaceRoot || "", "package.json");
  return packageJsonFilePath;
};

export function registerFileGenCommands(context: vscode.ExtensionContext) {
  const command = "schematicToolkit.genSchematic";

  const commandHandler = async () => {
    if (isSchemaWorkspace()) {
      const collectionFilePath = getCollectionFilePath() || "";
      const collectionFilePhysicalPath = getPhysicalFilePath(
        collectionFilePath
      );

      const collectionJson = JSON.parse(
        fs.readFileSync(collectionFilePhysicalPath).toString("UTF-8")
      );
      const schemaName =
        (await vscode.window.showInputBox({ prompt: "Schematic Name:" })) || "";

      if (schemaName) {
        if (collectionJson.schematics[dasherize(schemaName)]) {
          vscode.window.showErrorMessage("This schematic name is exist.");
          return;
        } else {
          updateCollectionJson(collectionFilePhysicalPath, schemaName);
          generateSchematic(collectionFilePhysicalPath, schemaName);
        }
      }
    } else {
      vscode.window.showErrorMessage("You are not in a schematic workspace.");
    }
  };

  context.subscriptions.push(
    vscode.commands.registerCommand(command, commandHandler)
  );
}
