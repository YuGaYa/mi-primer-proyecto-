# Fechas, expediente de escala y diagnóstico por grúa

## Fechas
Antes, los filtros consultaban únicamente doce registros de octubre de 2026; enero no tenía datos. Ahora el selector genera explícitamente datos simulados para cualquier rango válido, con aviso visible de que no son registros históricos reales. La muestra contiene hasta doce escalas, distribuidas entre inicio y fin; si el rango es menor, se genera una por día. No implica que todos los días del rango tengan operaciones reales.

Generación determinista con LCG y semilla derivada de la fecha (base 20261124). La muestra inicial se reproduce con `node data/generar.js`. Identificadores dinámicos incluyen la fecha. El rango se refiere a la fecha de amarre; la operación puede terminar en un día posterior.

## Recursos y escala
De 2 a 6 grúas por buque según una clasificación de tamaño simulada. El expediente muestra clase, eslora, capacidad en TEU, movimientos de la visita, grúas asignadas y productividad y detenciones por equipo. No confundir capacidad con movimientos: no son la misma unidad. El tamaño es orientativo; la regla debe calibrarse con un puerto antes de uso operativo.

El simulador base usa el número de grúas de cada escala. La alternativa aplica la cantidad elegida a las escalas seleccionadas. Se conserva volumen y velocidad neta. Los costos de transporte usan la suma de camión-horas de las escalas; la estimación sigue siendo parcial y no incluye todos los costos.

## Interpretación de Inicio
Cada fila del gráfico muestra nombre y fecha de la escala, número de grúas, movimientos/hora, meta común y brecha. Verde alcanza la meta; naranja indica cuánto falta. Todas las barras comparten la misma escala de comparación. No exige interpretar códigos numéricos del eje.

## Diagnóstico y seguimiento
Se agrupan los eventos por grúa y se identifica su causa con mayor número de horas. Las recomendaciones se priorizan por menor productividad bruta. Cada ficha muestra grúa, volumen de registros, duración de la causa, participación dentro de las demoras del equipo y meta. El desplegable detalla responsable, preparación, medición durante la prueba y evidencia de seguimiento. Es una hipótesis de acción, no una causa raíz demostrada.

## Pruebas
`tests/demo-data.cjs`: enero 1–8, fecha única, rango inverso, reproducibilidad, 2–6 grúas y base coherente por buque. `tests/dashboard.cjs`: todos los módulos, cambio de período, expediente, gráfico accesible y nueva ilustración. `tests/crane-performance.cjs` y `docs-check.js`: fórmulas, eventos y conservación del volumen.

La interfaz se verifica con DOM simulado. Esto no equivale a una comprobación visual completa en navegador ni a validación de una operación real.
