# graphql-wordlist

The only graphql wordlists you'll ever need.

Built using more than 60k distinct GraphQL schemas.

Wordlists are available in `./wordlists` directory. The complete wordlist (with every category) is `./wordlists/wordlist.csv`.

Learn more about how we crafted the wordlist in our dedicated blog post: [escape.tech/blog/graphql-wordlist/](escape.tech/blog/graphql-wordlist/)

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
| input | 3173119 |
| id | 1873451 |
| limit | 701265 |
| where | 508808 |
| offset | 495580 |
| first | 488821 |
| after | 446756 |
| before | 420286 |
| sort | 405066 |
| last | 404374 |
| search | 302205 |
| data | 290373 |
| filter | 288213 |
| page | 265749 |
| orderBy | 220898 |
| email | 194209 |
| keywords | 185536 |
| name | 152913 |
| type | 137326 |
| ids | 133096 |

### operationType

*the word is the typename of an operation (QueryTypename, MutationTypename, SubscriptionTypename)*

Complete wordlists: 

- `./wordlists/operationTypeWordlist.csv`
- `./wordlists/operationTypeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45421 |
| Mutation | 37593 |
| Subscription | 11541 |
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
| users | 17584 |
| user | 16016 |
| resetPassword | 12745 |
| products | 11533 |
| group | 9358 |
| updateUser | 9356 |
| analytics | 8968 |
| product | 8929 |
| login | 8654 |
| me | 8267 |
| pages | 7343 |
| menu | 6922 |
| changePassword | 6917 |
| categories | 6910 |
| appSettings | 6872 |
| category | 6854 |
| company | 6568 |
| groups | 6480 |
| article | 6405 |
| currentUser | 6393 |

### queryType

*the word is the QueryTypename*

Complete wordlists: 

- `./wordlists/queryTypeWordlist.csv`
- `./wordlists/queryTypeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45421 |
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
| user | 15656 |
| users | 15594 |
| products | 11514 |
| group | 9179 |
| product | 8714 |
| me | 7994 |
| analytics | 7202 |
| menu | 6914 |
| categories | 6902 |
| appSettings | 6867 |
| category | 6806 |
| company | 6540 |
| article | 6397 |
| currentUser | 6366 |
| news | 5800 |
| pages | 5572 |
| sitemap | 5551 |
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
| Mutation | 37593 |
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
| resetPassword | 12635 |
| updateUser | 9317 |
| login | 8140 |
| changePassword | 6881 |
| createUser | 6380 |
| deleteMessage | 5886 |
| deleteUser | 5804 |
| requestPasswordReset | 4643 |
| deleteOrganization | 4439 |
| inviteUser | 4307 |
| register | 4163 |
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
| Subscription | 11541 |
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
| issuableAssigneesUpdated | 2814 |
| issueCrmContactsUpdated | 2594 |
| issuableTitleUpdated | 2551 |
| issuableLabelsUpdated | 2441 |
| issuableDatesUpdated | 2271 |
| mergeRequestReviewersUpdated | 2221 |
| issuableDescriptionUpdated | 2160 |
| mergeRequestMergeStatusUpdated | 2160 |
| issuableMilestoneUpdated | 2112 |
| mergeRequestApprovalStateUpdated | 2066 |
| workItemNoteCreated | 1931 |
| workItemNoteDeleted | 1931 |
| workItemNoteUpdated | 1931 |
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
| input | 3173101 |
| id | 1872365 |
| limit | 701205 |
| where | 508808 |
| offset | 495580 |
| first | 488812 |
| after | 446756 |
| before | 420286 |
| sort | 405042 |
| last | 404374 |
| data | 290310 |
| filter | 288024 |
| search | 285114 |
| page | 252480 |
| orderBy | 220850 |
| email | 193603 |
| keywords | 185272 |
| name | 152616 |
| type | 136942 |
| ids | 133078 |

### type

*the word is a type name*

Complete wordlists: 

- `./wordlists/typeWordlist.csv`
- `./wordlists/typeWordlist.txt`

| Word | Count |
|---|---|
| Query | 45414 |
| Mutation | 37593 |
| Subscription | 11541 |
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
| users | 35168 |
| user | 32032 |
| resetPassword | 25490 |
| products | 23065 |
| group | 18715 |
| updateUser | 18712 |
| analytics | 17936 |
| product | 17858 |
| login | 17307 |
| me | 16534 |
| pages | 14686 |
| menu | 13844 |
| changePassword | 13833 |
| categories | 13820 |
| appSettings | 13744 |
| category | 13708 |
| company | 13136 |
| groups | 12959 |
| article | 12810 |
| currentUser | 12786 |


