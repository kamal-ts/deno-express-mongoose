import {
    express,
    mongoose,
    config,
} from "./deps.js";

const envVars = await config();

const app = express();

mongoose.connect(envVars.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// Check to see connection status.
console.log(mongoose.connection.readyState);
// tes koneksi
const db = mongoose.connection;
db.on('error', (error) => console.info(error));
db.once('open', () => console.info('Database Connected...'));


app.get("/", (_req, res) => {
    return res.status(200).json({
        success: true
    })
});

app.listen(5000, () => {
    console.log("listening on http://localhost:5000/");
});

