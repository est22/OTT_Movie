import React, { Component } from "react";

export const Join = () => {

// export default class Join extends Component {
    // const [articles, setArticles] = useState([]);
    
    // useEffect(()=>{
    // fetch('http://localhost:5000/join',{
    //     'methods':'GET',
    //     headers : {
    //     'Content-Type':'application/json'
    //     }
    // })
    // .then(response => response.json())
    // // .then(response => setArticles(response))
    // .catch(error => console.log(error))

    // },[])

    const [todo, setTodo] = useState([])

    useEffect(()=> {
        fetch('/api').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    }, [])

    // render() {
    return (
        <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" />
            </div>


            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="./Login">sign in?</a>
            </p>
        </form>
    );
    // }
}
//https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/