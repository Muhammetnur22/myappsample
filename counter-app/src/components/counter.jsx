import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        // imageUrl: 'https://picsum.photos/500',
        tags: ['tag1','tag2','tag3']
    };
    // styles = {
    //     fontSize: 20,
    //     fontWeight: "bold"
    // };

    renderTags(){
        if(this.state.tags.length ===0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement =  product => {
        console.log(product);

        this.setState({value: this.state.count + 1})
    };

   
    render() { 
        console.log('props', this.props)
        return (

         <div>
             {this.props.children}
            <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()}</span>
            <button onClick={() => this.handleIncrement("product")} className="btn btn-secondary btn-sm "> Increment </button> 
            </div>
        );
                // <div> 
                //     <img src={this.state.imageUrl} alt=""/>
                //     <span style={this.styles} className="badge  bg-warning m-2">{this.formatCount()}</span>
                //     <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()}</span> 
                //     <button style={{fontSize:50}} className="btn btn-secondary btn-sm "> Increment </button>
                //     <ul>
                //         {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                //     </ul>
                // </div>

    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        return this.state.count === 0 ? 'Zero' : this.state.count
    }

}
 
export default  Counter;