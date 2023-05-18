

export function AllPuts() {

    const win = window.sessionStorage;

    async function PutPublicacao({ id, titulo, categoria, long_descricao, imagem, shord_descricao }) {
        const sendData = {
            "title": titulo,
            "category_id": categoria,
            "long_description": long_descricao,
            "image": imagem,
            "short_description": shord_descricao,
        }
        let dados = fetch("http://127.0.0.1:8000/api/publicacoes/" + id + "/update", {
            method: 'PUT',
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



    return { PutPublicacao }
}