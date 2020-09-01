import { schema } from 'nexus'

export const GetUsers = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('getUsers', {
      type: 'User',
      resolve(_root, _args, ctx) {
        return ctx.db.user.findMany()
      },
    })
  },
})

export const GetUsersById = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getUserById', {
      type: 'User',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_, { id }, ctx) {
        return ctx.db.user.findOne({
          where: {
            id: id,
          },
        })
      },
    })
  },
})
