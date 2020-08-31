import { schema } from 'nexus'

schema.objectType({
  name: 'User',
  definition: (t) => {
    t.model.id()
    t.model.email()
    t.model.firstName()
    t.model.lastName()
    t.model.phone()
    t.model.role()
    t.model.company()
  },
})

schema.queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve(_root, _args, ctx) {
        return ctx.db.user.findMany()
      },
    })
  },
})
