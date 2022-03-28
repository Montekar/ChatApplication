import { Connection } from 'mongoose';
import { MatchSchema } from './match.schema';

export const MatchProvider = [
  {
    provide: 'MATCH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Match', MatchSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
