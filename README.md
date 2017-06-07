# graphql-egghead
Working through [Egghead: Build a GraphQL Server](https://egghead.io/lessons/javascript-create-a-graphql-schema)

# GraphiQL Command Line
```
mutation AddVideoQuery($input: AddVideoInput!) {
  createVideo(input:$input) {
    video{
      title
    }
  }
}

query AllVideosQuery{
  videos {
    edges {
      node {
        title,
        duration,
        released
      }
    }
  }
}
```