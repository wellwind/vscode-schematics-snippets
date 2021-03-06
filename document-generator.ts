import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
const markdownTable = require('markdown-table');

interface Snippet {
  scope: string;
  prefix: string;
  body: string[] | string;
}

interface Snippets {
  [key: string]: Snippet;
}

const clearDocFolder = (docFolder: string) => {
  shell.rm('-rf', docFolder);
  shell.mkdir('-p', docFolder);
};

const loadSnippets = (snippetPath: string) => {
  const data = fs.readFileSync(snippetPath);
  const snippets = JSON.parse(data.toString()) as Snippets;
  return snippets;
};

const generateSnippetDocumentcontent = (key: string, snippet: Snippet, lang: string) => {
  const content = `# ${snippet.prefix}

${key}

\`\`\`${lang}
${Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body}
\`\`\`
`;
  return content;
};

function createSnippetDocumentFiles(snippets: Snippets, docFolder: string, lang: string) {
  Object.keys(snippets).forEach(key => {
    const snippet = snippets[key];
    const filePath = path.join(docFolder, `${snippet.prefix}.md`);
    const content = generateSnippetDocumentcontent(key, snippet, lang);
    fs.writeFileSync(filePath, content);
  });
}

const replaceReadmeSnippets = (docFolder: string, snippets: Snippets, replaceBlock: string) => {
  const readmeTable = [
    ['Snippet Name', 'Generated Code', 'Description'],
    ...Object.keys(snippets).map(key => {
      const snippet = snippets[key];
      return [`\`${snippet.prefix}\``, `[code](${path.join(docFolder, snippet.prefix).replace(new RegExp(/\\/, 'g'), '/')}.md)`, key];
    })
  ];

  const readme = fs.readFileSync('README.md').toString('UTF-8');
  const regexString = `<!-- ${replaceBlock} Begin -->.+<!-- ${replaceBlock} End -->`;
  const replacedReadme = readme.replace(
    new RegExp(regexString, 's'),
    `<!-- ${replaceBlock} Begin -->\n\n${markdownTable(readmeTable)}\n\n<!-- ${replaceBlock} End -->`
  );

  fs.writeFileSync('README.md', replacedReadme);
};

const generateSnippetsDocument = (snippetPath: string, docFolder: string, replaceBlock: string, lang: string) => {
  clearDocFolder(docFolder);

  const snippets = loadSnippets(snippetPath);

  createSnippetDocumentFiles(snippets, docFolder, lang);
  replaceReadmeSnippets(docFolder, snippets, replaceBlock);
};

generateSnippetsDocument('src/snippets/schematics-snippets.json', 'docs/schematics', 'Schematics', 'json');
generateSnippetsDocument('src/snippets/schema-snippets.json', 'docs/schema', 'Schema', 'json');
generateSnippetsDocument('src/snippets/collection-snippets.json', 'docs/collection', 'Collection', 'typescript');
generateSnippetsDocument('src/snippets/typescript-snippets.json', 'docs/typescript', 'TypeScript', 'typescript');

exec('git add .');
exec('git commit -m "chore(doc): update documents"');

console.info('Documents generated.');
