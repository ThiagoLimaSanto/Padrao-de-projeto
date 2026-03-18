# Padrões de projeto com TypeScript
 

# Singleton - Creational (Criação)

## Intenção

*Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.*

---

## Destilando a intenção

O Singleton é um padrão de projeto que tem a intenção de resolver dois problemas em uma aplicação:  

- **Garantir que uma classe tenha somente uma instância no programa** - isso é muito comum para programas que acessam recursos compartilhados, como bases de dados, sistemas de arquivos, interfaces gráficas, spoolers de impressão, módulos de um programa e mais.
- **Fornecer um ponto de acesso global para a mesma** - isso deixa o singleton muito parecido com variáveis globais, porque temos um único objeto, com acesso global, sendo usado por várias partes da aplicação.

Apesar de ser um dos padrões mais usados na atualidade, requer conhecimento e cuidado ao utilizá-lo. Um programador pode facilmente criar um Singleton que gera problemas de concorrência em um programa.

Note que o Singleton tem duas responsabilidades e isso quebra a regra do SRP (Single Responsibility Principle).

Em entrevista, anos após a criação do livro, Erich Gamma (um dos autores), mencionou seu interesse em remover o Singleton se fossem reescrever o livro na atualidade. Segundo ele, o uso de singleton quase sempre é sinal de problemas de design. (https://bit.ly/nosingleton) 

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o singleton quando:

- Use o singleton quando uma classe precisa ter somente uma instância disponível em todo o seu programa;
- Use o singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação.

## Implementação - Teoria

Isso pode mudar de linguagem para linguagem, em Python seria de uma maneira, em JavaScript de outra e em linguagens com tipagem estática, como TypeScript, de outra. Mas o senso comum sobre singletons é o seguinte:

- Declarar um campo privado na classe para armazenar a instância do Singleton.
- Declarar um método público (getter) para obter a instância do Singleton;
- Na chamada do método público, adicione *lazy instantiation*, ou seja, verifique se uma instância do Singleton já foi criada; se foi, retorne-a, se não crie uma nova instância e retorne-a.
- Não permita que novas instâncias da classe. Você pode atingir facilmente este objetivo fazendo o construtor da classe privado.

## Consequências

O que é bom ou ruim nos Singletons:

**Bom:**
- Acesso controlado por encapsulamento à instância única;
- É possível permitir um número variável de instâncias (pode soar estranho, mas é possível criar um Singleton que permite n instâncias de uma classe);
- É possível usar thead lock para garantir que duas partes do código não alterem o singleton simultaneamente;
- Usa *lazy instantiation*, ou seja, o Singleton só será instanciado no momento do uso;

**Ruim:**
- É mais difícil de testar;
- Viola o princípio da responsabilidade única;
- Requer tratamento especial em casos de concorrência;

---

# Builder - Creational (Criação)

## Intenção

*Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.*

---

## Destilando a intenção

---

## Implementação

Veja o código dessa mesma pasta.

## Estrutura

Veja a pasta diagramas nessa mesma pasta.

## Aplicabilidade

Use o Builder quando:

- Use o Builder quando a criação do objeto se torna complexa
- Use o Builder quando quiser que o código seja capaz de gerar diferentes representações do mesmo objeto

## Consequências

O que é bom ou ruim no Builder:

**Bom:**
- Separa criação de utilização de objetos
- O cliente não precisa criar objetos diretamente
- O mesmo código pode construir objetos diferentes
- Ajuda na aplicação dos princípios SRP e OCP

**Ruim:**

- O código final pode se tornar muito complexo

---

# Prototype - Creational (Criação)

## Intenção

_Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo._

---

## Estrutura

Veja a pasta diagramas nessa mesma pasta.

## Aplicabilidade

Use o Prototype quando:

- precisar que seu código não dependa de classes concretas para a criação de novos objetos
- quiser evitar explosão de subclasses para objetos muito similares
- quiser evitar a recriação de objetos "caros" ou "complexos"

## Consequências

O que é bom ou ruim no Prototype:

**Bom:**

- Oculta classes concretas do código cliente
- Ajuda na criação de objetos caros ou complexos
- Evita a explosão de subclasses

**Ruim:**

- Clonar objetos que que tem referências para outros objetos pode ser super complexo

---

# Factory Method - Creational (Criação)

## Intenção

*Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.*

---

## Aplicabilidade

- Use o factory method quando não souber com certeza quais os tipos de objetos o seu código vai precisar
- Use o factory method para permitir a extensão de suas factories para criação de novos objetos (isso ajuda a aplicar o Open/Closed Principle)
- Use o factory method para desacoplar o código que cria do código que usa as classes (Single Responsibility Principle)
- Use o factory method para dar um hook (gancho) às subclasses para permitir que elas decidam a lógica de criação de objetos
- Use o factory method para eliminar duplicação de código na criação de objetos

## Implementação - Teoria

Observação importante: todos os objetos criados por um factory method tendem a ser chamados de "Product" (produto)

1. Crie uma interface em comum para todos os produtos (por exemplo, Product)
2. Crie classes que implementam a interface dos produtos (por exemplo, ConcreteProduct1, ConcreteProduct2...)
3. Crie uma classe (Creator) que implementa ou contem o método fábrica (factory method). Essa classe pode conter dados e outros métodos. São raros os casos onde a classe Creator é simplesmente uma interface com o factory method. O método fábrica é responsável por criar produtos que implementam a interface "Product".
4. Crie classes concretas que estendem a classe Creator e implementam o método fábrica. As classes ConcreteCreator podem retornar produtos diferentes, contando que esses produtos implementem a interface Product.

## Consequências

O que é bom ou ruim no Factory Method:

**Bom:**
- Ajuda a aplicar o Open/Closed Principle. Seu código vai estar aberto para extensão
- Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria do código que usa o objeto
- Ajuda no desacoplamento do seu código

**Ruim:**
- Pode causar uma explosão de subclasses. Será necessário uma classe Creator para cada ConcreteProduct. Só é vantajoso quando já seria necessário estender a classe Creator na estrutura

---

# Abstract Factory - Creational (Criação)

## Intenção

*Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.*

---

## Sobre o Abstract Factory


O Abstract Factory é usado para garantir que uma família de produtos relacionados ou dependentes trabalhem sempre juntos (*veja aplicabilidade para mais casos de uso*).

Por exemplo: imagine que está criando um sistema de interfaces gráficas que deva funcionar em Linux, Windows e Mac. É natural termos várias classes representando elementos como Janela, Botão, Input e assim por diante. Também é natural usarmos composição entre os elementos, já que um botão pode estar dentro de uma janela ou formulário (não é um requisito para o padrão, mas pode acontecer). Além disso, os sistemas operacionais também precisam de implementações diferentes das classes de interface gráfica.

Nesse caso teríamos famílias de classes de elementos gráficos separadas por grupos de sistemas operacionais (Windows, Linux, Mac, e assim por diante). Deixe-me especificar isso usando nomes de classes e talvez você entenda melhor meu ponto de vista:

- Nomes de classes para Windows:
  - UIWindows
  - ButtonWindows
  - InputWindows
  - ...
- Nomes de classes para Linux:
  - UILinux
  - ButtonLinux
  - InputLinux
  - ...
- Nomes de classes para Mac:
  - UIMac
  - ButtonMac
  - InputMac
  - ...

O Abstract Factory ajuda a garantir que classes de mesma família trabalhem sempre juntas. Você não quer que classes `ButtonWindows` se misturem com `UILinux`, não é? Por isso focamos em família de objetos relacionados ou dependentes.

No meu exemplo, poderíamos ter uma fábrica abstrata (`UIFactory`) com os métodos abstratos `createUI`, `createButton` e `createInput`. Agora podemos implementar fábricas concretas que estendem `UIFactory` e implementam esses métodos, seriam elas: `UIWindowsFactory`, `UILinuxFactory` e `UIMacFactory`. Cada fábrica concreta fica responsável pode retornar objetos da sua própria família.

Imagine essa hierarquia descrita assim (se preferir diagramas, veja a pasta diagramas):

- `UIFactory` (fábrica abstrata)
  - `UIWindowsFactory` (fábrica concreta):
    - `createUI(): UI` -> `UIWindows`
    - `createButton(): Button` -> `ButtonWindows`
    - `createInput(): Input` -> `InputWindows`
    - ...
  - `UILinuxFactory` (fábrica concreta):
    - `createUI(): UI` -> `UILinux`
    - `createButton(): Button` -> `ButtonLinux`
    - `createInput(): Input` -> `InputLinux`
    - ...
  - `UIMacFactory` (fábrica concreta):
    - `createUI(): UI` -> `UIMac`
    - `createButton(): Button` -> `ButtonMac`
    - `createInput(): Input` -> `InputMac`
    - ...

A única coisa que também precisamos, mas que eu não mencionei até aqui é uma interface em comum para todos os produtos finais. Todos os produtos devem seguir a mesma interface.

No meu exemplo as interfaces de produtos seriam: `UI`, `Button` e `Input` (mencionei isso com *`: Interface`* logo após a assinatura dos métodos no exemplo acima).

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o padrão Abstract Factory quando:

- um sistema deve ser independente de como seus produtos são criados, compostos ou representados
- um sistema deve ser configurado como um produto de família de múltiplos produtos
- uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
- você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações

## Implementação - Teoria

Observação importante: objetos criados por um fábricas tendem a ser chamados de "Product" (produto). Veja os diagramas na pasta "diagramas" para melhor entendimento.

1. **Crie uma interface em comum para todas as factories concretas:** essa interface define métodos que retornam famílias de produtos diferentes em um nível mais abstrato. Esses produtos podem colaborar entre si caso necessário. Esses métodos devem ser implementados por todas as fábricas concretas.
2. **Crie fábricas concretas:** essas fábricas implementam os métodos da fábrica abstrata e retornam os produtos concretos. A assinatura dos métodos nas fábricas concretas retornam a mesma família da fábrica abstrata, porém o retorno são produtos concretos que implementam a interface da família de produtos retornados pela fábrica abstrata.
3. **Crie interfaces correspondentes para cada família de produto:** essas interfaces definem os tipos dos objetos a serem retornados pela fábrica abstrata. Essas interfaces são os retornos dos métodos fábrica na fábrica abstrata.
4. **Crie os produtos concretos:** crie os produtos concretos que implementam as interfaces de produtos. Note que produtos de interfaces diferentes podem colaborar entre si por composição. Esses produtos são os retornos dos métodos fábrica nas fábricas concretas.

## Consequências

O que é bom ou ruim no Abstract Factory:

**Bom:**
- Os produtos sempre serão compatíveis entre si
- Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos
- Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

**Ruim:**
- Muitas classes e maior complexidade será introduzida no código

---

# Composite - Structural (Estrutural)

## Intenção

*Compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.*

*Observação:* **partes** são objetos que formam a estrutura (as partes da estrutura); **todo** é a estrutura inteira que é formada por várias partes.

---

## Sobre o Composite


O composite é um padrão de projeto que permite ao cliente tratar um único objeto ou uma estrutura formada de vários objetos aninhados hierarquicamente da mesma maneira.

Na vida real lidamos com o padrão composite o tempo todo. Por exemplo, pense em produtos que podem ser comprados por unidade ou em caixas (como leite, cerveja, refrigerante e outros). Você pode ir ao supermercado e comprar um único produto. Ele vai contar com um código de barras. No entanto, você também pode comprar uma caixa do mesmo produto. Ela também vai contar com um código de barras da mesma maneira.

Perceba que o supermercado trata uma estrutura inteira de objetos (a caixa de produtos) como um único objeto com código de barras e preço. Porém, se o cliente quiser, também pode obter um único produto de dentro da caixa e realizar a compra da mesmíssima maneira que fizemos com a caixa. Ambos, a caixa e o produto possuem seus próprios códigos de barra.

O padrão Composite é exatamente isso: podemos tratar um único objeto ou uma estrutura de objetos da mesma maneira. Conseguimos isso através um uma interface em comum entre objetos compostos (caixa) e objetos folha (produtos).

---

## Estrutura

Veja a pasta diagramas.

## Aplicabilidade

Use o padrão Composite quando:

- sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore
- você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira

## Implementação - Teoria

**Observação:** veja o código e os diagramas nessa mesma pasta, eles detalham melhor a implementação do padrão composite.

1. **Crie uma interface em comum para objetos compostos e objetos simples (`Component`):** pode ser uma classe abstrata ou uma interface, contando que os métodos façam sentido em ambos os objetos. Defina um ou mais métodos que funcionam de maneira polimórfica em objetos compostos e objetos simples. Quando esse método for chamado em um objeto composto, ele delegará a tarefa para seus filhos; quando chamado em objetos simples, eles não tem para onde delegar, então realizam a ação requisitada
2. **Crie objetos folha (`Leaf`) que implementam a interface `Component`:** são os objetos da ponta da estrutura, geralmente são os objetos que realmente fazem o trabalho real (como descrito acima)
3. **Crie objetos compostos (`Composite`):** são objetos que têm filhos. Esses filhos podem ser outros objetos compostos (`Composite`) ou objetos folha (`Leaf`). O trabalho desses objetos é delegar o trabalho para seus filhos. Objetos compostos devem ter um container que sustenta seus filhos (pode ser um vetor, uma tabela de dispersão, um dicionário ou qualquer outra estrutura de dados). Além disso, eles também têm métodos para adicionar e remover novos filhos.

## Consequências

O que é bom ou ruim no Composite:

**Bom:**
- É muito fácil criar objetos complexos por composição
- É fácil gerar uma hierarquia de objetos
- É fácil usar polimorfismo e recursão
- É fácil adicionar novos tipos de elementos na estrutura (OCP)

**Ruim:**
- Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada
