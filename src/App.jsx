import Card from "./Card.jsx"
import "./App.css"
function App() { 
  return (
    <div className="wrapper">
      {/* <h1 className="team"> OUR TEAM </h1>
       */}
       <div class="text">
    <span class="char">O</span>
    <span class="char">U</span>
    <span class="char">R </span>
    <span class="char"> </span>
    <span class="char">T</span>
    <span class="char">E</span>
    <span class="char">A</span>
    <span class="char">M</span>

  </div>
      <div className="w1">
      <Card teamname="Developers" members={["Sarthak Ganure" , "Samarth Sahu" ,"Akshat Bhansali" , "Rishi Raj Maheshwari", "Charan Polisetty" , "Roopesh S"]}/>
      <Card teamname="Initiators" members={["Rishi Raj Maheshwari" , "Mani Rohit" ,"Ashmitha Beesu" , "Akshat Bhansali", "Kuldeep Jhala" , "Prajwal Jadhav", "Priyanshu Maraskolhe","Roopesh S","Venkata Vamsi Dama" , "Sarthak Ganure","Yelluri Vidyendra", "Shagun Singh"]}/>
      <Card teamname="Design" members={["Aditya Singh Gahlaut" , "Varsha Dhanthala" ,"Aarav Saini" , "Raghunanadan Bansal"]}/>
      <Card teamname="Corporate Relations" members={["Priyanshu Maraskolhe" , "Prajwal Jadhav" ,"Greeshma Choudhary" , "Charan Polisetty" ,"Rishi Raj Maheshwari" ,"Devi Katasani", "Venkata Vamsi Dama" , "Jyothika P Bojja","Yelluri Vidyendra", "Roopesh S","Shagun Singh"]}/>
      <Card teamname="Outreach & Collaboration" members={["Charan Polisetty" , "Devi Katasani", "Venkata Vamsi Dama" ,"Greeshma Choudhary" ,"Rishi Raj Maheshwari", "Prajwal Jadhav","Shagun Singh" ]}/>
      <Card teamname="Content" members={["Raghunanadan Bansal" , "Dhruv Bharuka" ,"Aditya Deshpande" , "Amol Thakur","Ashmitha Beesu" ,"Jyothika P Bojja","Samarth Sahu" ]}/>
      <Card teamname="Media" members={["Aditya Deshpande" , "Amol Thakur" ,"Aditya Singh Gahlaut" , "Mani Rohit"]}/>
      <Card teamname="Hosting" members={["Ashmitha Beesu" ,"Jyothika P Bojja","Raghunanadan Bansal" , "Dhruv Bharuka" ,"Rishi Raj Maheshwari" ,"Shagun Singh","Varsha Dhanthala" ]}/>

</div>
    </div>
  );
}

export default App;