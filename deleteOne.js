const{ MongoClient} = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri= "mongodb+srv://beishiz8_db_user:passwd@cluster0.vo0jv0t.mongodb.net/?appName=Cluster0";
const client= new MongoClient(uri);
async function run() {
const database= client.db('notes');
const notes= database.collection('notes');
// idが2のドキュメントを削除
const note= await notes.deleteOne({ id:2});
console.log(note);
// 最後にクロースする
await client.close();
}
run()