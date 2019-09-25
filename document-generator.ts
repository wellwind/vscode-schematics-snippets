import * as fs from 'fs';
import * as markdownTable from 'markdown-table';
import * as path from 'path';
import * as shell from 'shelljs';

interface Snippet {
  scope: string;
  prefix: string;
  body: string[] | string;
}

interface Snippets {
  [key: string]: Snippet;
}

const generateSnippetsDocument = (snippetPath: string, docFolder: string, replaceBlock: string) => {
  let readmeTable = [['Snippet Name', 'Generated Code', 'Description']];

  if (fs.existsSync(docFolder)) {
    fs.unlinkSync(docFolder);
  }
  shell.mkdir('-p', docFolder);

  const data = fs.readFileSync(snippetPath);
  const snippets = JSON.parse(data.toString()) as Snippets;
  Object.keys(snippets).forEach(key => {
    const snippet = snippets[key];

    const content = `# ${snippet.prefix}

${key}

\`\`\`
${Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body}
\`\`\`
`;

    const filePath = path.join(docFolder, `${snippet.prefix}.md`);
    fs.writeFileSync(filePath, content);

    readmeTable.push([
      `\`${snippet.prefix}\``,
      `[code](${path.join(docFolder, snippet.prefix).replace(new RegExp(/\\/, 'g'), '/')}.md)`,
      key
    ]);
  });

  const readme = fs.readFileSync('README.md').toString('UTF-8');
  const regexString = `<!-- ${replaceBlock} Begin -->.+<!-- ${replaceBlock} End -->`;
  const replacedReadme = readme.replace(
    new RegExp(regexString, 's'),
    `<!-- ${replaceBlock} Begin -->\n\n${markdownTable(readmeTable)}\n\n<!-- ${replaceBlock} End -->`
  );
  fs.writeFileSync('README.md', replacedReadme);
};

generateSnippetsDocument('snippets/schematics-snippets.json', 'docs/schematics', 'Schematics');
generateSnippetsDocument('snippets/typescript-snippets.json', 'docs/typescript', 'TypeScript');

console.info('Documents generated.');
