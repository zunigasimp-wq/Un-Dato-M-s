# Personajes de Un dato más

Biblioteca de personajes reutilizables de los episodios del canal.

| Episodio | Personajes | Formato |
| --- | --- | --- |
| ¿Qué tienen los japoneses que nosotros no? | Ave protagonista, zorro y coneja | SVG/React |
| La verdad de este instante | Persona de las ilustraciones, con color configurable | SVG/React |
| Ganar no te da la razón | Modelo humano de los apostadores y secundarios, con variantes de color y poses | Three.js / React Three Fiber |

Importa los componentes desde `src/index.ts`. Monta `Bird`, `Pupil` y `PersonaPercepcion` dentro de un SVG. Para el zorro usa `Pupil` con su configuración por defecto y para la coneja usa la prop `rabbit`. `PersonaCasino` se monta en un lienzo de React Three Fiber dentro de una composición de Remotion.

Para instalar y comprobar los tipos, ejecuta `npm ci` y `npm run check`.
