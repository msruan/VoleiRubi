---
title: rubi
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.23"

---

# rubi

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer

# /jogador

## GET Listar jogadores

GET /jogador

> Response Examples

> 200 Response

```json
[
  {
    "id": "string",
    "nome": "string",
    "sexo": "string",
    "idade": "string",
    "nivel_habilidade": "string",
    "avatar": "string"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||ID|
|» nome|string|true|none||none|
|» sexo|string|true|none||none|
|» idade|string|true|none||none|
|» nivel_habilidade|string|true|none||none|
|» avatar|string|true|none||none|

## PATCH Editar jogador

PATCH /jogador/

> Body Parameters

```json
{
  "nome": "string",
  "sexo": "string",
  "idade": "string",
  "nivel_habilidade": "string",
  "avatar": "string",
  "email": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» nome|body|string| no |none|
|» sexo|body|string| no |none|
|» idade|body|string| no |none|
|» nivel_habilidade|body|string| no |none|
|» avatar|body|string| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# /local

## GET Listar locais

GET /local

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|ordenar_por|query|string| no |none|
|busca|query|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": "string",
    "nome": "string",
    "descricao": "string",
    "endereco": "string",
    "valor_hora": "string"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|*anonymous*|[[Local](#schemalocal)]|false|none||none|
|» id|string|true|none||ID|
|» nome|string|true|none||none|
|» descricao|string|true|none||none|
|» endereco|string|true|none||none|
|» valor_hora|string|true|none||none|

## POST Criar local

POST /local

> Body Parameters

```json
{
  "nome": "string",
  "descricao": "string",
  "endereco": "string",
  "valor_hora": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» nome|body|string| yes |none|
|» descricao|body|string| yes |none|
|» endereco|body|string| yes |none|
|» valor_hora|body|string| yes |none|

> Response Examples

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

## PATCH Editar local

PATCH /local/{id}

> Body Parameters

```json
{
  "nome": "string",
  "descricao": "string",
  "endereco": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» nome|body|string| no |none|
|» descricao|body|string| no |none|
|» endereco|body|string| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Detalhar local

GET /local/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": "string",
  "nome": "string",
  "descricao": "string",
  "endereco": "string",
  "valor_hora": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||ID|
|» nome|string|true|none||none|
|» descricao|string|true|none||none|
|» endereco|string|true|none||none|
|» valor_hora|string|true|none||none|

# /jogo

## GET Listar jogos

GET /jogo

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|categoria|query|string| no |group|
|status|query|string| no |status|
|data|query|string(date)| no |none|
|estou_participando|query|boolean| no |none|
|ordenar_por|query|string| no |none|
|busca|query|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": "string",
    "status": "string",
    "local": {
      "id": "string",
      "nome": "string",
      "descricao": "string",
      "endereco": "string",
      "valor_hora": "string"
    },
    "data": "2019-08-24T14:15:22Z",
    "categoria": {
      "id": "string",
      "nome": "string",
      "descricao": "string",
      "faixa_etaria": "string",
      "genero": "string",
      "nivel_habilidade": "string",
      "numero_jogadores": {
        "min": 0,
        "max": 0
      }
    },
    "anfitriao": {
      "nome": "string"
    },
    "acesso": "string",
    "quantidade_horas": 0
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||ID|
|» status|string|true|none||status|
|» local|[Local](#schemalocal)|true|none||none|
|»» id|string|true|none||ID|
|»» nome|string|true|none||none|
|»» descricao|string|true|none||none|
|»» endereco|string|true|none||none|
|»» valor_hora|string|true|none||none|
|» data|string(date-time)|true|none||Dia e horário da partida de vôlei|
|» categoria|[Categoria](#schemacategoria)|true|none||none|
|»» id|string|true|none||ID|
|»» nome|string|true|none||name|
|»» descricao|string|true|none||none|
|»» faixa_etaria|string|false|none||none|
|»» genero|string|false|none||none|
|»» nivel_habilidade|string|false|none||none|
|»» numero_jogadores|object|false|none||none|
|»»» min|number|true|none||none|
|»»» max|number|true|none||none|
|» anfitriao|object|true|none||Organizador da partida|
|»» nome|string|true|none||none|
|» acesso|string|true|none||Público ou privado|
|» quantidade_horas|number|true|none||none|

## POST Criar jogo

POST /jogo

> Body Parameters

```json
{
  "id_local": "string",
  "data": "2019-08-24T14:15:22Z",
  "id_categoria": "string",
  "quantidade_horas": 0,
  "acesso": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» id_local|body|string| yes |Local da partida de vôlei|
|» data|body|string(date-time)| yes |Dia e horário da partida de vôlei|
|» id_categoria|body|string| yes |none|
|» quantidade_horas|body|integer| yes |none|
|» acesso|body|string| yes |Público ou privado|

> Response Examples

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

## PATCH Editar jogo

PATCH /jogo/{id}

> Body Parameters

```json
{
  "id_local": "string",
  "data": "2019-08-24T14:15:22Z",
  "id_categoria": "string",
  "id_anfitriao": "string",
  "quantidade_horas": 0,
  "acesso": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» id_local|body|string| yes |Local da partida de vôlei|
|» data|body|string(date-time)| no |Dia e horário da partida de vôlei|
|» id_categoria|body|string| yes |none|
|» id_anfitriao|body|string| yes |Organizador da partida|
|» quantidade_horas|body|number| no |none|
|» acesso|body|string| yes |Público ou privado|

> Response Examples

> 200 Response

```json
{
  "id": "string",
  "status": "string",
  "jogadores": [
    {
      "id": "string",
      "nome": "string",
      "sexo": "string",
      "idade": "string",
      "nivel_habilidade": "string",
      "avatar": "string",
      "email": "string"
    }
  ],
  "id_local": "string",
  "data": "2019-08-24T14:15:22Z",
  "id_categoria": "string",
  "id_anfitriao": "string",
  "quantidade_horas": 0,
  "nota": 0,
  "acesso": "string"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||ID|
|» status|string|false|none||status|
|» jogadores|[[Jogador](#schemajogador)]|false|none|jogadores|Participantes da partida de vôlei|
|»» id|string|true|none||ID|
|»» nome|string|true|none||none|
|»» sexo|string|true|none||none|
|»» idade|string|true|none||none|
|»» nivel_habilidade|string|true|none||none|
|»» avatar|string|true|none||none|
|»» email|string|true|none||none|
|» id_local|string|true|none||Local da partida de vôlei|
|» data|string(date-time)|false|none||Dia e horário da partida de vôlei|
|» id_categoria|string|true|none||none|
|» id_anfitriao|string|true|none||Organizador da partida|
|» quantidade_horas|integer|true|none||none|
|» nota|number|true|none||Avaliação da partida|
|» acesso|string|true|none||Público ou privado|

## GET Detalhar jogo

GET /jogo/{id}

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{
  "id": "string",
  "status": "string",
  "jogadores": [
    {
      "id": "string",
      "nome": "string",
      "sexo": "string",
      "idade": "string",
      "nivel_habilidade": "string",
      "avatar": "string",
      "email": "string"
    }
  ],
  "local": {
    "id": "string",
    "nome": "string",
    "descricao": "string",
    "endereco": "string",
    "valor_hora": "string"
  },
  "data": "2019-08-24T14:15:22Z",
  "categoria": {
    "id": "string",
    "nome": "string",
    "descricao": "string",
    "faixa_etaria": "string",
    "genero": "string",
    "nivel_habilidade": "string",
    "numero_jogadores": {
      "min": 0,
      "max": 0
    }
  },
  "anfitriao": {
    "id": "string",
    "nome": "string"
  },
  "quantidade_horas": 0,
  "nota": 0,
  "avaliacoes": [
    {
      "id": "string",
      "nota": "string",
      "comentario": "string"
    }
  ]
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» id|string|true|none||ID|
|» status|string|true|none||status|
|» jogadores|[[Jogador](#schemajogador)]|false|none|jogadores|Participantes da partida de vôlei|
|»» id|string|true|none||ID|
|»» nome|string|true|none||none|
|»» sexo|string|true|none||none|
|»» idade|string|true|none||none|
|»» nivel_habilidade|string|true|none||none|
|»» avatar|string|true|none||none|
|»» email|string|true|none||none|
|» local|[Local](#schemalocal)|true|none||none|
|»» id|string|true|none||ID|
|»» nome|string|true|none||none|
|»» descricao|string|true|none||none|
|»» endereco|string|true|none||none|
|»» valor_hora|string|true|none||none|
|» data|string(date-time)|true|none||Dia e horário da partida de vôlei|
|» categoria|[Categoria](#schemacategoria)|true|none||none|
|»» id|string|true|none||ID|
|»» nome|string|true|none||name|
|»» descricao|string|true|none||none|
|»» faixa_etaria|string|false|none||none|
|»» genero|string|false|none||none|
|»» nivel_habilidade|string|false|none||none|
|»» numero_jogadores|object|false|none||none|
|»»» min|number|true|none||none|
|»»» max|number|true|none||none|
|» anfitriao|object|true|none||Organizador da partida|
|»» id|string|true|none||ID|
|»» nome|string|true|none||none|
|» quantidade_horas|number|true|none||none|
|» nota|number|true|none||none|
|» avaliacoes|[[Avaliacao](#schemaavaliacao)]|true|none||none|
|»» id|string|true|none||ID|
|»» nota|string|true|none||none|
|»» comentario|string|true|none||none|

## POST Cancelar jogo

POST /jogo/{id}/cancelar

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Convidar jogadores

POST /jogo/{id}/convidar

> Body Parameters

```json
{
  "id_jogadores": [
    "string"
  ]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» id_jogadores|body|[string]| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Desistir do jogo

POST /jogo/{id}/desistir

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Avaliar jogo

POST /jogo/{id}/avaliar

> Body Parameters

```json
{
  "nota": "string",
  "comentario": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» nota|body|string| yes |none|
|» comentario|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Ingressar jogo

POST /jogo/{id}/ingressar

> Body Parameters

```json
{
  "nome": "string",
  "sexo": "string",
  "idade": "string",
  "nivel_habilidade": "string",
  "avatar": "string",
  "email": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» nome|body|string| yes |none|
|» sexo|body|string| yes |none|
|» idade|body|string| yes |none|
|» nivel_habilidade|body|string| yes |none|
|» avatar|body|string| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# /categoria

## GET Listar categorias

GET /categoria

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|busca|query|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": "string",
    "nome": "string",
    "descricao": "string",
    "faixa_etaria": "string",
    "genero": "string",
    "nivel_habilidade": "string",
    "numero_jogadores": {
      "min": 0,
      "max": 0
    }
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|*anonymous*|[[Categoria](#schemacategoria)]|false|none||none|
|» id|string|true|none||ID|
|» nome|string|true|none||name|
|» descricao|string|true|none||none|
|» faixa_etaria|string|false|none||none|
|» genero|string|false|none||none|
|» nivel_habilidade|string|false|none||none|
|» numero_jogadores|object|false|none||none|
|»» min|number|true|none||none|
|»» max|number|true|none||none|

## POST Criar categoria

POST /categoria

> Body Parameters

```json
{
  "nome": "string",
  "descricao": "string",
  "faixa_etaria": "string",
  "genero": "string",
  "nivel_habilidade": "string",
  "numero_jogadores": {
    "min": 0,
    "max": 0
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» nome|body|string| yes |name|
|» descricao|body|string| yes |none|
|» faixa_etaria|body|string| no |none|
|» genero|body|string| no |none|
|» nivel_habilidade|body|string| no |none|
|» numero_jogadores|body|object| no |none|
|»» min|body|number| yes |none|
|»» max|body|number| yes |none|

> Response Examples

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

## PATCH Editar categoria

PATCH /categoria/{id}

> Body Parameters

```json
{
  "nome": "string",
  "descricao": "string",
  "faixa_etaria": "string",
  "genero": "string",
  "nivel_habilidade": "string",
  "numero_jogadores": {
    "min": 0,
    "max": 0
  }
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» nome|body|string| no |name|
|» descricao|body|string| no |none|
|» faixa_etaria|body|string| no |none|
|» genero|body|string| no |none|
|» nivel_habilidade|body|string| no |none|
|» numero_jogadores|body|object| no |none|
|»» min|body|number| no |none|
|»» max|body|number| no |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# /convite

## GET Obter convites

GET /convite

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|status|query|string| no |status|
|busca|query|string| no |none|

> Response Examples

> 200 Response

```json
[
  {
    "id": "string",
    "jogo": "string",
    "convidado": "string",
    "anfitriao": "string",
    "status": "string",
    "data": "2019-08-24T14:15:22Z"
  }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|*anonymous*|[[Convite](#schemaconvite)]|false|none||none|
|» id|string|true|none||ID|
|» jogo|string|true|none||none|
|» convidado|string|true|none||none|
|» anfitriao|string|true|none||none|
|» status|string|true|none||none|
|» data|string(date-time)|true|none||none|

## PATCH Responder convite

PATCH /convite/{id}

> Body Parameters

```json
{
  "status": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|id|path|string| yes |none|
|body|body|object| no |none|
|» status|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# /autenticacao

## POST Registrar jogador

POST /autenticacao/registrar/

> Body Parameters

```json
{
  "nome": "string",
  "sexo": "string",
  "idade": "string",
  "nivel_habilidade": "string",
  "avatar": "string",
  "email": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» nome|body|string| yes |none|
|» sexo|body|string| yes |none|
|» idade|body|string| yes |none|
|» nivel_habilidade|body|string| yes |none|
|» avatar|body|string| yes |none|
|» email|body|string| yes |none|

> Response Examples

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|Inline|

### Responses Data Schema

## POST Entrar

POST /autenticacao/entrar

> Body Parameters

```json
{
  "email": "string",
  "senha": "string"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» email|body|string| yes |none|
|» senha|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

<h2 id="tocS_Jogador">Jogador</h2>

<a id="schemajogador"></a>
<a id="schema_Jogador"></a>
<a id="tocSjogador"></a>
<a id="tocsjogador"></a>

```json
{
  "id": "string",
  "nome": "string",
  "sexo": "string",
  "idade": "string",
  "nivel_habilidade": "string",
  "avatar": "string",
  "email": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|nome|string|true|none||none|
|sexo|string|true|none||none|
|idade|string|true|none||none|
|nivel_habilidade|string|true|none||none|
|avatar|string|true|none||none|
|email|string|true|none||none|

<h2 id="tocS_Jogo">Jogo</h2>

<a id="schemajogo"></a>
<a id="schema_Jogo"></a>
<a id="tocSjogo"></a>
<a id="tocsjogo"></a>

```json
{
  "id": "string",
  "status": "string",
  "jogadores": [
    {
      "id": "string",
      "nome": "string",
      "sexo": "string",
      "idade": "string",
      "nivel_habilidade": "string",
      "avatar": "string",
      "email": "string"
    }
  ],
  "id_local": "string",
  "data": "2019-08-24T14:15:22Z",
  "id_categoria": "string",
  "id_anfitriao": "string",
  "quantidade_horas": 0,
  "nota": 0,
  "acesso": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|status|string|true|none||status|
|jogadores|[[Jogador](#schemajogador)]|false|none|jogadores|Participantes da partida de vôlei|
|id_local|string|true|none||Local da partida de vôlei|
|data|string(date-time)|true|none||Dia e horário da partida de vôlei|
|id_categoria|string|true|none||none|
|id_anfitriao|string|true|none||Organizador da partida|
|quantidade_horas|integer|true|none||none|
|nota|number|true|none||Avaliação da partida|
|acesso|string|true|none||Público ou privado|

<h2 id="tocS_Local">Local</h2>

<a id="schemalocal"></a>
<a id="schema_Local"></a>
<a id="tocSlocal"></a>
<a id="tocslocal"></a>

```json
{
  "id": "string",
  "nome": "string",
  "descricao": "string",
  "endereco": "string",
  "valor_hora": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|nome|string|true|none||none|
|descricao|string|true|none||none|
|endereco|string|true|none||none|
|valor_hora|string|true|none||none|

<h2 id="tocS_Categoria">Categoria</h2>

<a id="schemacategoria"></a>
<a id="schema_Categoria"></a>
<a id="tocScategoria"></a>
<a id="tocscategoria"></a>

```json
{
  "id": "string",
  "nome": "string",
  "descricao": "string",
  "faixa_etaria": "string",
  "genero": "string",
  "nivel_habilidade": "string",
  "numero_jogadores": {
    "min": 0,
    "max": 0
  }
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|nome|string|true|none||name|
|descricao|string|true|none||none|
|faixa_etaria|string|false|none||none|
|genero|string|false|none||none|
|nivel_habilidade|string|false|none||none|
|numero_jogadores|object|false|none||none|
|» min|number|true|none||none|
|» max|number|true|none||none|

<h2 id="tocS_Convite">Convite</h2>

<a id="schemaconvite"></a>
<a id="schema_Convite"></a>
<a id="tocSconvite"></a>
<a id="tocsconvite"></a>

```json
{
  "id": "string",
  "jogo": "string",
  "convidado": "string",
  "anfitriao": "string",
  "status": "string",
  "data": "2019-08-24T14:15:22Z"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|jogo|string|true|none||none|
|convidado|string|true|none||none|
|anfitriao|string|true|none||none|
|status|string|true|none||none|
|data|string(date-time)|true|none||none|

<h2 id="tocS_Avaliacao">Avaliacao</h2>

<a id="schemaavaliacao"></a>
<a id="schema_Avaliacao"></a>
<a id="tocSavaliacao"></a>
<a id="tocsavaliacao"></a>

```json
{
  "id": "string",
  "nota": "string",
  "comentario": "string"
}

```

### Attribute

|Name|Type|Required|Restrictions|Title|Description|
|---|---|---|---|---|---|
|id|string|true|none||ID|
|nota|string|true|none||none|
|comentario|string|true|none||none|
