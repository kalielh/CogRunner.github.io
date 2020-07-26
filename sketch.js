var cenario=0,modo=0,selecao=126,status=1,velocidade=5;
var opcao=1,tela=0,pontuacao=0,multi=1,pulo=300;
let img,img2,img3,img4,img5,img6,img7;
function preload(){
  img = loadImage('img/cenario.png');
  img2= loadImage('img/idle_0.png');
  img3= loadImage('img/papiro (2).jpg');
  img4= loadImage('img/escolha.png');
  img6= loadImage('img/gabi2.png');
  img7= loadImage('img/kaliel2.jpg');

} 
function setup(){
  createCanvas(550, 380);
}
function Cenar(){
  image(img,cenario,0)
  //cenario=cenario-velocidade;
  if(cenario<-1000){
   cenario=0;
   velocidade=velocidade+5;
   multi=multi+2;
  }
}
function keyPressed(){
  if(status==1){
    if(key=="ArrowUp" && selecao>126){
      selecao=selecao-60;
      opcao--;
    }
    if(key=="ArrowDown" && selecao<=300){   
      selecao=selecao+60;
      opcao++;
    }
    if(key=="Enter"){
      tela=opcao;
    }
    if(key=="Escape"){
      tela=0;
    }
  }
  if(status==2){
    if(key=="Enter"){
      tela=0;
    }
    if(key=="Escape"){
      tela=0;
    }
  }
  if(status==3){
  }
  if(status==4){
    if(key=="Enter"){
      tela=0;
      pontuacao=0;
      velocidade=5;
      multi=1;
    }
  }
}
function mousePressed(){
  if(status==1){
    if(opcao==1 && mouseY>130 && mouseY<155 && mouseX<260 && mouseX>90){
     tela=opcao
    }
    if(opcao==2 && mouseY>185 && mouseY<220 && mouseX<260 && mouseX>90){
      tela=opcao
    }
    if(opcao==3 && mouseY>250 && mouseY<275 && mouseX<260 && mouseX>90){
      tela=opcao
    }
    if(opcao==4 && mouseY>305 && mouseY<330 && mouseX<260 && mouseX>90){
      tela=opcao
    }
  }
  if(status==2){
    if(mouseY>285 && mouseY<305 && mouseX<180 && mouseX>60){
      tela=0;
    }
  }
  if(status==4){
    if(mouseY>235 && mouseY<260 && mouseX<320 && mouseX>160){
      tela=0;
      pontuacao=0;
      velocidade=5;
      multi=1;
    }
  }
}
function MenuPrincipal(){
  status=1;
  image(img4,60,selecao)
  textSize(60);
  text('CogRunner',125,70);
  textSize(30);
  text('Jogar',100,155);
  text('Instruções',100,215);
  text('Sobre',100,275);
  text('Creditos',100,335);
  if(mouseY>130 && mouseY<155 && mouseX<260 && mouseX>90){
      selecao = 126;
      opcao=1;
  }
  if(mouseY>185 && mouseY<220 && mouseX<260 && mouseX>90){
      selecao = 186;
      opcao = 2;    
  }
  if(mouseY>250 && mouseY<275 && mouseX<260 && mouseX>90){
      selecao = 246;
      opcao = 3;
    
  }
  if(mouseY>305 && mouseY<330 && mouseX<260 && mouseX>90){
      selecao = 306;
      opcao = 4;
  }
}
function Jogar(){
  status=3;
  Cenar();
  Jogador();
  //Contador();
}
function Jogador(){
  image(img2,0,pulo);
}
function Contador(){
  pontuacao=pontuacao+multi;
  textSize(20);
  text('Pontuação:'+pontuacao,10,25);
  if(pontuacao>=1000){
    GameOver();
  }
  
}
function Instrucoes(){
  status=2;
  textSize(60);
  text('CogRunner',125,70);
  textSize(20);
  text('Instruções:',100,130);
  textSize(15); 
  text('O jogo está sendo desenvolvido para alunos do 6º que cursam\ningles, quando devidamente finalizado o jogo sera capaz de\nexercitar de maneira didatica os o conhecimento adquirido sobre\ncognatos do inglês e português.(contemplam as habilidades\nEF06LI18,EF06LI26 e EF06LI08)',100,150);
  image(img4,60,280)
  textSize(30);
  text('Voltar',100,310);
}
function Sobre(){
status=2;
  textSize(60);
  text('CogRunner',125,70);
  textSize(20);
  text('Sobre o jogo:',100,130);
  textSize(15); 
  text('O jogo está sendo desenvolvido para alunos do 6º que cursam\ningles, quando devidamente finalizado o jogo sera capaz de\nexercitar de maneira didatica os o conhecimento adquirido sobre\ncognatos do inglês e português.(contemplam as habilidades\nEF06LI18,EF06LI26 e EF06LI08)',100,150);
  image(img4,60,280)
  textSize(30);
  text('Voltar',100,310);
}
function Creditos(){
  status=2;
  textSize(60);
  text('CogRunner',125,70);
  textSize(20);
  image(img7,100,115);
  text('Nome: kaliel',90,238);
  text('Função: programador',90,265);
  image(img6,340,115);
  text('Nome: Gabriela',330,238);
  text('Função: Educadora',330,265);
  image(img4,60,280)
  textSize(30);
  text('Voltar',100,310);
}
function GameOver(){
  status=4;
  image(img3,-75,-60)
  textSize(60);
  text('Game Over',120,150);
  textSize(30);
  text('Pontuação',200,190);
  text(''+pontuacao,235,220);
  if(pontuacao>=0){
    pontuacao=pontuacao-multi;
  }
  cenario=0;
  image(img4,165,234)
  textSize(30);
  text('Reiniciar',200,260);
}
function draw(){
  image(img3,-75,-60); 
  textStyle(ITALIC);
  if(tela==0){
    MenuPrincipal(); 
  }
  if(tela==1){
    Jogar();
  }
  if(tela==2){
    Instrucoes();
  }
  if(tela==3){
    Sobre();
  }
  if(tela==4){
    Creditos();
  }
}