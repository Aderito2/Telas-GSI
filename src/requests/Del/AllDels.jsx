

export function AllDels() {

    const win = window.sessionStorage;
    async function DelPublicacao(id) {
        console.log("Aqui " + id);
        let dados = fetch("http://127.0.0.1:8000/api/auth/publicacoes/" + id + "/delete", {
            method: 'DELETE',
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


    return { DelPublicacao }
}