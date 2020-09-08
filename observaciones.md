### Comentarios Generales

Caro, lo primero es dejarte mis felicitaciones por tu maravilloso portfolio. Me encanta como quedó. Los colores, las sombras, la tipografía, todo es muy original y muy hermoso. Es muy bueno comprobar que cumpliste el diseño propuesto, y a la vez le diste tu propia personalidad para que la web te refleje. 

El responsive en particular te quedó fantástico, no hay resolución en donde tu web no se vea a la perfección. Ese tipo de cosas demuestran el tiempo y las ganas invertidos en este portfolio, y hablan muy bien de tu capacidad de trabajo y de aprendizaje, asi como la busqueda de cosas que no sabias -text shadow, etc- para que quede todo como lo querias.

En relacion al diseño, sí creo que los textos estan algo grandes en mobile, especialmente la seccion de la frase. Yo reduciria el font-size ahi (de todos modos esto es consejo, no evaluacion!)

Tu repositorio de github está muy prolijo, la estructura de carpetas es correcta, tenés un README completo y amigable, y muchos commits con mensajes adecuados. Felicitaciones!

- Si bien tu HTML estan bien indentado, dejas muchisimos saltos de linea entre secciones o estilos sin una intencion determinada, que dificultan bastante la lectura de tu codigo. Quiza valga la pena que busques algun linter (hay un monton en las extensiones de visual studio, yo uso Prettier) para que te formatee las cosas al guardar, o que te acostumbres al clic derecho + format document de VSCode (aunque toma en cuenta que no funciona para CSS, ahi vas a tener que bajarte alguna extension).

- Con el CSS en particular, por momentos se dificulta su lectura. La manera habitual de escribir css es: 

```
.nombre-clase {
  estilo: 20px;
  estilo-siguiente: 20px;
}
```

En tu css son habituales cosas como esta:

```



.nombre{
    display: flex;
    margin-bottom:20px;
    

}
```

Por lejos, la peor parte de tu codigo es la desprolijidad del CSS, que dificulta muchisimo leerlo y a vos mantenerlo. Fijate de buscar alguna extension para formatear CSS en VSCode: CSS Formatter es la mas habitual. 

- Volviendo a la prolijidad del HTML, hay varios divs que no creo que sean necesarios, y todo el head esta duplicado. Se que el tiempo no sobra para este TP, pero tomate el tiempo de recorrer tu codigo antes de entregarlo para notar cosas asi: suma mucho que tu codigo este prolijo y sin errores de este tipo. 

- Los nombres de clases son increiblemente descriptivos, claros y muy bien utilizados. Cumplis con que sean coherentes y correctos. Hay algunos en particular que me parece que no son correctos - te los dejo comentados- pero en general se nota que hiciste un trabajo a conciencia para que fueran lo mejor posible. Tambien tenes un muy buen uso de etiquetas semanticas.

- Usas muchos <br> para estilar. Esto no se considera buena practica. El primer motivo es porque en general representa una violacion del principio de separacion de responsabilidades: al usar <br> para dar un estilo (que las cosas se pongan una debajo de la otra), dejamos los estilos en el HTML en lugar de estar en su lugar, que es CSS.

Dejo algunos comentarios específicos a lo largo de tu código. La idea, como siempre, es que puedas usar esos comentarios para que tu trabajo quede lo mejor posible. Pero vuelvo a repetirlo: tu trabajo, asi como está, es excelente. 


### Nota final: 8

Nota desagregada: 
✔️ Estructura correcta de documento HTML --> con observaciones
✅ Respeta la consigna
✅ Respeta el diseño dado 
✅  Responsive funciona correctamente --> con observaciones 
❌ Código bien indentado. 
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases 
✅  Reutilización de estilos 
✔️ Código CSS ordenado ---> con observaciones
✅ Commits con mensajes adecuados.
