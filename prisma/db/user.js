const prisma = require('../../src/server/client');
// const bcrypt = require('bcrypt');
const argon2 = require('argon2');
const saltRounds = 7;


// const hasher = async (password, salt) => {
//     const data = await bcrypt.hash(password, salt)
//     return data;
// }


const hasher = async (password) => {
    try {
        // Hash the password using Argon2 with the provided salt
        const hash = await argon2.hash(password);

        // Return the hashed password
        return hash;
    } catch (error) {
        // Handle any errors that occur during hashing
        console.error("Error hashing password:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
const createUser = async () => {
    console.log('createUser');

    const hashedPassword = await hasher("password");
    const hashedPizza = await hasher("pizza");
    const hashedjoe = await hasher("joe");

    const users =[
        {
            username:'sal',
            password:hashedPassword,
            isAdmin:false,
            isBanned:false,
            character_id:1,
            phone:555555555,
            email:'sal@sal.com'
        },
    
        {
            username:'nickgo',
            password:hashedPizza,
            isAdmin:true,
            isBanned:false,
            character_id:2,
            phone:2121234567,
            email:'x@nickgolebiewski.com'
        },
        {
            username:'joe',
            password:hashedjoe,
            isAdmin:false,
            isBanned:false,
            character_id:3,
            phone:555555555,
            email:'joe@joe.com'
        },
    ]

    await prisma.user.createMany({
        data:users
    })

};



createUser()
.then(async () => {
    await prisma.$disconnect()
    console.log("done");
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
