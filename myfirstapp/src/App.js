import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos.json'

//como si trajeras informacion de un backend
//console.log(todos);

//importar componente -- formulario
 import TodoForm from './components/TodoForm';

class App extends Component{

  constructor(){
    super();
    this.state = {
      todos
    }

    this.handleAddTodo = this.handleAddTodo.bind(this)
   
  }

  //metodo para agregar nuevos datos a nuestras tareas

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo] //unir el estado actual de la tarea con la nueva tarea
    })

  }

  //metodo para borrar una tarea
  removeTodo(index){
   if(window.confirm('¿Estas seguro de querer eliminarlo?')){

    // console.log(index);
   this.setState({ //indico lo que quiero eliminar
    todos: this.state.todos.filter((e, i)=>{//genera un nueco arreglo con nuevos datos si cumplen una condicoon => filter
      return i !== index  // si los indices son diferentes los agrega pero si el indice que elijo es el mismo que la condicion no lo agrega
    }) 

   })

   }

  }

  render() {
   const todos = this.state.todos.map((todo, i)=>{
     return (
     <div className="col-md-4" key={i}>
         <div className="card mt-4">
       <div className="card-header">
          <h3>{todo.title}</h3>
     <span className="badge badge-spill badge-danger ml-2">{todo.priority}</span>
       </div>

       <div className="card-body">
          <p>{todo.description}</p>
          <p><mark>{todo.responsible}</mark></p>
       </div>
       <div className="card-footer">
         <button className="btn btn-danger" onClick={this.removeTodo.bind(this,i)}>
           delete
         </button>
       </div>
       </div>

     </div>
     )
   })

   // return del componente
    return (
   
      <div className="App">
          <nav className = "navbar navbar-dark bg-dark">
              <a href="/" className ="text-white">Task
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
              
              </a>
          </nav>

          <div className="container">

            <div className="row mt-4">

            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>

            </div>

          </div>

  
   
        
      </div>
    );
  }
 
}

export default App;
