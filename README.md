# Fundamentos de Node.js

## Express

[Express.js](http://expressjs.com/) é uma framework para aplicativos da web que fornece um conjunto robusto de recursos para aplicativos web e móvel. Busca ser rápida, flexível e minimalista.

### APIs

Express torna fácil a criação de APIs robustas, pois disponibiliza utilitários HTTP e middleware.

## Nodemon

[Nodemon](https://nodemon.io/) é uma _utility_ que monitora mudanças no diretório raiz de um projeto e cuida da reinicialização automática de um servidor, o que é perfeito para desenvolvimento de aplicativos da web com Express.js. A troca de `node index.js` por `nodemon index.js` permite essa automatização a partir de qualquer mudança no código.

### Instalação

Nodemon é um pacote excelente para desenvolvimento, então podemos optar por instalá-la como uma dependência de desenvolvimento (`-D` or `--save-dev` flag). Isso fará dela uma dependência desnecessária em produção, ou seja, uma instalação de produção (`npm install --production`) a ignoraria.

```bash
npm i -D nodemon
```

- [npm dependencies and devDependencies](https://nodejs.dev/learn/npm-dependencies-and-devdependencies)
