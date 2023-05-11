**1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto).**
*Se debe utilizar el comando ng new ecommerce.*

**Con Angular Cli crea el proyecto angular ecommerce y explica brevemente la estructura y ficheros que ha generado Angular CLI:**
- Ficheros de configuración en la raíz del proyecto:
	- tsconfing.app.json: *Contiene la configuración TypeScript de los ficheros de la app.*
	- angular.json: *Contiene la configuración de Angular. Además, incluye rutas, versiones, etc.*
	- package.json: *Es la configuración de nuestra aplicación. Contiene el nombre de la app, las dependencias necesarias para su correcta ejecución y muchas otras cosas.*
	- .editorconfig: *Es la configuración de nuestro editor de código.*
	- .gitignore: *Son las carpetas o archivos que debe ignorar el git cuando lo añadamos al repositorio.*
	- tsconfig.json: *Contiene la configuración genérica de TypeScript.*
	- tsconfig.spec.json: *Contiene la configuración de TypeScript para los tests de aplicación.*
	- README.md: *Aquí podemos añadir información sobre la aplicación. Este archivo es leído por GIT y los muestra en el repositorio.*
- Directorio node_modules: *Es la carpeta que contiene todas las dependencias de nuestro proyecto.*
- Directorio src: *Es el directorio donde trabajaremos nuestros módulos. Además, es el más importante, ya que contiene todo el código.*
	- index.html: *Es el archivo de la página principal del proyecto.*
	- main.ts: *Es el archivo Type Script inicial del proyecto donde podrás configurar todas las configuraciones globales del proyecto.*
	- styles.css: *Es el archivo donde se pueden agregar estilos globales a este archivo y también importar otros archivos de estilo*
	- test.ts: *Es un punto de entrada para ejecutar todos los archivos spec.ts.*
	- polyfills.ts: *Angular se basa en los últimos estándares de la plataforma web. Dirigirse a una gama tan amplia de navegadores es un desafío porque no son compatibles con todas las funciones de los navegadores modernos. Lo compensas cargando scripts de polyfill ("polyfills") para los navegadores que debes admitir.*
	- Directorio environments: *Donde se encuentra las configuraciones y variables de entorno para poner el proyecto tanto en desarrollo como en producción.*
	- Directorio assets: *Contendrá todos los asset y archivos adicionales para hacer que el proyecto funcione.*
	- Directorio app: *Aquí se encuentra la carpeta app donde se ubica toda la implementación de los componentes principales, junto a su template html y archivos de estilos css.*
		- Ficheros app.component.*: *Un componente controla un parche de la pantalla llamado vista. Los ficheros app.component consisten en una clase de TypeScript, una plantilla HTML y una hoja de estilo CSS. La clase TypeScript define la interacción de la plantilla HTML y la estructura DOM representada, mientras que la hoja de estilo describe su apariencia.*
		- Fichero app.module.ts: *Le dice a Angular sobre otros módulos Angular específicos, todas ellas clases decoradas con @NgModule, que la aplicación necesita para funcionar correctamente.*

**2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:**
- app.module.ts - @NgModule (declarations, imports, providers, bootstrap).:
  - declarations: *Son para hacer que las directivas (incluidos los componentes y las pipes) del módulo actual estén disponibles para otras directivas en el módulo actual. Los selectores de directivas, componentes o conductos solo se comparan con el HTML si se declaran o importan.*
  - imports: *Hace que las declaraciones exportadas de otros módulos estén disponibles en el módulo actual*
  - providers: *Son para dar a conocer los servicios y valores a DI (inyección de dependencia). Se añaden al ámbito raíz y se inyectan a otros servicios o directivas que los tengan como dependencia.*
  - bootstrap: *El componente raíz que Angular crea e inserta en la página web del host index.html.*
- app.component.ts - @Component (selector, templateUrl, styleUrls).
  - selector: *El selector de CSS que identifica esta directiva en una plantilla y activa la instanciación de la directiva.*
  - templateUrl: *La ruta relativa o URL absoluta de un archivo de plantilla para un componente Angular.*
  - styleUrls: *Una o más rutas relativas o direcciones URL absolutas para archivos que contienen hojas de estilo CSS para usar en este componente.*

**3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?**
Si, es posible, aunque no es recomendable ya que cuando se compila el paquete npm, las plantillas de estilos deben estar en línea porque cuando lo carga como un paquete npm no podrá lograr la ruta de plantilla/css dentro de node_modules.