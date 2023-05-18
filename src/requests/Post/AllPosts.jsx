

export function AllPosts() {
    const win = window.sessionStorage;

    async function PostLogin(email, password) {
        const sendData = {
            "email": email,
            "password": password
        }
        let dados = fetch("http://127.0.0.1:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Authorization: 'Bearer ' +token
            },
            body: JSON.stringify(sendData)

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function PostRegisto(nome, email, password, confirmPassword) {
        const sendData = {
            "name": nome,
            "email": email,
            "password": password,
            "confirm_password": confirmPassword
        }
        let dados = fetch("http://127.0.0.1:8000/api/auth/register", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
                // Authorization: 'Bearer ' +token
            },
            body: JSON.stringify(sendData)

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function TrocarSenha(password_antigo, password, confirmPassword) {
        const sendData =
        {
            "old_password": password_antigo,
            "password": password,
            "confirm_password": confirmPassword
        }
        let dados = fetch("http://127.0.0.1:8000/api/perfil/change-password", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },
            body: JSON.stringify(sendData)

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function ActualizarPerfil(nome, email) {
        const sendData =
        {
            "name": nome,
            "profile_photo": email
        }
        let dados = fetch("http://127.0.0.1:8000/api/perfil/update-profile", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },
            body: JSON.stringify(sendData)

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function CriarPublicacao(titulo, descricao) {
        const sendData =
        {
            "title": titulo,
            "long_description": descricao,
            "category_id": 1,
            // "image": imagem,
        }
        let dados = fetch("http://127.0.0.1:8000/api/publicacoes/create", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            },
            body: JSON.stringify(sendData)

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }

    async function Sair() {

        let dados = fetch("http://127.0.0.1:8000/api/auth/logout", {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + win.getItem("token")
            }

        })
            .then((response) => response.json())
            .then((data) => {
                return data
            })
        return dados
    }



    return { PostLogin, PostRegisto, TrocarSenha, ActualizarPerfil, CriarPublicacao, Sair }
}