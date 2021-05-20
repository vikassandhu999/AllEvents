import atlasSearchPlugin from 'mongoose-atlas-search';
import { VenueModel } from 'venue/infra/db/mongoose/VenueModel';

atlasSearchPlugin.initialize({
  model: VenueModel,
  overwriteFind: true,
  searchKey: 'search',
  addFields: {
    id: '$_id',
  },
  searchFunction: (query) => {
    return {
      wildcard: {
        query: `${query}*`,
        path: '_id',
        allowAnalyzedField: true,
      },
    };
  },
});
