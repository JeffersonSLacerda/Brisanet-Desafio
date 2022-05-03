# Brisanet-Desafio

## Requisitos

- [] Entidade de Usuário (Id[UUID], Name, Cell, Email, CreatedAt, UpadtedAt)

  - [] Criação
  - [] Listagem
  - [] Atualização
  - [] Deleção

- [] Entidade de ChavePix (Id[UUID], Value[CPF or email or Cell or Random Key], UserId[Owner], CreatedAt, UpadtedAt)

  - [] Criação
  - [] Listagem
  - [] Atualização
  - [] Deleção

- [] Entidade de Transações (Id[UUID], Value[R$], IdUserSend[UUID], IdUserRecives[UUID], CreatedAt, UpadtedAt)

  - [] Criação
  - [] Listagem [por usuário]
  - [] Deleção

## Regras de negócio

- [] Uma chave só poderá ser cadastrada uma única vez
- [] Cada usuário só poderar ter no máximo 3 chaves PIX

## Atividades complemenares

- [] Adicionar o diagrama de Entidade-Relacionamento
- [] Testes automatizados
  - [] Testes unitários
  - [] Testes de integração
- [] Documentação - Swagger
