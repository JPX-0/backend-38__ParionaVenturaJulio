# Consigna "DIVIDIR EN CAPAS NUESTRO PROYECTO":

* Dividir en capas el proyecto entregable con el que venimos trabajando (entregable clase 32: loggers y profilers), agrupando apropiadamente las capas de ruteo, controlador, lógica de negocio y persistencia.
  - Repositorio de referencia:
    > Repositorio: [Entregable clase 32](https://github.com/JPX-0/backend-32__ParionaVenturaJulio)
  - Capa de ruteo:
    > Ubicación: "./src/routers/"
  - Capa de controlador:
    > Ubicación: "./src/controllers/"
  - Capa de lógica de negocio:
    > Ubicación: "./src/api/"
  - Capa de persistencia:
    > Ubicación: "./src/models/"

  Considerar agrupar las rutas por funcionalidad, con sus controladores, lógica de negocio con los casos de uso, y capa de persistencia.
  La capa de persistencia contendrá los métodos necesarios para atender la interacción de la lógica de negocio con los propios datos.