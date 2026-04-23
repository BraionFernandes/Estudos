"use strict";
// Defina uma interface chamada Usuario.
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        if (email) {
            this.email = email;
        }
    }
    Info() {
        if (this.email) {
            console.log(`
                ____________________________
                Dados do Usuario:
                Id: ${this.id}
                Nome: ${this.name}
                Email: ${this.email}
                ____________________________
            `);
        }
        else {
            console.log(`
                ____________________________
                Dados do Usuario:
                Id: ${this.id}
                Nome: ${this.name}
                Email: Email não informado!
                ____________________________
            `);
        }
    }
}
const user1 = new User(1, "Braion");
user1.Info();
//# sourceMappingURL=index.js.map