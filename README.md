# Laravel Teste
Para conseguir executar o projeto será necessário realizar algumas alterações.

Primeiramente no back-end será necessário configurar as variáveis de ambiente (.env) para conectar com o banco de dados. O projeto foi desenvolvido utilizando MySQL e segue um exemplo de configuração, ou se prefirir é possível encontrar mais detalhes no arquivo .env.example:

* DB_CONNECTION=mysql
* DB_HOST=127.0.0.1
* DB_PORT=3306
* DB_DATABASE=laravel-test
* DB_USERNAME=root
* DB_PASSWORD=root

### Necessário rodar o 'composer install' para baixar todas as dependências do projeto e posteriormente os comandos:
* 'php artisan migrate' - para gerar as tabelas no banco de dados
* 'php artisan db:seed' - para gerar alguns dados iniciais de teste

Por fim, é necessário rodar a api: 'php artisan serve'.

Se tudo estiver correto, poderá acessar o back-end via 'localhost/' na porta escolhida.

<div/>

Para rodar o Front-end também será necessário adicionar as várivas de ambiente (.env) fazendo o relacionamento da api com o front-end. Segue exemplo do .env, ou se prefirir é possível encontrar mais detalhes no arquivo .env.example:
REACT_APP_API_BASE_URL=http://localhost:8000

Logo, basta rodar o comando 'npm i' dentro da pasta /Laravel-Test/front-end para baixar todo o necessário
do projeto React e ao finalizar rodar 'npm start' para iniciar o projeto.

## Com o front-end rodando o projeto será este:
![image](https://github.com/user-attachments/assets/b196e849-0f52-4b89-b45a-199d192df3c2)
![image](https://github.com/user-attachments/assets/ddc7b0db-5b93-4e54-b140-eb1a85a5be4b)
![image](https://github.com/user-attachments/assets/cc1f979e-12e7-4748-81cc-d0452e47f536)





