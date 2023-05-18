

export function AllGets() {
    const win = window.sessionStorage;

    async function GetPublicacoes() {
        let dados = fetch("http://127.0.0.1:8000/api/publicacoes", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function GetUmaPublicacao({ id }) {
        let dados = fetch("http://127.0.0.1:8000/api/publicacoes/" + id, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },



        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function GetUsuario() {
        let dados = fetch("http://127.0.0.1:8000/api/auth/user", {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    return { GetPublicacoes, GetUmaPublicacao, GetUsuario }
}