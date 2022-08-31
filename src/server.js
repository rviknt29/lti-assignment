import { Server, Model } from 'miragejs';
// import data from '../assets/mockData.json';
import data from './data/characters.json';

export function makeServer({ environment = "development" } = {}) {

    let server = new Server({
        environment,

        models: {
            todo: Model,
        },

        seeds(server) {
            server.create("todo", data.data[0]);
            server.create("todo", data.data[1]);
        },

        routes() {
            this.namespace = "api";
            this.get("/todos", schema => {
                console.log("This is schema------>", schema)
                // schema.create("todo", {
                //     "_id": "59edee689509e51682ff8e02",
                //     "firstName": "Marge",
                //     "lastName": "Simpson",
                //     "picture": "https://vignette.wikia.nocookie.net/simpsons/images/8/87/Marge_Simpson_2.png/revision/latest?cb=20150131104556",
                //     "age": 40
                // })
                return schema.todos.all()
            })
            // For Adding

            this.post('/add', (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                return schema.todos.create(attrs);
              });


            // For Deleting
            this.delete('/delete/:id', (schema, request) => {
                let id = request.params.id;
                return schema.todos.find(id).destroy();
            });
        },
    })

    return server
}