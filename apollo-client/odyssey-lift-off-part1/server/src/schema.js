const { gql } = require('apollo-server')

const typeDefs = gql`

type Query{
    "Query to get tracks array for the homepage grid"
    trackForHome:[Track!]!
}

"A track is a group of modules that  teaches about a specific topic"
type Track{
    id: ID!
    "the track's title"
    title: String!
    "the Track's main author"
    author: Author!
    "the Track's main illustration to display  in the track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the numbers of modules this track contains"
    modulesCount: Int
}

"Author of a complete Track"
type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
}
`

module.exports = typeDefs;