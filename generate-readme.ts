import { Categories } from "./types.ts";

/*

word	the encountered word
overall count	the overall number of encounters of the word
operation type name count	the word is the typename of an operation (QueryTypename, MutationTypename, SubscriptionTypename)
operation field count	the word is a field of an operation (a query, mutation, or subscription)
query type name count	the word is the QueryTypename
query field count	the word is a query field
mutation type name count	the word is the MutationTypename
mutation field count	the word is a mutation field
subscription type name count	the word is the SubscriptionTypename
subscription field count	the word is a subscription field
argument count	the word is an argument name
type name count	the word is a type name
field name count	the word is a field name (operation or object field)
*/
const descriptions: {
  [category in (typeof Categories)[keyof typeof Categories]]: string;
} & { word: string } = {
  word: "the encountered word",
  overall: "the overall number of encounters of the word",
  operationType:
    "the word is the typename of an operation (QueryTypename, MutationTypename, SubscriptionTypename)",
  operationField:
    "the word is a field of an operation (a query, mutation, or subscription)",
  queryType: "the word is the QueryTypename",
  queryField: "the word is a query field",
  mutationType: "the word is the MutationTypename",
  mutationField: "the word is a mutation field",
  subscriptionType: "the word is the SubscriptionTypename",
  subscriptionField: "the word is a subscription field",
  argument: "the word is an argument name",
  type: "the word is a type name",
  field: "the word is a field name (operation or object field)",
};

const generateDecriptions = () => {
  let result = "";
  for (const [key, value] of Object.entries(descriptions)) {
    result += `* **${key}**: ${value}\n`;
  }
  return result;
};

/**
 * Display a table with the 20 most common words for each category
 */
const generateStatistic = (category: Categories) => {
  const wordlist = Deno.readTextFileSync(`./wordlists/${category}Wordlist.csv`);

  const lines = wordlist.split("\n").slice(1, 21);

  const words = lines.map((line) => {
    const [word, count] = line.split(",");
    return { word, count };
  });

  const tableHeader = "| Word | Count |\n|---|---|\n";

  const table =
    tableHeader +
    words.map((word) => `| ${word.word} | ${word.count} |`).join("\n");

  return table;
};

const generateStatistics = () => {
  let result = "";

  for (const category in Categories) {
    result += `### ${category}\n\n`;
    result += `*${descriptions[category as Categories]}*\n\n`;
    result += `Complete wordlists: \n\n`;
    result += `- \`./wordlists/${category}Wordlist.csv\`\n`;
    result += `- \`./wordlists/${category}Wordlist.txt\`\n\n`;
    result += generateStatistic(category as Categories);
    result += "\n\n";
  }

  return result;
};

const README = `# graphql-wordlist

The only graphql wordlists you'll ever need.

Built using more than 90k distinct GraphQL schemas.

Wordlists are available in \`./wordlists\` directory. The complete wordlist (with every category) is \`./wordlists/wordlist.csv\`.

Read more in our dedicated blog post: @TODO

## Categories

Words are counted by categories:

${generateDecriptions()}

## Statistics

The 20 most common words for each category:

${generateStatistics()}
`;

Deno.writeTextFileSync("./README.md", README);
