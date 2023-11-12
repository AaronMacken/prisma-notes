import { PrismaClient } from '@prisma/client'

// query logs the sql queries that we do
// const prisma = new PrismaClient({ log: ['query'] })
const prisma = new PrismaClient()

async function main() {
    // await prisma.user.createMany({
    //     data: [
    //         {
    //             name: 'sam',
    //             age: 40,
    //             email: 'sam@gmail.com'
    //         },
    //         {
    //             name: 'sam',
    //             age: 22,
    //             email: 'sam2@gmail.com'
    //         }
    //     ]
    // });

    // filtering
    // const users = await prisma.user.findMany({
    //     where: {
    //         name: 'sam'
    //     },
    //     // take used for pagination
    //     orderBy: {
    //         age: 'asc'
    //     },
    //     take: 2
    //     // skip: 1 - skip one of the pieces of data
    // })

    // advanced filtering
    // const users = await prisma.user.findMany({
    //     where: {
    //         name: { not: 'sam' }
    //     }
    // })

    // name is in one of these array values
    // or `notIn`
    // const users = await prisma.user.findMany({
    //     where: {
    //         name: { in: ['aaron', 'sam'] }
    //     }
    // })

    // value is less than or greater than `lt` `gt`,
    // can combine booleans
    // const users = await prisma.user.findMany({
    //     where: {
    //         name: 'Tom',
    //         age: { lt: 20 }
    //     }
    // })

    // contains some text // or `endsWith`
    // const users = await prisma.user.findMany({
    //     where: {
    //         email: { contains: '@gmail.com' }
    //     }
    // })

    // and / or / not
    // const users = await prisma.user.findMany({
    //     where: {
    //         NOT: [
    //             { email: { contains: '@gmail.com' } }
    //         ]
    //     }
    // })

    // can use findFirst to match first data that matches a value
    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: 'aaron'
    //     }
    // })

    // or use `findMany` for all matching
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: 'aaron'
    //     }
    // })

    // we defined a `@@unique` property in this model, so we can search for it
    // const user = await prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             age: 30,
    //             name: 'aaron'
    //         }
    //     }
    // })
    // can also use select / include
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: 'aaron@gmail.com'
    //     }
    // })
    // await prisma.user.deleteMany();

    // const user = await prisma.user.createMany({
    //     data: [{
    //         name: 'aaron',
    //         email: 'aaron@gmail.com',
    //         age: 30,
    //     }, {
    //         name: 'Tom',
    //         email: 'tom@gmail.com',
    //         age: 13
    //     }]
    // });
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'aaron',
    //         email: 'aaron@gmail.com',
    //         age: 30,
    //         // user preference is a field of another type
    //         // we can use the `create` syntax to create the object simultaneously
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         },
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // });
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'aaron',
    //         email: 'aaron@gmail.com',
    //         age: 30,
    //         // user preference is a field of another type
    //         // we can use the `create` syntax to create the object simultaneously
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         },
    //     },
    //     include: {
    //         userPreference: true
    //     }
    // });

    // const user2 = await prisma.user.create({
    //     data: {
    //         name: 'aaron',
    //         email: 'aaron@gmail.com',
    //         age: 30,
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         },
    //     },
    //     // only the name will be returned
    //    // can only do `select` or `include`
    //     select: {
    //         name: true, userPreference: { select: id: true }
    //     }
    // });

    // updates // update / updateMany
    const users = await prisma.user.update({
        where: {
            email: 'aaron@gmail.com'
        },
        data: {
            email: 'aaron1@gmail.com'
        }
    })

    console.log('users: ', users);
}

// delete / where still works the same as the above selectors

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect()
    })