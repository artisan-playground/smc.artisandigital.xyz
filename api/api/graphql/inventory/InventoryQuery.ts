import { schema } from 'nexus'

export const GetProducts = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('getProducts', {
      type: 'Inventory',
      resolve(_root, _args, ctx) {
        return ctx.db.inventory.findMany()
      },
    })
  },
})

export const GetProductById = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getProductById', {
      type: 'Inventory',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_, { id }, ctx) {
        return ctx.db.inventory.findOne({
          where: {
            id: id,
          },
        })
      },
    })
  },
})
