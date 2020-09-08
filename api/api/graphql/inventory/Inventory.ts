import { schema } from 'nexus'

schema.objectType({
  name: 'Inventory',
  definition: (t) => {
    t.model.id()
    t.model.productName()
    t.model.quantity()
  },
})
