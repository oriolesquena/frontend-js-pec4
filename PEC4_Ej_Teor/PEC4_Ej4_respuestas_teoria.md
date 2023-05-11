**1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:**
*La directiva ngFor es comúnmente usada para iterar sobre un array. ngFor exporta algunas variables locales que podemos utilizar durante la iteración actual:*
- index: *El índice del elemento actual en el iterable.*
- even: *Valor booleano. Es 'true' cuando el elemento tiene un índice par en el iterable.*
- odd: *Valor booleano. Es 'true' cuando el elemento tiene un índice impar en el iterable.*
- first: *Valor booleano. Es 'true' cuando el elemento es el primer ítem en el iterable.*
- last: *Valor booleano. Es 'true' cuando el elemento es el último ítem en el iterable.*

**2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.**
*Es una función que define cómo realizar un seguimiento de los cambios para los elementos en el iterable. Si se usa, cada vez que se agreguen, muevan o eliminen elementos en el iterable, la directiva, sólo volverá a redibujar los items que han cambiado.*
*Se comprende mejor la explicación con la siguiente imagen: ![ejemplo](https://dotnettutorials.net/wp-content/uploads/2018/12/word-image-45.png)*
*Cada vez que se hace 'refresh' sin el TrackBy, se destruye toda la estructura HTML de la tabla y se vuelve a crear. En cambio, añadiendo las siguientes líneas de código:*

*app.component.ts:*<pre><code>
trackByStudentID(index: number, student: any): string {
	return student.ID;
}
</code></pre>

*app.component.html:*
<br>
<code><tr *ngFor=’let student of students; trackBy:trackByStudentID’></code>

**3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.**
*No, no es posible. La razón es la simplicidad. Las directivas estructurales pueden hacer cosas complejas con el elemento anfitrión y sus descendientes.*

*Cuando dos directivas reclaman el mismo elemento anfitrión, ¿cuál debería tener prioridad?*

*¿Cuál debe ir primero, el NgIf o el NgFor? ¿Puede el NgIf cancelar el efecto del NgFor? Si es así (y parece que debería ser así), ¿cómo debería Angular generalizar la capacidad de cancelar para otras directivas estructurales?*

*No hay respuestas fáciles para esas preguntas. Prohibir múltiples directivas estructurales las hace discutibles. Hay una solución fácil para este caso de uso: colocar *ngIf en un elemento contenedor que envuelve el elemento *ngFor. Uno o ambos elementos pueden ser un <code><ng-container></code> para que no se generen elementos DOM adicionales.*