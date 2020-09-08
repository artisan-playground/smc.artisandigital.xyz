import { schema } from 'nexus'

schema.objectType({
  name: 'History',
  definition: (t) => {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.user()
  },
})
