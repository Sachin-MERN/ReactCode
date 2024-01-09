import './App.css';
import './Classcomp.css';
import React,{Component} from 'react'
import Nestedcomp from './Nestedcomp';
class Classcomp extends Component{
  render(){
    return(
      <div>
      <h1>this is the class component</h1>
      <table border = 'true' id='main'>
        <caption>this is the first table in the react js</caption>
        <thead className = 'heading'>
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Lname</th>
          <th>Mark</th>
        </tr>
        </thead>
        <tbody className = 'tbody'>
        <tr>
          <td>1</td>
          <td>sachin</td>
          <td>Madas</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Abhishek</td>
          <td>Dhone</td>
          <td>100</td>
        </tr><tr>
          <td>3</td>
          <td>Rushikesh</td>
          <td>Dikhule</td>
          <td>100</td>
        </tr><tr>
          <td>4</td>
          <td>Tushar</td>
          <td>Mukddum</td>
          <td>100</td>
        </tr>
        </tbody>
      </table>
      <Nestedcomp />
      </div>
    )
  }
}
export default Classcomp;

