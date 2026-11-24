# Revisión de los cinco módulos · Idea 2

| Módulo | Implementación | Verificación |
|---|---|---|
| 1. Escala del buque | ATA, ATB, Commence, Complete, ATD; Pre/Post-PCAT; BP y VOR; imagen ilustrativa y grúas asignadas por escala. | Marcas temporales ordenadas; detalle cambia al elegir buque; indicadores calculados desde la muestra. |
| 2. Productividad por grúa | GMPH, GCR, NCR; filtros de buque, grúa y turno; metas, brechas, comparaciones y hallazgos; qué es y para qué sirve cada KPI. | Ejemplo 450/18, 450/(18−2), 450/(18−4); agregaciones ponderadas; filtros cruzados; N/D con denominadores inválidos. |
| 3. Demoras | Pareto terminal/externas, horas por causa, movimientos equivalentes, eventos con inicio/fin y filtro de causa; recomendaciones priorizadas. | Duraciones coherentes; atribución según registro; equivalentes = horas × NCR, identificados como capacidad teórica y no pérdida real comprobada. |
| 4. Simulador | Camiones por grúa, minutos de relevo y número de grúas; nuevo GMPH, horas de buque, flota y comparación económica parcial. | Conservación de movimientos y velocidad neta; comparación contra base balanceada; costos inválidos rechazados. |
| 5. Mejora | Diagnóstico, propuesta Lean/A3, meta, horas de beneficio estimado; plan editable con responsables, fecha, estado y evidencia; respaldo e impresión. | Persistencia local y exportación; beneficios del escenario no se presentan como resultados medidos. |

Datos compartidos: 12 escalas reproducibles, semilla fija; ocho KPI principales con metas, fichas, tres verificaciones numéricas y bitácora. La web abre con index.html y no depende de servidor para consultar datos e ilustraciones.

La escena portuaria tiene un fondo generado con IA a partir de la referencia visual del estudiante. La carga SVG recorre el ciclo completo al tocar Q1/Q2/Q3; es ilustrativa y no modifica KPI históricos. La navegación identifica expresamente los módulos 1–5. Inicio y ayuda son adicionales.

Pruebas: tests/dashboard.cjs, tests/crane-performance.cjs y docs-check.js. Las comprobaciones de interfaz usan un DOM simulado. No acreditan una revisión visual completa en navegador ni validación de una operación real. La presentación, participación del equipo, revisión del profesor y validación de supuestos permanecen a cargo del grupo.
