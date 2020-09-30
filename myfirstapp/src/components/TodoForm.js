import React,{Component} from 'react';


class TodoForm extends Component {
    constructor () {
        super();
        this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };

        //enlazar handelInput y handleSubmit
        this.handelInput = this.handelInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

//metodo para el formulario
    handelInput(e){
      //console.log(e.target.value, e.target.name);  //saber que escribe, que imput lo escribe
      const { value,  name} = e.target; //desctructurin permite hacer lo mismo que el console de arriba

      //evento para que al momento de escribir los valores de title, resposible ..etc 
      // ahora obtengan ese valor

      this.setState({ //setState permite alterar los campos hasta ese momento
        [name]: value

      })

      //console.log(this.state) //para mostrar como van cambiando los datos a medida que se escribe
    

    }

    //crear un evento para manejar el evento submit del formulario
    handleSubmit(e){
      // el e -> ayuda a evitar refrescar la pagina

      e.preventDefault();
      //console.log(this.state)
      this.props.onAddTodo(this.state)
    
      console.log('enviarr...')
      
    }


    render() {
        return (
          <div className="card">
            <form  className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  onChange={this.handelInput}
                  className="form-control"
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsible"
                  className="form-control"
                  placeholder="Responsible"
                  onChange={this.handelInput}
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  placeholder="Description"
                  onChange={this.handelInput}
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    onChange={this.handelInput}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        )
      }
}


export default TodoForm;