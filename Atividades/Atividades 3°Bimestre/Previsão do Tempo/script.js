let chave = "9269f5af89716500f45f1993a91a1e37";

const clique = () => {


    let cidade = document.querySelector(".input-cidade").value

    if (!cidade === "") {
        alert("Digite o nome da cidade!");
    } else {
        alert("Procurando...");
        buscarCidade(cidade);
    }

}

//https://api.openweathermap.org/data/2.5/weather?q=   {city name}&appid={API key}

const buscarCidade = async (cidade) => {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )

        .then(res => res.json())

    console.log(dados);

    colocaNaTela(dados);



}

const colocaNaTela = (dados) => {
    document.querySelector(".nome-cidade").innerHTML = dados.name;
    document.querySelector(".nome-temp").innerHTML = dados.main.temp;
    document.querySelector(".nome-desc").innerHTML = dados.weather[0].description;
    document.querySelector(".nome-umid").innerHTML = dados.main.humidity + "%";
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
} 