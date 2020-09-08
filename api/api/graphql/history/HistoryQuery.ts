import { schema } from 'nexus'

export const GetHistories = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('getHistories', {
      type: 'History',
      resolve(_, _args, ctx) {
        return ctx.db.history.findMany()
      },
    })
  },
})

export const GetHistoryById = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getHistoryById', {
      type: 'History',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_, { id }, ctx) {
        return ctx.db.history.findOne({
          where: {
            id: id,
          },
        })
      },
    })
  },
})
