Desafio:

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como 
proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada 
em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de 
dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

</p>

<p>&lt;h1&gt;Full Cycle Rocks!&lt;/h1&gt;</p>

<p> 

</p>

<p>- Lista de nomes cadastrada no banco de dados.</p>

<p> 

# #########################################

- bd
    -  mysql -u root -p nodedb  
    - CREATE TABLE people(id int(4) AUTO_INCREMENT, name varchar(50), PRIMARY KEY (id));

# #########################################

- para executar
    - executar em linha de comando:
        - docker-compose up
    - no brownser:
        http://0.0.0.0:8080/

    


