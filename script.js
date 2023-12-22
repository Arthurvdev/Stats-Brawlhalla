const key = "C2KZNXSHOPILAEPYOVH6"

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      botão()
    }
  });

function PreencherDados(dados, id, ranked){

    var legend = dados[0].best_legend
    document.querySelector(".melhor-legend-titulo").innerHTML = "Seu melhor legend: "
    document.querySelector(".nome").innerHTML = dados[0].name
    document.querySelector(".nome-titulo-estilo").innerHTML = "--" + dados[0].name + "--"

    document.querySelector(".ranked-titulo").innerHTML = "Ranqueada: "
    document.querySelector(".ranking-brz").innerHTML = "Ranking BRZ: " + dados[0].rank
    document.querySelector(".elo-atual").innerHTML = "<span>Elo atual: </span>" + dados[0].rating
    document.querySelector(".melhor-elo").innerHTML = "<span>Melhor elo: </span>" + dados[0].peak_rating
    document.querySelector(".tier").innerHTML = "<span>Tier: </span>" + dados[0].tier

    document.querySelector(".partidas-titulo").innerHTML = "Partidas: "
    document.querySelector(".partidas").innerHTML = "<span>Partidas: </span>" + dados[0].games
    document.querySelector(".vitórias").innerHTML = "<span>Vitórias: </span>" + dados[0].wins
    document.querySelector(".região").innerHTML = "<span>Região: </span>" + dados[0].region
    document.querySelector(".img-legend").src = `https://brawlmance.com/img/legends/${dados[0].best_legend}.png`

    document.querySelector(".clan-titulo").innerHTML = "Clan: "
    document.querySelector(".nome-clan").innerHTML = "<span>Nome do clan atual: </span>" + id.clan.clan_name
    document.querySelector(".clan-xp").innerHTML = "<span>XP Total do clan: </span>" + id.clan.clan_xp
    document.querySelector(".xp-pessoal").innerHTML = "<span>XP Pessoal acumulado no clan: </span>" + id.clan.personal_xp

    document.querySelector(".status-titulo").innerHTML = "Estatísticas da conta: "
    document.querySelector(".level").innerHTML = "<span>Level da conta: </span>" + id.level
    document.querySelector(".xp-conta").innerHTML = "<span>XP total da conta: </span>" + id.xp

    document.querySelector(".dano-bomba").innerHTML = "<span>Dano total com Bomba: </span>" + id.damagebomb
    document.querySelector(".ko-bomba").innerHTML = "<span>K.O. Com bomba: </span>" + id.kobomb
    document.querySelector(".dano-mina-terrestre").innerHTML = "<span>Dano total com Mina terrestre: </span>" + id.damagemine
    document.querySelector(".ko-mine").innerHTML = "<span>K.O. com Minha terrestre: </span>" + id.komine
    document.querySelector(".dano-bola-espinhos").innerHTML = "<span>Dano total com Bola de espinhos: </span>" + id.damagespikeball
    document.querySelector(".ko-bola-espinhos").innerHTML = "<span>K.O. com Bola de Espinhos : </span>" + id.kospikeball
    document.querySelector(".dano-sidekick").innerHTML = "<span>Dano com Sidekick: </span>" + id.damagesidekick
    document.querySelector(".ko-sidekick").innerHTML = "<span>K.O. com Sidekick: </span>" + id.kosidekick
    document.querySelector(".hits-bola-de-neve").innerHTML = "<span>Hits com bola de neve: </span>" + id.hitsnowball
    document.querySelector(".ko-bola-de-neve").innerHTML = "<span>K.O. com bola de neve: </span>" + id.kosnowball
}

async function buscarjogador(Nickname){
    const dados = await fetch(`https://api.brawlhalla.com/rankings/1v1/brz/1?name=${Nickname}&api_key=C2KZNXSHOPILAEPYOVH6`).then(Response => Response.json())
    const id_jogador = dados[0].brawlhalla_id
    const id = await fetch(`https://api.brawlhalla.com/player/${id_jogador}/stats?api_key=C2KZNXSHOPILAEPYOVH6`).then(Response2 => Response2.json())
    const ranked = await fetch(`https://api.brawlhalla.com/player/${id_jogador}/ranked?api_key=C2KZNXSHOPILAEPYOVH6`).then(Response2 => Response2.json())
    console.log(dados, id, ranked)
    PreencherDados(dados, id, ranked)
}

function botão(){
    const Nickname = document.querySelector(".input-barra").value
    console.log(Nickname)
    buscarjogador(Nickname)
}