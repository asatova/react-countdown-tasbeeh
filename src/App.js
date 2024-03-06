import  { Component} from "react";
import './App.css';

class User extends Component {

 constructor(props) {
     super(props)
     this.state = {
         counter:0,
     }
 }
 clickHandler = () => {
   this.setState(prevState => ({
       counter: this.state.counter + 1,
   }))
 }
    clickHandlerMinus = () => {
        this.setState(prevState => ({
            counter: this.state.counter - 1,
        }))
    }
    clickHandlerRestart = () => {
        this.setState({
            counter: 0,
        })
    }

  render() {
    const{ firstName, lastName, link}= this.props

    return(
        <div className='w-50 mx-auto'>
            <div className='border p-3 mt-5'>
          <h1>
            Mening ismim - {firstName}, sharifim - {lastName}
          </h1>
          <a href={link}>kanalim</a>
            <div className='mt-3'>
                <button onClick={this.clickHandler} className='btn btn-success'>Incremenet</button>
                <button onClick={this.clickHandlerMinus} className='btn btn-danger mx-2' >Decreement</button>
                <button onClick={this.clickHandlerRestart} className='btn btn-info'>Restart</button>
                    <p>{this.state.counter}</p>
            </div>
            </div>
        </div>
    )
  }
}


const App = () => {
  return (
      <div>
        <User firstName='Guli' lastName='guliyeva' link='google.com'/>
        <User firstName='Sabohat' lastName='Sabiyeva' link='google.com'/>
      </div>
  )
}
export default App