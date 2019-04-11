const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartao',
        done: true
    }, {
        _id: 2,
        description: 'Reuniao com equipe',
        done: false
    }, {
        _id: 3,
        description: 'Consulta medica na terça',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state    
    }
}

