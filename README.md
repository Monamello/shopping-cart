# shopping-cart

Esse projeto tem como objetivo criar um serviço para manipular um carrinho de compras;

Nesta aplicação é possivel:
 - Adicionar produtos em um carrinho;
 - Atualizar os itens no carrinho de compras;
 - Deletar o carrinho;
 - Listar todos os carrinhos;


 # Instruções para instalar e configurar;
 Para instalar o projeto e rodar localmente:

* Clonar o projeto:

    ```
    git clone https://github.com/Monamello/shopping-cart
    ```
* Instalar dependências:
    ```
    yarn install
    ```
* Configurar o ambiente:
    ```
    criar um banco postgres com as credenciais registradas no arquivo database.js
    ```
* Rodar as migrações:
    ```
    yarn sequelize-cli db:migrate
    ```
* Rodar o projeto:
    ```
    yarn start
    ```
# Ambiente de trabalho
## Tecnologias
 - Esse projeto foi desenvolvido com NodeJS com Sequelize, Express e outras ferramentas para manipulação do código;
 - O banco é Postgres, que para conectar com o projeto foi necessário usar os packages pg e pg-hstore;

# Rotas
Após rodar o projeto é disponibilizado um conjuto de rotas e para navegar entre elas:

### Cart:

* GET "/carts"
     - Nessa requisição é retornado uma listagem de carrinhos;


* POST "/carts"
     - Nessa requisição é feita a criação de um carrinho, ou seja, adição de uma lista de produtos no carrinho;


* PUT "/carts"
     - Nessa requisição é feita a edição do carrinho e dos itens do carrinho;


* DELETE "/carts"
     - Nessa requisição é possivel deletar o carrinho;

## Postman prontinho:
Caso queira testar as rotas tenho aqui um postman com todas as rotas configuradas,
o arquivo está na raiz do projeto e chama: Shopping Cart.postman_collection.json;

Para rodar:
 - abra o postman
 - clique em import
 - selecione este arquivo Shopping Cart.postman_collection.json
