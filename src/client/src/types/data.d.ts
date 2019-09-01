export interface User {
  email: string; // String!
  id: string; // ID!
  name: string | null; // String
}

export interface Post {
  author: User | null; // User
  content: string | null; // String
  createdAt: any; // DateTime!
  id: string; // ID!
  published: boolean; // Boolean!
  title: string; // String!
  updatedAt: any; // DateTime!
}
