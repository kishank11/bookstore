const app = require('./app')
const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
