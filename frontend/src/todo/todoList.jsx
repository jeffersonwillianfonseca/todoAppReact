import React from 'react'
import IcconButton from '../template/icconButton'
import { connect } from 'react-redux'

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>
                    {todo.description}
                </td>
                <td>
                    <IcconButton style='success' icon='check' hide={todo.done}
                        onClick={() => props.changeToDone(todo)}>
                    </IcconButton>
                    <IcconButton style='warning' icon='reply' hide={!todo.done}
                        onClick={() => props.changeToPending(todo)}>
                    </IcconButton>
                    <IcconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}>
                    </IcconButton>
                </td>
            </tr>
        ))

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)