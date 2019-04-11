import React, { Component } from 'react'
import Grid from '../template/grid'
import IcconButton from '../template/icconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if (e.key == 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>

                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}>
                    </input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IcconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}>
                    </IcconButton>
                    <IcconButton style='info' icon='search'
                        onClick={this.props.handleSearch}>
                    </IcconButton>
                    <IcconButton style='default' icon='close'
                        onClick={this.props.handleClear}>
                    </IcconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators(
    { changeDescription, search },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)