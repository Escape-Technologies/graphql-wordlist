# graphql-wordlist

The only graphql wordlists you'll ever need.

Built using more than 90k distinct GraphQL schemas.

Wordlists are available in `./wordlists` directory. The complete wordlist (with every category) is `./wordlists/wordlist.csv`.

Read more in our dedicated blog post: @TODO

## Categories

Words are counted by categories:

* **word**: the encountered word
* **overall**: the overall number of encounters of the word
* **operationType**: the word is the typename of an operation (QueryTypename, MutationTypename, SubscriptionTypename)
* **operationField**: the word is a field of an operation (a query, mutation, or subscription)
* **queryType**: the word is the QueryTypename
* **queryField**: the word is a query field
* **mutationType**: the word is the MutationTypename
* **mutationField**: the word is a mutation field
* **subscriptionType**: the word is the SubscriptionTypename
* **subscriptionField**: the word is a subscription field
* **argument**: the word is an argument name
* **type**: the word is a type name
* **field**: the word is a field name (operation or object field)


## Statistics

The 20 most common words for each category:

### overall

*the overall number of encounters of the word*

Complete wordlists: 

- `./wordlists/overallWordlist.csv`
- `./wordlists/overallWordlist.txt`

| Word | Count |
|---|---|
| input | 3171951 |
| id | 1873041 |
| limit | 701109 |
| where | 508622 |
| offset | 495432 |
| first | 488631 |
| after | 446686 |
| before | 420216 |
| sort | 404980 |
| last | 404304 |
| search | 302171 |
| data | 290355 |
| filter | 288053 |
| page | 265605 |
| orderBy | 220744 |
| email | 194133 |
| keywords | 185536 |
| name | 152809 |
| type | 137298 |
| ids | 133076 |

### operationType

*the word is the typename of an operation (QueryTypename, MutationTypename, SubscriptionTypename)*

Complete wordlists: 

- `./wordlists/operationTypeWordlist.csv`
- `./wordlists/operationTypeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45405 |
| Mutation | 37578 |
| Subscription | 11538 |
| RootQueryType | 1757 |
| RootQuery | 1753 |
| RootMutation | 1649 |
| RootMutationType | 1597 |
| RootSubscriptionType | 1068 |
| query_root | 743 |
| subscription_root | 727 |
| query | 606 |
| mutation | 595 |
| Mutations | 260 |
| mutation_root | 220 |
| QueryRoot | 122 |
| PlatformQuery | 110 |
| PlatformService | 110 |
| Queries | 99 |
| MutationRoot | 88 |
| RootSubscription | 76 |

### operationField

*the word is a field of an operation (a query, mutation, or subscription)*

Complete wordlists: 

- `./wordlists/operationFieldWordlist.csv`
- `./wordlists/operationFieldWordlist.txt`

| Word | Count |
|---|---|
| users | 17580 |
| user | 16012 |
| resetPassword | 12743 |
| products | 11528 |
| group | 9356 |
| updateUser | 9354 |
| analytics | 8968 |
| product | 8926 |
| login | 8651 |
| me | 8263 |
| pages | 7343 |
| menu | 6922 |
| changePassword | 6914 |
| categories | 6908 |
| appSettings | 6872 |
| category | 6850 |
| company | 6567 |
| groups | 6478 |
| article | 6402 |
| currentUser | 6389 |

### queryType

*the word is the QueryTypename*

Complete wordlists: 

- `./wordlists/queryTypeWordlist.csv`
- `./wordlists/queryTypeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45405 |
| RootQueryType | 1757 |
| RootQuery | 1753 |
| query_root | 743 |
| query | 606 |
| QueryRoot | 122 |
| PlatformQuery | 110 |
| Queries | 99 |
| Domain | 70 |
| QueryV1 | 45 |
| QueryType | 26 |
| PublicQuery | 22 |
| RootSchemaQuery | 21 |
| Root | 20 |
| QueryContainer | 16 |
| Object | 12 |
| AppQuery | 11 |
| ROOTQUERY | 9 |
| frontendQuery | 9 |
| HeadquartersQuery | 9 |

### queryField

*the word is a query field*

Complete wordlists: 

- `./wordlists/queryFieldWordlist.csv`
- `./wordlists/queryFieldWordlist.txt`

| Word | Count |
|---|---|
| user | 15652 |
| users | 15590 |
| products | 11509 |
| group | 9177 |
| product | 8711 |
| me | 7990 |
| analytics | 7202 |
| menu | 6914 |
| categories | 6900 |
| appSettings | 6867 |
| category | 6802 |
| company | 6539 |
| article | 6394 |
| currentUser | 6362 |
| news | 5800 |
| pages | 5572 |
| sitemap | 5550 |
| links | 5527 |
| slider | 5414 |
| portfolio | 5363 |

### mutationType

*the word is the MutationTypename*

Complete wordlists: 

- `./wordlists/mutationTypeWordlist.csv`
- `./wordlists/mutationTypeWordlist.txt`

| Word | Count |
|---|---|
| Mutation | 37578 |
| RootMutation | 1649 |
| RootMutationType | 1597 |
| mutation | 595 |
| Mutations | 260 |
| mutation_root | 220 |
| PlatformService | 110 |
| MutationRoot | 88 |
| DomainContentMutation | 65 |
| MutationV1 | 45 |
| PublicMutation | 19 |
| MutationType | 16 |
| AppMutation | 11 |
| ROOTMUTATION | 9 |
| RootSchemaMutation | 9 |
| frontendMutation | 9 |
| ConvergeMutation | 8 |
| snappetRootMutation | 8 |
| MutationEntry | 8 |
| HeadquartersMutation | 8 |

### mutationField

*the word is a mutation field*

Complete wordlists: 

- `./wordlists/mutationFieldWordlist.csv`
- `./wordlists/mutationFieldWordlist.txt`

| Word | Count |
|---|---|
| resetPassword | 12633 |
| updateUser | 9315 |
| login | 8137 |
| changePassword | 6878 |
| createUser | 6378 |
| deleteMessage | 5886 |
| deleteUser | 5802 |
| requestPasswordReset | 4642 |
| deleteOrganization | 4439 |
| inviteUser | 4307 |
| register | 4161 |
| acceptInvite | 4153 |
| subscribe | 4108 |
| deleteVideo | 4099 |
| deleteService | 4097 |
| deleteIntegration | 4078 |
| unsubscribe | 3946 |
| deleteWebhook | 3879 |
| deleteSubscriber | 3867 |
| joinChannel | 3833 |

### subscriptionType

*the word is the SubscriptionTypename*

Complete wordlists: 

- `./wordlists/subscriptionTypeWordlist.csv`
- `./wordlists/subscriptionTypeWordlist.txt`

| Word | Count |
|---|---|
| Subscription | 11538 |
| RootSubscriptionType | 1068 |
| subscription_root | 727 |
| RootSubscription | 76 |
| Subscriptions | 15 |
| SubscriptionRoot | 14 |
| subscription | 6 |
| SubscriptionType | 6 |
| subscriptions | 4 |
| Root | 4 |
| AppSubscription | 3 |
| SubscriptionsRoot | 3 |
| TypesSubscriptionType | 3 |
| AllSubscriptions | 3 |
| GraphqlSubscription | 3 |
| DefaultAppSubscriptions | 2 |
| DagitSubscription | 2 |
| GraphSubscription | 2 |
| SchoolSubscription | 2 |
| TwinPlantSubscriptions | 2 |

### subscriptionField

*the word is a subscription field*

Complete wordlists: 

- `./wordlists/subscriptionFieldWordlist.csv`
- `./wordlists/subscriptionFieldWordlist.txt`

| Word | Count |
|---|---|
| issuableAssigneesUpdated | 2812 |
| issueCrmContactsUpdated | 2592 |
| issuableTitleUpdated | 2549 |
| issuableLabelsUpdated | 2439 |
| issuableDatesUpdated | 2269 |
| mergeRequestReviewersUpdated | 2219 |
| issuableDescriptionUpdated | 2158 |
| mergeRequestMergeStatusUpdated | 2158 |
| issuableMilestoneUpdated | 2110 |
| mergeRequestApprovalStateUpdated | 2064 |
| workItemNoteCreated | 1929 |
| workItemNoteDeleted | 1929 |
| workItemNoteUpdated | 1929 |
| loggingLiveTrail | 1763 |
| messageUpdated | 1620 |
| userUpdated | 1594 |
| notificationAdded | 1581 |
| root | 1575 |
| conversationUpdated | 1559 |
| postAdded | 1546 |

### argument

*the word is an argument name*

Complete wordlists: 

- `./wordlists/argumentWordlist.csv`
- `./wordlists/argumentWordlist.txt`

| Word | Count |
|---|---|
| input | 3171933 |
| id | 1871955 |
| limit | 701049 |
| where | 508622 |
| offset | 495432 |
| first | 488622 |
| after | 446686 |
| before | 420216 |
| sort | 404956 |
| last | 404304 |
| data | 290292 |
| filter | 287864 |
| search | 285080 |
| page | 252336 |
| orderBy | 220696 |
| email | 193527 |
| keywords | 185272 |
| name | 152512 |
| type | 136914 |
| ids | 133058 |

### type

*the word is a type name*

Complete wordlists: 

- `./wordlists/typeWordlist.csv`
- `./wordlists/typeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45398 |
| Mutation | 37578 |
| Subscription | 11538 |
| RootQueryType | 1757 |
| RootQuery | 1753 |
| RootMutation | 1649 |
| RootMutationType | 1598 |
| RootSubscriptionType | 1068 |
| query_root | 743 |
| subscription_root | 727 |
| query | 606 |
| mutation | 595 |
| Mutations | 260 |
| mutation_root | 220 |
| QueryRoot | 122 |
| PlatformQuery | 110 |
| PlatformService | 110 |
| Queries | 99 |
| MutationRoot | 88 |
| RootSubscription | 76 |

### field

*the word is a field name (operation or object field)*

Complete wordlists: 

- `./wordlists/fieldWordlist.csv`
- `./wordlists/fieldWordlist.txt`

| Word | Count |
|---|---|
| users | 35160 |
| user | 32024 |
| resetPassword | 25486 |
| products | 23055 |
| group | 18711 |
| updateUser | 18708 |
| analytics | 17936 |
| product | 17852 |
| login | 17301 |
| me | 16526 |
| pages | 14686 |
| menu | 13844 |
| changePassword | 13827 |
| categories | 13816 |
| appSettings | 13744 |
| category | 13700 |
| company | 13134 |
| groups | 12955 |
| article | 12804 |
| currentUser | 12778 |


