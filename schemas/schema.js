import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import work from './works'
import menuslot from './menuslots' // import the file you just made

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		work,
    menuslot // add the document type to this array
  ]),
});