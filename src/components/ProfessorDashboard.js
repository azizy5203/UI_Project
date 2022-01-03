import logo from "../assets/Icon awesome-python.png"
import '../css/ProfessorDashboard.css'

const Data = [
    {
      id: 1,
    
      name: "python",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,

      name: "oop",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
   
      name: "Data structure",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
  ];


  function Temp(props) {
    return (
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji}
          </span>
          <span>{props.name}</span>
        </dt>
        <dd>
         {props.meaning}
        </dd>
      </div>
    )
}





function createtemp(data){

    return (<Temp
    emoji={data.emoji}
    name={data.name}
    meaning={data.meaning}
    ></Temp>)
}


export default function ProfessorDashboard() {
    return (
        <div>


<h1 className="profHeader">
<span>Professor Courses</span>
</h1>

<dl className="dictionary">

{Data.map(createtemp)}

</dl>

<hr></hr>
            <dl className="dictionary">


<img className="profimg" src={logo} alt="Logo" />;

<div className="ddictionary term">
<h1 className="profHeader">python</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique risus et est pellentesque,
eu laoreet velit condimentum. Etiam tincidunt lacus ligula,
eu consequat sapien tincidunt a. Ut vel venenatis erat. Fusce in placerat neque.</p>

</div>

</dl>
        </div>
    )
}
