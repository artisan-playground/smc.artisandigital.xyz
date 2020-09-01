import { schema } from 'nexus'

export const GetCompanies = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.list.field('getCompanies', {
      type: 'Company',
      resolve(_, args, ctx) {
        return ctx.db.company.findMany()
      },
    })
  },
})

export const GetCompanyById = schema.extendType({
  type: 'Query',
  definition: (t) => {
    t.field('getCompanyById', {
      type: 'Company',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_, { id }, ctx) {
        return ctx.db.company.findOne({
          where: {
            id: id,
          },
        })
      },
    })
  },
})
