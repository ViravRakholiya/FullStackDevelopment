const App = () => {
  const course = 'Half Stack application development'
  const exeName1 = 'Fundamentals of React'
  const noOfExe1 = 10
  const exeName2 = 'Using props to pass data'
  const noOfExe2 = 7
  const exeName3 = 'State of a component'
  const noOfExe3 = 14

  return (
    <div>
      <Header course={course} />
      <Content exeName={[exeName1,exeName2,exeName3]} noOfExe={[noOfExe1,noOfExe2,noOfExe3]}/>
      <Total totalNoOfExe={noOfExe1 + noOfExe2 + noOfExe3} />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part exeName={props.exeName[0]} noOfExe={props.noOfExe[0]}/>
      <Part exeName={props.exeName[1]} noOfExe={props.noOfExe[1]}/>
      <Part exeName={props.exeName[2]} noOfExe={props.noOfExe[2]}/>
    </div>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.totalNoOfExe}</p>
}

const Part = (props) => {
  return <p>{props.exeName} {props.noOfExe}</p>
}

export default App;
