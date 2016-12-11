# Seredempia

## Exemplo para testes de dados armazenados no Banco de Dados

Os arquivos presentes dento deste projeto dentro deste repositório tem como objetivo inicializar o serviço do banco de dados orientado a documentos MongoDB no computador do usuário, caso este ainda não tenha sido iniciado e então, caso o usuário deseje popular o banco de dados com informações que serão usadas pela Aplicação Seredempia.

## Ferramentas

* [MongoDB 3.2.9](https://www.mongodb.com/);

* [Atom 1.12.0](https://atom.io/).

## Funcionalidades

Este repositório possui duas utilidades, inicializar o serviço do MongoDB e o Popular:

*	Inicializar Serviço: Utiliza arquivos BATCH que verificam o estado do serviço MongoDB e, caso este esteja desligado, tenta liga-lo, usando necessariamente privilégios de administrador;

*	Popular MongoDB: Caso o serviço já esteja inicializado ou após sua inicialização será verificado se o usuário deseja popular o banco, caso deseje faze-lo será inserido então ao banco de dados 13 registros nas coleções:

  * Students – é apagado qualquer registro prévio existente nesta coleção e então são adicionados 10 estudantes, 5 para cada escola, contendo todas as 5 possíveis situações que um estudante pode possuir para ambas as escolas;

  *	Schools – é apagado qualquer registro prévio existente nesta coleção e então são adicionadas 2 escolas, possibilitando assim, a observação do comportamento da aplicação quando possui múltiplas escolas;

  * Transports – é apagado qualquer registro prévio existente nesta coleção e então é adicionado 1 transporte, possibilitando assim, a observação do comportamento da aplicação no que envolve a área de transporte.

## Instalação

Para a utilização deste projeto é necessario a instalação da ferramenta [MongoDB](https://www.mongodb.com/) como um serviço do sistema operacional. Para fazer tal processo é necessario fazer o [download](https://www.mongodb.com/download-center?jmp=docs&_ga=1.80617431.1930710430.1480714003#community) da ferramenta e seguir os passos indicados aqui para sua [instalação](https://docs.mongodb.com/v3.2/installation/).

## Inicialização

Para fazer a utilização deste projeto é necessario inicializa-lo. para fazer sua inicialização é necessário entrar na pasta do projeto e apartir do console do sistema operacional inserir o seguinte comando:

```bash
npm start
```
