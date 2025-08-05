let imgFundo;
function preload() {

  imgFundo = loadImage("campo.png");

}
function setup() {

  createCanvas(400, 400);

}

let xJogador = [0, 0, 0, 0];

let yJogador = [75, 150, 225, 300];

let jogador = ["🥕", "🐄", "🏭", "🛒"];

let teclas = ["a", "s", "d", "f"];

let quantidade = jogador.length;

let texto1 = ('oi')

function draw() {

  ativaJogo();

  desenhaJogadores();

  desenhaLinhaDeChegada();

  verificaVencedor();

  textoinicial();

}

function ativaJogo() {

  if (focused == true) {

    background("black");

  } else {
image(imgFundo, 0, 0, width, height);

    text(texto1, 40, 40);

  }

}
function desenhaJogadores() {

  textSize(40);

  for (let i = 0; i < quantidade; i++) {

    text(jogador[i], xJogador[i], yJogador[i]);

  }

}

function desenhaLinhaDeChegada() {

  fill("black");

  rect(350, 0, 10, 400);

  fill("#030225F");

  stroke("rgb(52,51,60)");

  for (let yAtual = 0; yAtual < 400; yAtual += 20) {

    rect(350, yAtual, 10, 10);

  }

}

function verificaVencedor() {

  for (let i = 0; i < quantidade; i++) {

    if (xJogador[i] > 350) {

      textStyle(BOLDITALIC);

      textSize(15);

      stroke("black")

      text(jogador[i] + " venceu!, o setor primário retira os recursos \ndireto da natureza, como o exemplo do \nemoji da cenoura e a vaca \nrepresentando o gado, agricultura e pecuária \nsão muito \nimportantes. Através do gado temos leite, \ncarne e couro. \no setor secundário transforma a matéria \nprima em produtos industrializados,\n por isso o emoji de fábrica,ela é \n importante porque gera emprego, produtos e etc. \no setor terciário é baseado no \nserviço de comérico, por isso o carrinho \n de compras, é importante porque assim faz \ncom que os \nprodutos cheguem nas pessoas e \nmovimenta a economia" ,30, 30);
      noLoop();

    }

  }

}

function keyReleased() {

  for (let i = 0; i < quantidade; i++) {

    if (key == teclas[i]) {

      xJogador[i] += random(20);

    }

  }

}

function textoinicial(){

  if(focused == false) {

    fill('white');

    textSize(30);
fill ('pink')
    text("clique na tela com o mouse para dar início ao jogo", 30, 200);

textSize(15)

    text('Para movimentar os emojis, são as teclas a, s, d, e f', 30, 230)

  }

}