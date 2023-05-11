**1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.**
*Los valores válidos para esta propiedad de configuración son:*
- *ShadowDom: Utiliza la API Shadow DOM nativa del navegador para encapsular estilos CSS, lo que significa que crea un ShadowRoot para el elemento host del componente que luego se usa para encapsular todo el estilo del componente.*
- *Emulated: Emula un comportamiento de encapsulación de Shadow DOM nativo agregando un atributo específico al elemento host del componente y aplicando el mismo atributo a todos los selectores de CSS proporcionados a través de estilos o styleUrls. Esta es la opción por defecto.*
- *None: No proporciona ningún tipo de encapsulación de estilo CSS, lo que significa que todos los estilos proporcionados a través de estilos o styleUrls son aplicables a cualquier elemento HTML de la aplicación, independientemente de su componente host.*

**2. ¿Qué es el shadow DOM?**
*Shadow DOM es parte del estándar de componentes web. Habilita la encapsulación de estilos y árboles DOM. Esta encapsulación nos permite ocultar la lógica DOM detrás de los elementos y aplicar los estilos a un elemento. Los estilos con alcance tienen la ventaja de que no se filtran.*

**3. ¿Qué es el changeDetection?**
*El changeDetection es una propiedad de framework integrada que garantiza la sincronización automática entre los datos de un componente y su vista de plantilla HTML.*

**4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.**
*De forma predeterminada, Angular usa la estrategia de detección de cambios ChangeDetectionStrategy.Default. El valor Default rastrea las alteraciones en el sistema de enlace de datos bidireccional de Angular. Una cosa que esta estrategia verifica son los cambios en las variables en las plantillas de componentes. Las alteraciones de variables incluyen cambios de valor y de referencia.*
*La detección de cambios ChangeDetectionStrategy.OnPush se utiliza como técnica de optimización. Para eventos DOM, OnPush funciona de manera similar a Default. La API DOM está parcheada y la detección de cambios se ejecuta cuando ocurre un evento DOM.*
*Las diferencias surgen cuando se manejan cambios variables en plantillas de componentes. Al usar OnPush, le decimos a Angular que el componente usa objetos inmutables en su plantilla. OnPush solo activará la detección de cambios cuando cambie una referencia de variable de plantilla. La detección de cambios no se activará cuando se cambie una variable de plantilla.*

**5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados**
*Una instancia de componente tiene un ciclo de vida que comienza cuando Angular crea una instancia de la clase de componente y representa la vista del componente junto con sus vistas secundarias. El ciclo de vida continúa con la detección de cambios, ya que Angular verifica cuándo cambian las propiedades vinculadas a los datos y actualiza tanto la vista como la instancia del componente según sea necesario. El ciclo de vida finaliza cuando Angular destruye la instancia del componente y elimina su plantilla renderizada del DOM. Las directivas tienen un ciclo de vida similar, ya que Angular crea, actualiza y destruye instancias en el curso de la ejecución.*

*Su aplicación puede usar métodos de 'hook' de ciclo de vida para aprovechar eventos clave en el ciclo de vida de un componente o directiva para inicializar nuevas instancias, iniciar la detección de cambios cuando sea necesario, responder a las actualizaciones durante la detección de cambios y limpiar antes de eliminar las instancias.*

***Hook methods:***
- *ngOnChanges():*
  - *Propósito: Responder cuando Angular establece o restablece las propiedades de entrada vinculadas a datos. El método recibe un objeto SimpleChanges de valores de propiedad actuales y anteriores.*
  - *Timing: Llamado antes de ngOnInit() (si el componente tiene entradas vinculadas) y cada vez que cambian una o más propiedades de entrada vinculadas a datos.*
- *ngOnInit()*
  - *Propósito: Inicialice la directiva o el componente después de que Angular primero muestre las propiedades vinculadas a los datos y establezca las propiedades de entrada de la directiva o el componente.*
  - *Timing: Llamado una vez, después del primer ngOnChanges(). Se sigue llamando a ngOnInit() incluso cuando no se llama a ngOnChanges() (que es el caso cuando no hay entradas vinculadas a la plantilla).*
- *ngAfterViewInit()*
  - *Propósito: Responde después de que Angular inicialice las vistas del componente y las vistas secundarias, o la vista que contiene la directiva.*
  - *Timing: Llamado una vez después del primer ngAfterContentChecked().*
- *ngOnDestroy()*
  - *Propósito: Limpieza justo antes de que Angular destruya la directiva o el componente. Anule la suscripción de Observables y separe los controladores de eventos para evitar pérdidas de memoria.*
  - *Timing: Llamado inmediatamente antes de que Angular destruya la directiva o el componente.*