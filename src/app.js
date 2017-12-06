// import React from 'react';
// import ReactDOM from 'react-dom';
// import Axios from 'axios';
//
// class App extends React.Component {
//   state = {
//     triageLevel: {},
//     diagnosis: {
//       evidence: [{
//         id: 's_50',
//         choice_id: 'present'
//       }]
//     },
//     labTests: {},
//     user: {
//       sex: 'male',
//       age: 30
//     },
//     conditions: [],
//     qusAndch: null
//   }
//
//   componentDidMount(){
//     const AppID  = 'a683ac0b';
//     const AppKey = '08f4f8d47156d21df50d162040f37eaf';
//     const reqObj = Object.assign(this.state.user,this.state.diagnosis);
//
//     console.log('API /diagnosis POST request object',reqObj);
//
//     Axios
//       .post('https://api.infermedica.com/v2/diagnosis/', reqObj, {
//         headers: { 'App-Id': AppID, 'App-Key': AppKey }
//       })
//       .then(data => {
//         console.log('data',data);
//         const conditionsArr = [];
//         const questionsAndChoicesArr = [];
//
//         data.data.conditions.forEach( () => conditionsArr.push({
//           condition: data.data.conditions
//         }));
//
//         questionsAndChoicesArr.push({ question: data.data.question.text, choices: data.data.question.items['0'].choices });
//
//         // console.log('conditionsArr', conditionsArr);
//         // console.log('questionsAndChoicesArr', questionsAndChoicesArr);
//         this.setState({ conditions: conditionsArr, qusAndch: questionsAndChoicesArr });
//
//       })
//       .catch(err => console.log('err',err));
//   }
//
//   render() {
//     let question = null;
//     let choices  = [];
//
//     if ( this.state.qusAndch.question.length ){
//
//       console.log('state question', this.state.qusAndch.question);
//
//     }
//
//
//     if ( question && choices ){
//
//       question = this.state.qusAndch.question;
//       choices = this.state.qusAndch.choices;
//       console.log('question', question);
//       console.log('choices', choices);
//     }
//
//     return (
//       <div>
//         { question &&
//           <h2>{ question }</h2>
//         }
//         <hr />
//         <form>
//           { choices && choices.map((choice,i) =>
//             <div key={i}>
//               <input type="radio" name={choice.id} value={choice.id} checked />{choice.label}
//             </div>
//           )}
//         </form>
//         <input type="submit" />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );
