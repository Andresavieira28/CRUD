# Documentação

## Componente React Form

O **Componente React Form** é utilizado para criar ou editar informações de um usuário.  
Ele utiliza várias bibliotecas, incluindo:

- **axios**: Para fazer requisições HTTP.
- **react-toastify**: Para exibir notificações.
- **styled-components**: Para estilização.
- **useRef** e **useEffect** do React: Para manipulação de referências e efeitos colaterais.

### Bibliotecas e funcionalidades usadas:

- **axios**: Biblioteca para fazer requisições HTTP.
- **React, useEffect, useRef**: Importações do React para criar componentes e hooks.
- **styled-components**: Biblioteca para estilização de componentes.
- **toast**: Função para exibir notificações.
- **FormContainer**: Estiliza o formulário principal.
- **InputArea**: Estiliza a área de cada campo de entrada.
- **Input**: Estiliza os campos de entrada.
- **Label**: Estiliza os rótulos dos campos.
- **Button**: Estiliza o botão de submissão.
- **useRef**: Cria uma referência para o formulário.
- **useEffect**: Atualiza os campos do formulário se `onEdit` estiver definido.

## Função `handleSubmit`

A função **handleSubmit** lida com a submissão do formulário. Suas responsabilidades incluem:

1. **Verificar** se todos os campos estão preenchidos.
2. **Fazer uma requisição HTTP** (PUT ou POST) dependendo se `onEdit` está definido.
3. **Limpar os campos** do formulário após a submissão.

### Estrutura do Formulário

O formulário contém os seguintes campos de entrada:

- Nome
- E-mail
- Telefone
- Data de contratação
- Cargo
- Gerente
- Salário
- Botão de submissão

Este componente é utilizado para **criar ou editar informações de um usuário**, enviando os dados para um servidor backend e exibindo notificações de sucesso ou erro.
