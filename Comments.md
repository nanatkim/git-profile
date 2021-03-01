## Comments

- [x] **Desenvolvimento mobile first:** estilizar a aplicação de forma apropriada de acordo com o tamanho da tela;
- [x] **Header:** um header similar ao do Github, com a logo, o nome da aplicação e um campo de busca;
- [x] **StarContext:** contexto reponsável por gerenciar a adição e remoção de estrelas adicionadas a um repositório, armazenando tais informações no localStorage;

### Homepage

Uma página similar à original do Github, com `nanatkim` como usuário e perfil padrão;

- [x] **ProfileData:** um component mostrando todos os dados relevantes de um usuário;

  - [x] **Map:** a ideia inicial era usar GoogleMaps pra renderizar o mapa, mas o Leaflet acabou sendo escolhido simplesmente por não precisar criar uma APIKey e por ser mais fácil de configurar;

    > Alguns usuários não definiram a localização no Github, portanto, optei por esconder o mapa nesses casos.

  - [x] **RepoCard:** um componente mostrando os dados de um repositório com estrela, permitindo redirecionar para a página Repo e adicionar estrela a um repositório;

### Repo

Uma página para a exibição de um único repositório que pode redirecionar para a página original do mesmo no Github;
