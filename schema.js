import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import animal from './animal' // import the file you just made

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		animal, // add the document type to this array
  ]),
});