Documentação

Componente React Form:

É utilizado para criar ou editar informações de um usuário. 
Ele utiliza várias bibliotecas, incluindo axios para fazer requisições HTTP, react-toastify para exibir notificações, styled-components para estilização 
e useRef e useEffect do React para manipulação de referências e efeitos colaterais.

axios: Biblioteca para fazer requisições HTTP.
React, useEffect, useRef: Importações do React para criar componentes e hooks.
styled-components: Biblioteca para estilização de componentes.
toast: Função para exibir notificações.
FormContainer: Estiliza o formulário principal.
InputArea: Estiliza a área de cada campo de entrada.
Input: Estiliza os campos de entrada.
Label: Estiliza os rótulos dos campos.
Button: Estiliza o botão de submissão.
useRef: Cria uma referência para o formulário.
useEffect: Atualiza os campos do formulário se onEdit estiver definido.

Função handleSubmit
Função que lida com a submissão do formulário. Verifica se todos os campos estão preenchidos, faz uma requisição PUT ou POST dependendo se onEdit está definido,
e limpa os campos do formulário após a submissão. Renderiza o formulário com campos de entrada para nome, e-mail, telefone, data de contratação, cargo, gerente e salário, além de um botão de submissão.
Este componente é utilizado para criar ou editar informações de um usuário, enviando os dados para um servidor backend e exibindo notificações de sucesso ou erro.
