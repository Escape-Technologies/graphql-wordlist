export enum Categories {
  overall = "overall",
  operationType = "operationType",
  operationField = "operationField",
  queryType = "queryType",
  queryField = "queryField",
  mutationType = "mutationType",
  mutationField = "mutationField",
  subscriptionType = "subscriptionType",
  subscriptionField = "subscriptionField",
  argument = "argument",
  type = "type",
  field = "field",
}

export type WordCount = {
  [category in (typeof Categories)[keyof typeof Categories]]: number;
};

export type Word = {
  word: string;
} & WordCount;
