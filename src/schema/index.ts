import { gql } from 'apollo-server-express';
import messageSchema from './message';
import userSchema from './user';

// 값을 한곳에서 컨트롤
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, messageSchema, userSchema];
