# GraphQL Get Query Plugin

Insomnia's GraphQL query editor always send the request with the editor content as the request body.
This means that if you're calling an endpoint that uses a `query` parameter it won't work as expected.

This plugin simply takes the body of the request and transforms the request to map the body to the `?query={body}` param.

## Usage

Add the GraphQL endpoints you need GET query support for in your environment, like so:

```
{
  "graphQLGetQueryPlugin": {
    "endpoints": [
      "https://mygraphqlapi.com/graphql",
      "http://localhost:4000/graphql"
    ]
  }
}
```
