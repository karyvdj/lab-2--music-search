import React, { Component } from "react";

class SearchBar extends Component{
    artistRef = React.createRef();
    
    handleSubmit = e => {
      e.preventDefault();
      const query = this.artistRef.current.value;
      this.props.onSearch(query);
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="row">
                <input 
                    ref={this.artistRef} 
                    className="col-10" 
                    placeholder="¿Qué artista buscas?"
                />
                <button className="col-2 submit">Buscar</button>
            </form>
        );
    }
}
export default SearchBar;