# PORT PERFORMANCE 360 · CRANE PERFORMANCE

## Propósito
Comparar GMPH, GCR y NCR por buque, grúa y turno, identificar brechas frente a la meta e investigar demoras. El módulo 2 es la pantalla inicial. Los demás módulos se conservan.

## Uso
1. Seleccionar buque, turno y período con los filtros generales.
2. Seleccionar grúa y el indicador que se quiere comparar.
3. Establecer la meta común del módulo (inicial: 30 mph, supuesto académico configurable).
4. Leer tarjetas y brechas; consultar gráfica por grúa, anillos por turno y hallazgo automático.
5. Abrir «Ver detalles» para comparar buques, turnos y los registros de origen.
6. Consultar fórmulas o seguir a demoras. Si se seleccionó una grúa, el detalle de demoras conserva ese equipo hasta restablecer filtros.

## Cálculos
GMPH = movimientos / horas brutas. GCR = movimientos / (horas brutas − demoras non-terminal). NCR = movimientos / (horas brutas − todas las demoras). Las tasas agregadas usan sumas de movimientos y de denominadores correspondientes. No se promedian tasas individuales. Todos los cálculos usan precisión completa y muestran dos decimales.

Porcentaje de cumplimiento = indicador seleccionado / meta × 100. Puede superar 100%; el anillo se llena hasta 100% pero muestra el porcentaje calculado sin truncarlo. Brecha relativa de tarjeta = (KPI/meta − 1) × 100. La comparación detallada también muestra brecha absoluta en mph. La meta de esta pantalla es común a GMPH/GCR/NCR para seguir la propuesta del grupo; otras pantallas conservan metas específicas.

## Reutilización y límites de la base
Se conserva la muestra común de 12 escalas, QC-01/QC-02/QC-03 y Día/Noche. No se copian los equipos, valores ni turnos ilustrativos de la imagen. Los grupos Día/Noche etiquetan registros completos; no reconstruyen turnos operativos de ocho horas. Las demoras de un registro se atribuyen una sola vez a ese registro. Un ID estable se deriva de escala, grúa y posición del evento al adaptar la muestra, sin mutarla.

En la muestra, tapas de escotilla está explícitamente clasificada como terminal. No es una regla universal; una base operativa deberá clasificar cada evento según su responsabilidad real. Las horas externas se obtienen de los eventos clasificados como externa/non-terminal. La fórmula usa el mismo conjunto de registros para movimientos y tiempos. La validación bloquea tasas con horas incoherentes o denominadores no positivos, mostrando N/D.

## Archivos
- js/crane-performance.js: adaptación, filtros, validación, agregaciones y rankings; sin dependencias de interfaz.
- js/crane-view.js: pantalla del módulo 2 y controles.
- css/port360.css: identidad navy/naranja y adaptación móvil.
- assets/logo.svg: logotipo vectorial propio.
- assets/puerto.jpg: imagen de fondo generada con IA para este proyecto; ilustrativa, no fotografía de una terminal identificada.
- js/app.js e index.html: integración y navegación; se preservan las funciones de los otros módulos.

## Verificación requerida
Ejemplo didáctico de la propuesta: 450 movimientos, 18 h brutas, 2 h externas y 4 h totales de demora:
- GMPH = 450/18 = 25,00 mph.
- GCR = 450/(18−2) = 28,125 → 28,13 mph.
- NCR = 450/(18−4) = 32,142857… → 32,14 mph.

No se incorpora este ejemplo como una escala adicional. La muestra definitiva sigue siendo de 12 escalas. Ver docs/verificacion.md para otro ejemplo tomado de los datos.

Pruebas: `node tests/crane-performance.cjs`, `node tests/dashboard.cjs` y `node docs-check.js`. Los tests de interfaz usan DOM simulado, no acreditan revisión visual. El entorno ha presentado un fallo de relay en la vista previa; si persiste se informará como limitación.
