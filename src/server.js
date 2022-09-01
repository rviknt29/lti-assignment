import { Server, Model } from 'miragejs';
import characters from './data/characters.json';
import phrases from './data/phrases.json';

export function makeServer({ environment = "development" } = {}) {

    let server = new Server({
        environment,

        models: {
            todo: Model,
            // phrases: Model,
        },

        seeds(server) {
            server.create("todo", characters.data[0]);
            server.create("todo", characters.data[1]);
        },

        routes() {
            this.namespace = "api";
            this.get("/todos", schema => {
                console.log("This is schema------>", schema)
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
                // return schema.todos.find(id).destroy();
                return schema.todos.findBy({_id:id}).destroy();
            });
        },
    })

    return server
}