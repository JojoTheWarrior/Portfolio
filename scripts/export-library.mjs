import { readFile, writeFile } from 'node:fs/promises';
// Load the shared data as ESM without changing the CRA project's module type.
const source = await readFile(new URL('../src/data/content.js', import.meta.url), 'utf8');
const { algorithms, collections } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const categories = [...new Set(algorithms.map(item => item.category))];
const sections = categories.map(category => `## ${category}\n\n${algorithms.filter(item => item.category === category).map(item => `- [${item.name}](${item.href}) — ${item.description}`).join('\n')}`);
const extra = collections.map(item => `- [${item.name}](${item.href}) — ${item.description}`).join('\n');
await writeFile(new URL('../public/algorithm-library.md', import.meta.url), `# JojoTheWarrior's algorithm shelf\n\nMy public ICPC implementations and collected notes. Mostly C++.\n\n${sections.join('\n\n')}\n\n## Collections\n\n${extra}\n\nOriginal code and source credits live in the linked repositories. These are practice implementations, not a tested package.\n`);
console.log(`Exported ${algorithms.length} algorithm links.`);
