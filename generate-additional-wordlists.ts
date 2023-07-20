/**
 * Generate category specific, ordered, .txt & .csv wordlists from the wordlist.csv
 */

import { Categories, Word } from "./types.ts";

const wordlist = Deno.readTextFileSync("./wordlists/wordlist.csv");

const lines = wordlist.split("\n");

const words: Word[] = lines.map((line) => {
  const [word, ...counts] = line.split(",");
  const wordCount: Word = {
    word,
    overall: parseInt(counts[0]),
    operationType: parseInt(counts[1]),
    operationField: parseInt(counts[2]),
    queryType: parseInt(counts[3]),
    queryField: parseInt(counts[4]),
    mutationType: parseInt(counts[5]),
    mutationField: parseInt(counts[6]),
    subscriptionType: parseInt(counts[7]),
    subscriptionField: parseInt(counts[8]),
    argument: parseInt(counts[9]),
    type: parseInt(counts[10]),
    field: parseInt(counts[11]),
  };
  return wordCount;
});

const generateWordlistForCategory = (category: Categories) => {
  const wordsForCategory = words
    .filter((word) => word[category] > 0)
    .sort((a, b) => b[category] - a[category]);

  const wordlist = wordsForCategory.map((word) => word.word).join("\n");

  const csv = [
    ["word", "count"],
    ...wordsForCategory.map((word) => [word.word, word[category]]),
  ];

  const csvString = csv.map((line) => line.join(",")).join("\n");

  Deno.writeTextFileSync(`./wordlists/${category}Wordlist.txt`, wordlist);

  Deno.writeTextFileSync(`./wordlists/${category}Wordlist.csv`, csvString);
};

for (const category in Categories) {
  generateWordlistForCategory(category as Categories);
}
