const bcrypt = require('bcrpytjs')
const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          if (authenticated) {
          let userToReturn = {...users[i]}
          delete userToReturn.passwordHash
          res.status(200).send(users[i])
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        
        const { username, email, firstName, lastName, password } = req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(req.body.password.salt)
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.passwordHash
        res.status(200).send(userToReturn)
    }
}



//The JPMorgan Chase breach of 2014 was a extremely significant one in the history of the United States.
//It was breached by a group of four hackers who were claimed to have gathered information on of account holders names, addresses, emails and phone numbers.
//The breach in security was believed to have had compromised data of 83 million accounts which also included 76 million individual households across the country.
//Other major banks were believed to be breached in the process as well such as Citigroup, E*Trade and HSBC Holdings.
//There were four arrests made in the attack including two Israeli citiznes, Gery Shalon and Ziv Orenstein, who were extradicted and sentecned in the US. Among the hackers was also US citizen by the name of Joshua Aaron.


//The breach was believed to stem from a singular security fix that was not applied to a singular system of security.




