# Amigo Secreto

Este projeto é uma aplicação simples de "Amigo Secreto" que permite aos usuários adicionar nomes à lista de participantes, visualizar a lista e sortear aleatoriamente um amigo secreto.

## Estrutura do Projeto

O projeto está dividido em três arquivos principais:

1. **index.html**: Estrutura do HTML com os elementos da interface.
2. **style.css**: (Opcional) Arquivo de estilos para personalização do design.
3. **app.js**: Lógica em JavaScript para manipulação da lista de amigos e sorteio.

---

## Funcionalidades

### 1. Adicionar Amigo
- O usuário pode digitar o nome de um amigo no campo de entrada.
- Após clicar no botão "Adicionar", o nome será validado e adicionado a uma lista exibida na tela.
- Caso o campo esteja vazio, uma mensagem de alerta será exibida.

### 2. Exibir Lista de Amigos
- Os nomes adicionados são exibidos dinamicamente em uma lista ordenada na tela.

### 3. Sortear Amigo
- Um amigo é escolhido aleatoriamente da lista ao clicar no botão "Sortear amigo".
- O nome sorteado será exibido na tela.
- Caso a lista esteja vazia, uma mensagem de alerta será exibida.

---

## Como Usar

### 1. Clonar o Repositório
```bash
https://github.com/seu-usuario/amigo-secreto.git
```

### 2. Estrutura de Arquivos
Certifique-se de que os seguintes arquivos estão organizados:

```
amigo-secreto/
├── index.html
├── style.css
├── app.js
├── assets/
    └── amigo-secreto.png
    └── play_circle_outline.png
```

### 3. Abrir o Arquivo HTML
- Abra o arquivo `index.html` em qualquer navegador.
- Interaja com a aplicação utilizando os botões da interface.

---

## Detalhes Técnicos

### HTML
- Contém a estrutura principal da aplicação.
- Inclui um campo de entrada, botões e áreas dinâmicas para exibição da lista de amigos e do resultado do sorteio.

### JavaScript (app.js)
- **Validação de entrada**: Garante que o nome não seja adicionado se o campo estiver vazio.
- **Atualização dinâmica**: Manipula os elementos DOM para atualizar a lista e o resultado do sorteio.
- **Funções principais**:
  - `adicionarAmigo()`: Adiciona um nome à lista após validação.
  - `atualizarLista()`: Atualiza a exibição da lista de amigos.
  - `sortearAmigo()`: Sorteia um amigo aleatoriamente da lista.

---

## Melhorias Futuras
- Adicionar animações para o sorteio.
- Implementar persistência de dados com localStorage.
- Estilizar o design utilizando o arquivo `style.css`.
- Suporte para remoção de amigos da lista.

---

## Contribuições
Sinta-se à vontade para contribuir com o projeto abrindo issues ou pull requests no repositório oficial.

## Desafios:
O principal desafio que tive ao fazer esse projeto foi formatar a lista de amigos em 'li', não consegui fazer o projeto até buscar algumas funções que poderiam me ajudar,
tirando isso eu achei um projeto simples devido ao que ja tinha estudado anteriormente.

