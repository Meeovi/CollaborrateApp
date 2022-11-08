require("reflect-metadata");
require('dotenv').config();

import {  buildSchema } from "type-graphql";
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';
const { getUserId } = require('../server/config/utils');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
import { createServer } from '@graphql-yoga/node';
//import { useSofaWithSwaggerUI } from '@graphql-yoga/plugin-sofa'

import { useGraphQlJit } from '@envelop/graphql-jit';
import { resolvers } from "../prisma/generated/type-graphql";
import { useSentry } from '@envelop/sentry';
import '@sentry/tracing';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache'
import { useAPQ } from '@graphql-yoga/plugin-apq'

//import { ApolloGateway } from '@apollo/gateway'
//import { useApolloFederation } from '@envelop/apollo-federation'

// Create an app that is a Feathers AND Express application
const app = express(feathers());

app.use(express.json())
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport
app.configure(express.rest())

// Setting cors and logging capabilities

var cors = require('cors')

app.options('*', cors())

// Initialize the gateway
/* const gateway = new ApolloGateway({
  serviceList: [
    { name: 'First', url: process.env.GRAPHQL_ENV },
    //{ name: 'products', url: 'http://localhost:4002' }
  ]
}) */

// Pulling our Graphql Resolvers from Type-graphql & Prisma generation

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });
 
  // Make sure all services are loaded
  // await gateway.load()

  // Connect to Prisma

  const prisma = new PrismaClient();
  await prisma.$connect();

  // Graphql Server main function 

  const server = createServer({
    schema,
    cors: {
      origin: '*',
      credentials: true,
    },
    context: ({
      req
    }) => ({
      prisma,
      userId: req && req.headers.authorization ?
        getUserId(req) : null
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useGraphQlJit({}),
      useAPQ(),
      useSentry({
        includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
        includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
        includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      }),
      useResponseCache({
        // global cache
        session: () => null
      }),
    /* useSofaWithSwaggerUI({
        basePath: '/rest',
        swaggerUIEndpoint: '/swagger',
        servers: [
          {
            url: '/',
            description: 'Development server'
          }
        ],
        info: {
          title: 'AlternateCMS API',
          version: '1.0.0'
        },
        schema
      }),
      useApolloFederation({
        gateway
      }) */
    ],
  });

  app.use(express.errorHandler())

  app.use('/graphql', server)

  app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql')
  })
}

main().catch(console.error);
