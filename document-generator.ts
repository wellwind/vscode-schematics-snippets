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

const clearDocFolder = (docFolder: string) => {
  shell.rm('-rf', docFolder);
  shell.mkdir('-p', docFolder);
};

const loadSnippets = (snippetPath: string) => {
  const data = fs.readFileSync(snippetPath);
  const snippets = JSON.parse(data.toString()) as Snippets;
  return snippets;
};

const generateSnippetDocumentcontent = (key: string, snippet: Snippet) => {
  const content = `# ${snippet.prefix}

${key}

\`\`\`
${Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body}
\`\`\`
`;
  return content;
};

function createSnippetDocumentFiles(snippets: Snippets, docFolder: string) {
  Object.keys(snippets).forEach(key => {
    const snippet = snippets[key];
    const filePath = path.join(docFolder, `${snippet.prefix}.md`);
    const content = generateSnippetDocumentcontent(key, snippet);
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

const generateSnippetsDocument = (snippetPath: string, docFolder: string, replaceBlock: string) => {
  clearDocFolder(docFolder);

  const snippets = loadSnippets(snippetPath);

  createSnippetDocumentFiles(snippets, docFolder);
  replaceReadmeSnippets(docFolder, snippets, replaceBlock);
};

generateSnippetsDocument('snippets/schematics-snippets.json', 'docs/schematics', 'Schematics');
generateSnippetsDocument('snippets/schema-snippets.json', 'docs/schema', 'Schema');
generateSnippetsDocument('snippets/typescript-snippets.json', 'docs/typescript', 'TypeScript');

console.info('Documents generated.');
