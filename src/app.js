const express = require('express');
const cors = require('cors');

const PORT = 4000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
})
);
app.get('/', (req, res) => {
    res.send('servidor creado');
});
app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`);

});