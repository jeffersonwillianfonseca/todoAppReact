import React from 'react'
import Grid from '../template/grid'
import IcconButton from '../template/icconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from './todoActions'

const TodoForm =  props => {
    const keyHandler = (e) => {
        if (e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>

            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}>
                </input>
            </Grid>

            <Grid cols='12 3 2'>
                <IcconButton style='primary' icon='plus'
                    onClick={props.handleAdd}>
                </IcconButton>
                <IcconButton style='info' icon='search'
                    onClick={props.handleSearch}>
                </IcconButton>
                <IcconButton style='default' icon='close'
                    onClick={props.handleClear}>
                </IcconButton>
            </Grid>
        </div>)
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators(
    { changeDescription }, 
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)