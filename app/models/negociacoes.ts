import { Negociacao } from './negociacao.js';

// Array<Negociacao> é mesmo que negociacao[]
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray<Negociacao> é o mesmo que readonly Negociacao[]
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
