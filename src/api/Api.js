import axios from 'axios';

function Api() {
   

    const getUsers = () => {
        
        return axios
            .get('http://me-api.sam-corp.me/hello')
            .then(response => console.log(response))
            .catch(error => this.setState({ error, isLoading: false }));
            
    }






    return getUsers;
}

export default Api;
