class Profile{
    username = ""

    getUser(){
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                credentials: 'include'
            }
        }
        fetch('/api/user', requestOptions)
            .then(res => res.json())
            .then(data => {
                this.username = data.username
                return data.username
            })
    }



}

export default new Profile()
