import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.changeToDone = this.changeToDone.bind(this)
        this.changeToPending = this.changeToPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state, description,
                list: resp.data
            }))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    changeToDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
        .then(() => this.refresh(this.state.description))
    }

    changeToPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
        .then(() => this.refresh(this.state.description))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
        .then(() => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}
                    changeToDone={this.changeToDone}
                    changeToPending={this.changeToPending} />
            </div>
        )
    }
}