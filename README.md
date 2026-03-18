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
