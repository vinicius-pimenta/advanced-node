# Autenticação com Facebook

O login com o Facebook é feito no cliente (aplicativo ou site).
O cliente solicita "Login com Facebook", aquele botãozinho tradicional.
Depois que você solicita "Login com Facebook" será aberto a janelinha do Facebook.
Caso você logar corretamente, o Facebook vai te dar as permissões que você solicitou para ele.

O que é errado que o pessoal costuma fazer normalmente?
O Facebook já fornece as informações que você pediu (nome do usuário, e-mail, id do facebook).
Daí você envia para o backend essas informações e salva no banco de dados.
Você não pode confiar nas informações que vem do cliente para você persistir no banco, pois as requisições que vem do cliente para o servidor pode ser manipulada. Dessa forma, é possível descubrir como é que faço aquela requisição e mandar dados fake (id do facebook mentiroso ou e-mail de mentira). Se você confiar naqueles dados, o banco vai estar armazenando lixo, corrompendo-o.

Qual é a forma correta?
Então, toda vez que você faz essa operação com o cliente, além dos dados que você pediu, o facebook fornece o token de acesso que expira depois de um tempo. O correto é pegar esse token de acesso e enviar para o backend. No backend você pega esse token de acesso, junta com outro token do servidor que você solicita para o facebook. Com esse par de tokens você consegue se identificar com o facebook (eu sou a empresa x e quero os dados meu).

> ## Dados:
* Token de Acesso

> ## Fluxo primário
1. Obter dados (nome, email e Facebook ID) da API do Facebook
2. Consultar se existe um usuário com o e-mail recebido acima
3. Criar uma conta para o usuário com os dados recebidos do Facebook
4. Criar um token de acesso, a partir do ID do usuário, com expiração de 30 minutos
5. Retornar o token de acesso gerado

> ## Fluxo alternativo: Usuário já existe
3. Atualizar a conta do usuário com os dados recebidos do Facebook (Facebook ID e nome - só atualizar o nome caso a conta do usuário não possua nome)

> ## Fluxo de exceção: Token inválido ou expirado
1. Retornar um erro de autenticação
