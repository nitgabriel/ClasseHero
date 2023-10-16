class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        return ataque;
    }

    movimento() {
        let ataque = this.atacar();
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const hero1 = new Hero("Merlin", 3000, "mago");
const hero2 = new Hero("Arthur Pendragon", 31, "guerreiro");
const hero3 = new Hero("Shaolin Abbot", 108, "monge");
const hero4 = new Hero("Jubei Kibagami", 26, "ninja");

hero1.movimento();
hero2.movimento();
hero3.movimento();
hero4.movimento();


