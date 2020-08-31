import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

main()

async function main() {
  const users = [
    // {
    //   email    : "parameschotana@gmail.com",
    //   firstName: "parames",
    //   lastName : "chotana",
    //   phone    : "0805656828",
    //   role     : EMPLOYEE,
    //   company  : "",
    //   companyId: "",
    // },
    // {
    //   name: 'Mars',
    //   population: 0,
    // },
  ]

  // Could use Promise.all
  // Sequential here so that world IDs match the array order above

  let results = []

  for (const user of users) {
    results.push(await db.user.create({ data: user }))
  }

  console.log('Seeded: %j', results)

  db.disconnect()
}
