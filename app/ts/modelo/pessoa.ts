class Pessoa {

    private nome: string;
    private idade: Number;
    private dataNascimento: Date

    constructor (private _nome: string, private _idade: Number, 
        private _dataNascimento: Date) {
            this._nome = _nome;
            this._idade = _idade;
            this._dataNascimento = _dataNascimento;
    }

    get nome(): string {
        return this._nome
    }

    set (nome): 
}