const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )
const database  = require( 'ronin-database' )
const server = ronin.server()

database.connect( process.env.CONNECTIONSTRING )
server.use( '/foo', (req, res) => {
   return res.json({ "foo": "ba哇22的r2" })
 })
server.use( '/', mocks.server( server.Router(), false, false ) )
server.start()