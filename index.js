'use strict';

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
type Video {
  id: ID,
  title: String,
  duration: Int,
  watched: Boolean
}

type Query {
  video: Video
  videos: [Video]
}

type Schema {
  query: Query 
}
`);

const videoA = {
  id: 1,
  title: 'Video A',
  duration: 1337,
  watched: false,
};

const videoB = {
  id: 2,
  title: 'Video B',
  duration: 42,
  watched: true,
};

const videos = [videoA, videoB];

const resolvers = {
  video: () => ({
    id: () => 1,
    title: () => 'bar',
    duration: () => 120,
    watched: () => true,    
  }),
  videos: () => videos,
};

const query = `
query myFirstQuery {
  videos {
    id,
    title,
    duration,
    watched
  }
}
`;

graphql(schema, query, resolvers)
  .then(result => console.log(result))
  .catch(error => console.log(error));