#!/bin/sh

rm -rf src/queries/types
rm @types/graphql-global-types.ts
export $(cat .env) && apollo schema:download --endpoint=${GRAPHQL_URI} graphql-schema.json

apollo codegen:generate --localSchemaFile=graphql-schema.json --target=typescript --includes=src/queries/*.ts --tagName=gql --addTypename --globalTypesFile=@types/graphql-global-types.ts types