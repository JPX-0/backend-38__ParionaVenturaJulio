# Inicialización:

_Ejecutar este comando para poder comenzar a utulizar el codigo sin problemas._

```
npm i
```


# Ejecutar node o nodemon:

_Al ejecutar los comandos de la siguiente manera se estará usando el modo FORK que seria por defecto._

* [NODE] - El código se ejecutará en modo producción.
```
npm start
```

* [NODEMON] - El código se ejecutará modo escucha.
```
npm run watch
```

_Para cambiar el puerto, modo y/o compresion por defecto se puede ejecutar los comandos de la siguiente manera._

```
npm <ingresar "start" o "run watch"> -- -p <número del puerto> -m <ingresar "fork" o "cluster"> -c <boolean>
```


# Ejecutar pm2:

* [FORK] - El código se ejecutará en modo fork.
```
pm2 start src/index.js
```
* [CLUSTER] - El código se ejecutará en modo cluster.
```
pm2 start src/index.js -i max --name "cluster-server"
```

# Entrega de desafío:

_La respuesta a la consigna la encontrará en la siguiente ruta:_
> ubicación: "./desafio.md"
