# Exemplo-Ambiente-para-API-MongoDB
 Este repositório é para começar uma api em mongoDB. Para não presisar fazer tudo do zero é só pegar este projeto e dar continuidade com tudo configurado

## Atenção
- para funcionar presisa do arquivo ".env"
```json
PORT=3000
MONGO_URI="url do seu database mongo"
```
- O eslint já vem configurado. Caso queria remover tire das dependencias do package.json éssas linhas:

```json
    "@eslint/js": "^9.3.0",
    "eslint": "^9.3.0",
```
- tambem remova o arquivo "eslint.config.mjs"
