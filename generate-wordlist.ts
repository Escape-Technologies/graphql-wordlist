import { walk } from "https://deno.land/std@0.178.0/fs/walk.ts";
import { Categories, WordCount } from "./types.ts";
const decoder = new TextDecoder("utf-8");

class OccurenceCounter {
  counts: Map<string, WordCount>;
  constructor() {
    this.counts = new Map<string, WordCount>();
  }

  inc(key: string, type: keyof typeof Categories) {
    if (this.counts.has(key)) {
      const WordCount = this.counts.get(key)!;
      this.counts.set(key, { ...WordCount, [type]: WordCount[type] + 1 });
    } else {
      this.counts.set(key, {
        overall: 0,
        operationType: 0,
        operationField: 0,
        queryField: 0,
        mutationField: 0,
        subscriptionField: 0,
        queryType: 0,
        mutationType: 0,
        subscriptionType: 0,
        argument: 0,
        type: 0,
        field: 0,
        [type]: 1,
      });
    }
  }

  toCsv() {
    const lines = [];
    for (const [word, count] of this.counts.entries()) {
      lines.push([
        word,
        count.overall,
        count.operationType,
        count.operationField,
        count.queryType,
        count.queryField,
        count.mutationType,
        count.mutationField,
        count.subscriptionType,
        count.subscriptionField,
        count.argument,
        count.type,
        count.field,
      ]);
    }

    const sortBy = 1;
    lines.sort((a, b) => (b[sortBy] as number) - (a[sortBy] as number));

    const table = [Object.keys(Categories), ...lines];

    return table.map((line) => line.join(",")).join("\n");
  }
}

const count = new OccurenceCounter();

const parseIntrospection = (introspection: any) => {
  const queryTypeName = introspection.data.__schema.queryType?.name;
  const mutationTypeName = introspection.data.__schema.mutationType?.name;
  const subscriptionTypeName =
    introspection.data.__schema?.subscriptionType?.name;

  const queryType = introspection.data.__schema.types.find(
    (type: any) => type.name === queryTypeName
  );

  parseOperationType(queryType, "query");

  const mutationType = introspection.data.__schema.types.find(
    (type: any) => type.name === mutationTypeName
  );

  parseOperationType(mutationType, "mutation");

  const subscriptionType = introspection.data.__schema.types.find(
    (type: any) => type.name === subscriptionTypeName
  );

  parseOperationType(subscriptionType, "subscription");

  for (const type of introspection.data.__schema.types) {
    if (
      type.name === queryTypeName ||
      type.name === mutationTypeName ||
      type.name === subscriptionTypeName
    ) {
      parseGenericType(type);
    }
  }
};

const parseOperationType = (
  operationType: any,
  type: "query" | "mutation" | "subscription"
) => {
  if (!operationType) return;
  const operationFields = operationType.fields;

  const operationTypeName = operationType.name;

  count.inc(operationTypeName, "overall");
  count.inc(operationTypeName, `${type}Type`);
  count.inc(operationTypeName, "operationType");

  for (const field of operationFields) {
    const fieldName = field.name;

    count.inc(fieldName, "overall");
    count.inc(fieldName, `${type}Field`);
    count.inc(fieldName, "operationField");

    parseField(field);
  }
};

const parseField = (field: any) => {
  const fieldName = field.name;

  count.inc(fieldName, "overall");
  count.inc(fieldName, "field");

  const args = field.args;

  for (const arg of args) {
    parseArg(arg);
  }
};

const parseArg = (args: any) => {
  const argName = args.name;

  count.inc(argName, "overall");
  count.inc(argName, "argument");
};

const parseGenericType = (type: any) => {
  const typeName = type.name;

  count.inc(typeName, "overall");
  count.inc(typeName, "type");

  const fields = type.fields;

  for (const field of fields) {
    parseField(field);
  }
};

for await (const wlk of walk("./introspections", {
  includeDirs: false,
  exts: ["json"],
})) {
  console.log(wlk.path);

  const raw = Deno.readFileSync(wlk.path);

  try {
    const introspection = JSON.parse(decoder.decode(raw));
    parseIntrospection(introspection);
  } catch (e) {
    console.error(e);
    continue;
  }
}

const csv = count.toCsv();

Deno.writeTextFileSync("./wordlists/wordlist.csv", csv);
