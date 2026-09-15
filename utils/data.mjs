import fs from 'node:fs';
import path from 'node:path';

export function loadJson(filePath, { allowEmpty = false, defaultValue = {} } = {}) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const contents = fs.readFileSync(absolutePath, 'utf8').trim();

  if (!contents) {
    if (allowEmpty) {
      return defaultValue;
    }

    throw new Error(`JSON file is empty: ${filePath}`);
  }

  try {
    return JSON.parse(contents);
  } catch (error) {
    throw new Error(`Invalid JSON in ${filePath}: ${error.message}`);
  }
}

export function mergeData(...sources) {
  return Object.assign({}, ...sources.filter((source) => source !== null && source !== undefined));
}