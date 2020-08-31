import { schema } from 'nexus'

schema.objectType({
  name: 'Company',
  definition: (t) => {
    t.model.id()
    t.model.companyName()
    t.model.users()
  },
})
