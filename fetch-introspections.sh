INTROSPECTION_QUERY="query IntrospectionQuery{__schema{queryType{name}mutationType{name}subscriptionType{name}types{...FullType}directives{name description locations args{...InputValue}}}}fragment FullType on __Type{kind name description fields(includeDeprecated:true){name description args{...InputValue}type{...TypeRef}isDeprecated deprecationReason}inputFields{...InputValue}interfaces{...TypeRef}enumValues(includeDeprecated:true){name description isDeprecated deprecationReason}possibleTypes{...TypeRef}}fragment InputValue on __InputValue{name description type{...TypeRef}defaultValue}fragment TypeRef on __Type{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name ofType{kind name}}}}}}}}"
MAX_JOBS=40

total=$(jq length urls.json)
mkdir introspections

current=1
for url in $(cat urls.json | jq -r '.[].url'); do
  while [ "$(jobs | wc -l)" -gt "$MAX_JOBS" ]; do sleep 1; done
  echo "($current/$total) Fetching introspection for $url"
  filename=$(echo $url | sed 's/https:\/\///g' | sed 's/\//_/g')
  test -f introspections/$filename.json && echo "introspection for $url already exists" && continue
  curl -s -X POST -H "Content-Type: application/json" --data "{\"query\": \"$INTROSPECTION_QUERY\"}" $url | jq . > introspections/$filename.json &
  echo "saving to introspections/$filename.json"
  current=$((current+1))
done

echo "Deleting empty introspections"
find introspections -type f -empty -delete

echo "Got $(find introspections -type f | wc -l) introspections from $total urls"