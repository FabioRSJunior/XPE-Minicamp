# XP

HTML – principais tags
• <h1> a <h6> 🡪 títulos.
• <p> 🡪 parágrafos.
• <div> 🡪 divisões blocantes (quebra de linha).
• <span> 🡪 divisões não blocantes.
• <img> 🡪 definição de imagens.
• <table> <thead> <tbody> <tr> <td> 🡪 definição de tabelas, linhas e colunas.
• <ul> <ol> e <li> 🡪 listas e itens de lista.
• <strong> e <em> 🡪 ênfase no texto.
• <a> 🡪 âncoras (links).
• <input> 🡪 entrada de texto.
• <button> 🡪 botão.
• <img /> 🡪 imagens.

**Capítulo 1. Introdução**

1.1. Introdução

1.2. Componentes de um computador

1.3. CPU e Memória RAM

1.4. Introdução a Programação

1.5. Introdução ao JavaScript

/1.2. Componentes de um computador

Placa mãe → Responsável por unir todos os componentes permitindo a comunicação entre eles. 

Processador → Cérebro do computador, realiza cálculos operações.

Memoria RAM → Memoria principal, trabalha junto com o processador.

Memoria Secundaria HD, SSD → Mais lenta que a memoria RAM, mas tem alta capacidade de armazenamento.

Placa de video → Responsável por renderizar o vídeo 

Dispositivo de entrada → teclado, mouse, microfone, webcan 

Dispositivo de Saida → impressora, monitor, saida de audio. 

**CPU**
• Central Processing Unit. 
• Trabalha em conjunto com a memória RAM.
• Executa instruções que estiverem na memória RAM.
• Controla os demais componentes do computador.
• Exemplo: tecla digitada no teclado é enviada para a CPU
(input), que por sua vez informa a interface de vídeo que deve
exibir aquela caractere (output).
• Entrada -> Processamento -> Saída.

**Memória Principal (RAM)**
• Acessada diretamente pelo processador.
• CPU utiliza a RAM para armazenar e executar programas.
• É uma memória volátil (Quando desligado perde todos os dados):

**Memória Secundária**
• Memória de massa (permanente).
• Alta capacidade de armazenamento, mais barata que a primária.
• São muito mais lentos que a memória principal.
• Processador não trabalha com eles diretamente.
• Inviável de ser utilizado em conjunto com o processador.

**Bits e Bytes**
• Sistema decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
• Sistema binário: 0, 1:
• Bit: 0 ou 1.
• Byte: grupo de 8 bits.
• KB (kilobyte): 1.024 bytes. (2^10)
• MB (megabyte): 1.024 kb.
• GB (gigabyte): 1.024 mb.
• Bytes são usados para representar caracteres:
• Letra A: 01000001.
• Letra B: 01000010.

## 1.4. Introdução a Programação

**O que é um programa de computador?**
• Um programa é uma sequência de passos definidos por um programador para alcançar um objetivo.
• Cada passo pode ser chamado de uma instrução.
• Exemplo de programa: Word.
• Software (PROGRAMA) vs Hardware (MAQUINA).

**O que é uma linguagem de programação?**
• Computador só entende bits (0 e 1).
• Para representar letras, números, símbolos, etc., utilizamos
um conjunto de 8 bits, chamado byte.
• a: 01100001.
• Seria inviável programar dessa forma.
• Com uma linguagem de programação e um compilador essa tarefa é facilitada.

**O que são algoritmos?**
• Um algoritmo é uma sequência de passos que devem ser
executados para atingir determinado objetivo. Exemplo: receita de bolo.
• Um algoritmo não necessariamente é um programa de computador, ele pode ser executado por uma pessoa.
• Uma mesma tarefa pode ser realizada por diferentes algoritmos. (Diferentes formas de somar).

## 1.5. Introdução ao JavaScript

O que é JavaScript
• É uma linguagem de programação criada em 1995.
• É uma das mais populares da atualidade.
• Apesar do nome, não tem relação com a linguagem de programação Java.
• Inicialmente foi criada para ser utilizada dentro dos navegadores.
• Recentemente ela também vem sendo adotada fora dos navegadores.

![Untitled](XP%20d3aaeb1397074e5fb744b9c02090d0fe/Untitled.png)

HTML → Linguagem de marcação e não de programação, ele dá estrutura a página. 

# M2 -  Explorando as ferramentas

2 – Explorando as Ferramentas Minicamp de Programação Básica

**Aula 2.1. Google Chrome**

F12 ou inspecionar → Abre o console 

**Aula 2.2. Visual Studio Code**

Instalar o programa 

**Aula 2.3. Hello World!**

file → new text file → salvar arquivo (ctrl + s) → salva como: index.html 

index.html = nome.extensão 

```html
<html>
    <h1> Olá eu sou Fabio, veja o console! </h1>
    <script>
        console.log("Hello world, eu sou Fabio!");
    </script>
</html>
```

F5 - Atualiza o chrome 

Abra seu arquivo INDEX.HTML com o chrome 

## M3  - Variáveis, operadores e funções

Aula 3.1. Variáveis

Variáveis
• Local que podemos armazenar um valor.
• Fica armazenada na memória RAM.
• Um algoritmo pode ter diversas variáveis.
• Permite que o valor seja alterado.
• As variáveis podem ter tipos diferentes.
• Texto, número etc

• Cada variável tem um identificador (nome) para que possamos utilizá-la no código

**Aula 3.2. Tipos de variáveis**

Variáveis
• **string:** Representado entre aspas duplas ou simples: “Teste de Caractere” ou ‘Teste de Caractere’.
• **number:** Inteiro: 100 ; Número com casas decimais: 100.95.
• **boolean:** true ou false.

Aula 3.2.1. Prática - Tipo de variáveis

```html
<html>
    <h1> Tipos de Variaveis, veja o console! </h1>
    <script>

        //string 
        var modelo = "Gol" ;
        var marca =  'VW'  ;

        //number 
        var ano = 2010 ;
        var preco = 29000.99 ;

        //boolean 
        var ipvaPago = true ;
        var seguroPago = false ;

        console.log(modelo);
        console.log(marca);
        console.log(ano);
        console.log(preco);
        console.log(ipvaPago);
        console.log(seguroPago);
    </script>
</html>
```

3.3 Operadores

• Soma: +
• Subtração: -
• Multiplicação: *
• Divisão: /
• Resto: %
• Precedência: ( )
• 10 + 80 / 8 + 2 = 22
• (10 + 80) / (8 + 2) = 9
• Incremento: i = i + 1 ou i++ 
• Decremento: i = i - 1 ou i - - 

**Aula 3.3.1. Prática - Operadores**

```html
<html>
    <h1> Tipos de operadores, veja o console! </h1>
    <script>

        var soma = 2 + 2 ;
        var subtracao = 2 - 2; 
        var Multiplicação = 2 * 2;
        var Divisão =  2 / 2;
        var Resto =  5 % 5 ;
        var precedencia = (1+2) * 3
        var potencia = 2 ** 3

        var incremento = 1;
        incremento = incremento + 1;

        var decremento = 2;
        decremento = decremento - 1; 

        console.log(soma);
        console.log(subtracao);
        console.log(Multiplicação);
        console.log(Divisão);
        console.log(Resto);
        console.log(precedencia);
        console.log(potencia);
        console.log(incremento);        
        console.log(decremento);        
    </script>
</html>
```

Funções
• Subprograma dentro do programa principal.
• Auxilia a realização de tarefas.
• Precisa ser chamado para que tenha seu código executado.
• Desvio provisório no fluxo de execução.
• Podemos chamar o mesmo subprograma várias vezes.

Podem receber parâmetros.
• Podem ou não retornar valores.
• Enxergam variáveis criadas no programa principal (variáveis
globais).
• Podem criar variáveis locais.

**Aula 3.4.1. Prática - Funções**

```html
<html>
    <h1>Funções, observe o console</h1>
    <script>

        function calculoMediaNotas(notaA, notaB, notaC, notaD) {
            var media = (notaA + notaB + notaC + notaD) / 4
            return media
        }

        function escreveMeuNome(){
            return "Meu nome é Fabio!"
        }

        console.log(calculoMediaNotas(10,10,10,10))
        console.log(escreveMeuNome())

    </script>
</html>
```

Estruturas de decisão

Também chamadas de estruturas condicionais.
• Desviar o fluxo de execução do algoritmo de acordo com
determinadas condições.
• Programador deve especificar uma ou mais condições a serem
testadas pelo algoritmo.
• É possível encadear estruturas de decisão

Operadores de comparação
• Igual a:
• 3 = 3
• Menor que:
• 5 < 7
• Maior que:
• 7 > 2
• Menor ou igual a:
• 4 <= 5
• Maior ou igual a:
• 6 >= 6
• Diferente:
• 7 <> 4 ou 7 ! = 4 

```html
<html>
    <script>
        var a = 30;
        var b = 0;

        if (a > b) { console.log("A é maior que B") }
            else if (a < b)  { 
                console.log("A não é maior") 
            }
                else {
                    console.log("A é igual a B")
                }

        console.log("O codigo continua executando")
        

        // Maior igual, menor igual
        var c = 40
        var d = 40

        if( c >= d){
        console.log("C é maior ou igual a D")
        }

        if( c <= d){
        console.log("C é menor ou igual a D")
        }

        // == é um compador de valor, 
        // === é um comparador de valor e tipo 
        var f = 10
        var g = 10 
        var h = "10"

        if ( f == g ){
            console.log("F é igual a G")
        }

        if ( f === g ){
            console.log("F é igual (===) a G")
        }

        if ( f === h ){
            console.log("F é igual (===) a H")
        }else {console.log("F é NÃO igual (===) a H")}

        if  (f != g){
            console.log("F é diferente de G")
        }

    </script>
</html>
```

Aula 4.1.2. Prática - Estruturas de decisão

```html
<html>
    <script>
        // SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO, DIVISÃO, RESTO, PORCENTAGEM
        function calculo(operacao, num1, num2){
            var retorno 

            if(operacao == "+")
            {
                retorno = num1 + num2
            }
            
            if(operacao == "-")
            {
                retorno = num1 - num2
            }

            if(operacao == "*")
            {
                retorno = num1 * num2
            }

            if(operacao == "/")
             if (num2 == 0){retorno = "Operação invalida"} 
             else{ 
             retorno = num1 / num2
             }

             if(operacao == "%")
            {
                retorno = num1 % num2
            }

            if(operacao == "%%")
            {
                retorno = ((num1 * num2) / 100 ) + "%"
            }

             return retorno
        }

        console.log(calculo("+",1,1))
        console.log(calculo("-",1,1))

        console.log(calculo("*",1,1))
        console.log(calculo("/",1,1))
        console.log(calculo("/",1,0))

        console.log(calculo("%",1,1))
        console.log(calculo("%%",20,30))
        
    </script>
</html>
```

**Aula 4.1.3. Prática - Estruturas de decisão**

Calculo de IMC 

```html
<html>
    <script>
        // imc = peso /(altura * altura)
        function imc(peso,altura){
            var valorimc = peso /(altura * altura) 
            var classificacao

            if (valorimc >= 40)
            {
                classificacao = "Obsidade grau III ou Mórbida"
            }
            else if(valorimc >= 35){
                classificacao = "Obsidade grau II"
            } 
            else if (valorimc >= 30){
                classificacao = "Obsidade grau I"
            }
            else if (valorimc >=25){
                classificacao = "Sobrepeso"
            }
            else if (valorimc >= 18.5){
                classificacao = "Peso normal"
            }
            else{
            //else if(valorimc < 18.5){
                classificacao = "Abaixo do peso"
            }

            return classificacao

        }
        console.log(imc(50,1.70))
        console.log(imc(55,1.70))
        console.log(imc(60,1.70))
        console.log(imc(65,1.70))
        console.log(imc(70,1.70))
        console.log(imc(75,1.70))
        console.log(imc(80,1.70))
        console.log(imc(85,1.70))
        console.log(imc(100,1.70))
        console.log(imc(110,1.70))
        console.log(imc(120,1.70))
        console.log(imc(150,1.70))

    </script>
</html>
```

**Aula 4.2. Lógica booleana**

Lógica booleana
• Também chamada de álgebra booleana.
• Representar a lógica em expressões.
• Valores lógicos: VERDADEIRO ou FALSO.
• Operadores E, OU e NÃO.

AND (&&)
• Retorna verdadeiro somente se os dois lados da expressão
forem verdadeiros:
• (A > B) && (C > D).

OR
• Retorna verdadeiro se pelo menos um dos lados da expressão
forem verdadeiros:
• (A > B) || (C > D).

NOT
• Inverte o resultado da expressão:
• if (!A){ }

Pratica de logica Booleana 

```html
<html>
    <script>
        var hojefezcalor = false
        var ontemfezcalor = true

        // ONTEM E HOJE FEZ CALOR? 
        if ( hojefezcalor && ontemfezcalor )
        { console.log("Ontem e hoje fizeram calor")}
        else {console.log("Ontem e hoje NÃO fizeram calor")}

        if ( hojefezcalor || ontemfezcalor )
        { console.log("Ontem OU hoje fizeram calor")}
        else {console.log("Não fez calor dia algum")}

        if ( !hojefezcalor )
        { console.log("Hoje NÃO fez calor")}

    </script>
</html>
```

**Aula 5.1. Listas**

- Também chamada de vetores ou arrays.
• Utilizada para armazenar diversas informações de um mesmo
tipo.
• Exemplo: armazenar nomes dos alunos de uma escola. Seria
inviável criar uma variável para cada.
• Elementos acessados a partir do índice.

```html
<html>
    <script>
        var carros = ["gol","palio","uno",1]
        console.log(carros)

        //Acessando elementos:
        
        var primeirocarro = carros[0] 
        console.log("primeiro carro:" + primeirocarro )

        // tamanho do array 
        console.log(carros.length);

        // Acessando ultima posição do array 
        console.log(carros[carros.length -1 ])

        //inserindo novos dados 
        carros[4] = "Sandero"
        console.log(carros)

        //inserindo sem saber o indice 
        carros[carros.length] = "gol bolinha"
        console.log(carros)

        carros.push("Polo")
        console.log(carros)

        //removendo o ultimo elemento da lista
        console.log(carros.pop())

        //Inserindo no inicio da lista 
        carros.unshift("jetta")
        console.log(carros)

        //removendo o primeiro elemento da lista
        console.log(carros.shift())
        console.log(carros)

    </script>
</html>
```

5.2. Estruturas de repetição

Estruturas de repetição
• Utilizadas para executar uma ação várias vezes.
• Definir quando aquela repetição deve encerrar a execução.
• Muito utilizada em conjunto com os vetores, para que possa
realizar uma ação em todos os elementos.
• While e For.

**Aula 5.2.1. Prática - Estruturas de repetição - WHILE**

Crie uma condição de parada para evitar loops infinitos 

```html
<html>
    <script>
        var nomes = ["fabio","maria","jao","fernando"]

        var aux = nomes.length
        var i = 0
        
        while (i < aux) {
        console.log(nomes[i])
        i ++
        }

    </script>
</html>
```

**Aula 5.2.2. Prática - Estruturas de repetição - FOR**

inicialização, teste ou condição de parada, incremento

```html
<html>
    <script>
         var nomes = ["fabio","maria","jao","fernando"]

         for(var i= 0 ; i < nomes.length ; i++){
            console.log(nomes[i])
            console.log(i)
         }

         // Funciona igual, não esquece de incrementar o I 
         // Aumenta a flexibilidade 

         for(var i= 0 ; i < nomes.length ; ){
            console.log(nomes[i])
            console.log(i)
            i++
         }
    </script>
</html>
```

**Aula 5.2.3. Prática - Estruturas de repetição - Ordem inversa** 

```html
<html>
    <script>

        // Crie uma função que recebe uma palavra como parametro e retona 
        //esta palavra invertida 

        function inverte(palavra){
        
            var inversa = "";
            for( var i = palavra.length-1 ; i > -1 ; i--){
                inversa = inversa + palavra[i] 
            }
            return inversa
        }

        console.log(inverte("123456"))
        console.log(inverte("Fabio"))

        function invertewhile(palavra){
            var inversa = ""
            aux = palavra.length-1

            while(aux > -1){
                inversa = inversa + palavra[aux] 
                aux--
            }

            return inversa
        }

        console.log("WHILE:")
        console.log(invertewhile("123456"))
        console.log(invertewhile("Fabio"))

    </script>
</html>
```

**Aula 5.2.4. Prática - Estruturas de repetição - Break** 

```html
<html>
    <script>
        // Crie uma função para verificar se um numero se encotra em uma lista 

        function buscaNumero(numero){
        var lista = [1,2,3,4,5,6,7,8,9,10,13]
        var aux = true

        for(var i = 0; i < lista.length ; i ++){
            
            if (lista[i] == numero){
                return ("O numero " + numero + "  esta na lista na posicao:" + i )
                aux = false
                break
            }
        }

        if(aux == true){
            return "O numero: "+ numero +" nao esta na lista"
        }
        
        }

        console.log(buscaNumero(1))
        console.log(buscaNumero(10))
        console.log(buscaNumero(12))
        console.log(buscaNumero(13))
        
    </script>
</html>
```

# M2 - Introdução à programação web

HTML
• Hyper Text Markup Language
• Linguagem de marcação para hipertexto.
• Hipertexto: conteúdo dinâmico (links).
• Encontra-se atualmente na versão 5.
• HTML não pode ser considerada uma linguagem de
programação!
• Excelente fonte de documentação:
[https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

Permite a definição declarativa de elementos.
• É utilizada para compor semanticamente uma página Web.
• É constituída por elementos.
• Elementos são delimitados por tags.
• A grande maioria das tags possuem conteúdo.
• Além disso, as tags podem possuir atributos.
• Os atributos possuem valores.

HTML – principais tags
• <h1> a <h6> 🡪 títulos.
• <p> 🡪 parágrafos.
• <div> 🡪 divisões blocantes (quebra de linha).
• <span> 🡪 divisões não blocantes.
• <img> 🡪 definição de imagens.
• <table> <thead> <tbody> <tr> <td> <th> 🡪 definição de tabelas, linhas e colunas.
• <ul> <ol> e <li> 🡪 listas e itens de lista.
• <strong> e <em> 🡪 ênfase no texto.
• <a> 🡪 âncoras (links).
• <input> 🡪 entrada de texto.
• <button> 🡪 botão.

**Aula 1.3. Projeto Base**

Crie a seguinte estrutura de arquivos: 

![Untitled](XP%20d3aaeb1397074e5fb744b9c02090d0fe/Untitled%201.png)

No arquivo index.html:

! + TAB 

**Aula 1.4.1. Conceitos de HTML - parte 1**

![Untitled](XP%20d3aaeb1397074e5fb744b9c02090d0fe/Untitled%202.png)

Netfliy Drop 

- Solução simples para deploy (Implementação)
- basta arrastar a pasta com os arquivos HTML, CSS e javascript
- Será criada uma URl para divulgação

## CSS

CSS
• Cascading Style Sheets.
• Folhas de estilo em cascata.
• Tecnologia para o layout das aplicações web.
• Foco no conteúdo visual.
• Utilizam os atributos class e id.
• Excelente fonte de documentação:
[https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

CSS
• Seletores de **classe** são precedidos pelo símbolo de pontuação “."
• Seletores de ***id*** são precedidos pelo símbolo de hashtag “#"

![Untitled](XP%20d3aaeb1397074e5fb744b9c02090d0fe/Untitled%203.png)

CSS – principais propriedades
• margin 🡪 margem externa.
• padding 🡪 margem interna.
• border 🡪 borda.
• display 🡪 posicionamento de elementos.
• font-size 🡪 tamanho de fonte.
• font-family 🡪 tipo de fonte.
• background-color 🡪 cor de fundo.
• color 🡪 cor do texto.
• cursor 🡪 tipo de cursor do mouse.
• list-style-type 🡪 tipo de estilo de listas <ul></ul> <il></il>

• width 🡪 largura.
• height 🡪 altura.

Conclusão:
• CSS é uma linguagem de estilização.
• Utilizada para a definição de estilos e layout na web.
• Foco em aspecto visual.
• Composta de seletores, propriedades e valores

**Aula 2.2. Criação de currículo com HTML e CSS - versão 2**

### Capítulo 3 - DOM

**Aula 3.1. Introdução ao DOM**

DOM
• Document Object Model.
• Modelo de Objeto de Documento.
• Estrutura hierárquica de conteúdo HTML.
• É possível manipular o DOM e CSS com JavaScript.
• Excelente fonte de documentação:
[https://developer.mozilla.org/pt-BR/docs/Web/API/Document_](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_)
Object_Model

![Untitled](XP%20d3aaeb1397074e5fb744b9c02090d0fe/Untitled%204.png)

JavaScript – principais comandos
para manipular o DOM
• document.querySelector 🡪 seletor de um único elemento (tag, class, id).
• document.qurerySelectorAll 🡪 seletor de n elementos.
• document.createElement 🡪 criação de elementos.
• appendChild 🡪 inserção de filhos.
• addEventListener 🡪 inclusão de um “escutador” de evento (quando).
• classList.add 🡪 inclusão de classe CSS.
• classList.remove 🡪 exclusão de classe CSS.

É possível manipular o DOM e CSS com JavaScript.
• Isso permite que os apps web sejam mais dinâmicos e
interativos.

## Capitulo 4 - localStorage

LocalStorage
• Funcionalidade para armazenamento de dados nos
navegadores.
• Simples e, portanto, limitada.
• Armazena conteúdo no formato de string.
• Os dados podem ser excluídos pelo navegador ou usuário.
• Excelente fonte de documentação:
[https://developer.mozilla.org/pt-BR/docs/Web/API/Window/lo](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/lo)
calStorage

Principais comandos
relacionados ao LocalStorage
• window.localStorage.getItem(key) 🡪 recupera dados relacionados à key
• window.localStorage.setItem(key) 🡪 define dados relacionados à key.
• JSON.parse(string) 🡪 Transforma string em JSON. Muito usado com getItem.
• JSON.stringify(objeto) 🡪 Transforma JSON em string. Muito usado com setItem.

LocalStorage é uma das possibilidades de armazenamento de
dados em aplicações web.
• É simples e também limitado.
• Recomendado para dados não sensíveis e também cuja perda
não implica em problemas com a aplicação.

## Aula 5.1. Introdução ao Netlify Drop

Netlify Drop

• Uma solução simples para deploy (implantação) de aplicações web.
• Acesso: [https://app.netlify.com/drop](https://app.netlify.com/drop)
• Basta arrastar a pasta com os arquivos HTML, CSS e JavaScript.
• Será criada uma URL aleatória de acesso à aplicação.
• Com cadastro é possível modificar a URL.

O Netlify Drop é uma das soluções simples e sem custo para implantação (deploy) de aplicações Web.