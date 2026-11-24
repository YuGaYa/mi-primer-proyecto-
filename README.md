# MUELLE · La grúa que no llega a la meta

Dashboard académico del tema 2 del proyecto semestral de Medición y Rendimiento de Terminales Portuarias, UMIP. Analiza baja productividad de grúas de muelle, demoras terminal/external y escenarios Lean. Todos los datos son simulados; no describe una terminal real.

## Abrir
Descargar el repositorio como ZIP, extraerlo y abrir `index.html` en Chrome o Edge. No necesita instalaciones, servidor ni conexión a internet. Mantener las carpetas css, js y data junto a index.html. Para compartir con el profesor, puede habilitar GitHub Pages en Settings > Pages > Deploy from a branch > main / (root).

## Módulos
Panorama; escala del buque; productividad por grúa; Pareto y eventos de demora; simulador; mejora Lean A3; metodología. Los filtros de buque y fecha se aplican globalmente. El turno filtra registros de grúa; las métricas de buque completo y el simulador no se recortan por turno. El CSV exporta eventos: movimientos y horas netas se repiten por causa, por lo que no deben sumarse directamente en ese archivo.

## Datos y supuestos
`node data/generar.js` regenera exactamente `data/escalas.js` y `data/escalas.json` con semilla 20261124 y generador LCG de 32 bits. 12 escalas cada dos días de octubre de 2026; 3 registros de grúa por escala; 6 causas por registro. Fechas UTC. Velocidad neta entre 29 y 34 mov/h y trabajo neto nominal entre 12 y 20 h. Las ventanas de demora por grúa son secuenciales, no se superponen. El turno es una etiqueta analítica del registro completo; no significa que todo el registro quepa en un turno de 8 h. El trabajo neto ocurre fuera de esas ventanas, dentro de la ventana bruta asignada a la grúa.

Las grúas comienzan en Commence; Complete corresponde a la grúa más larga. Horas brutas = netas + todas las demoras. Tasas agregadas = suma de movimientos / suma de horas correspondientes. BP y VOR se ponderan por horas del buque. Crane intensity = suma de ventanas brutas de grúa / suma de las ventanas de la grúa más larga por escala. Debe confirmarse esta convención de working time con el profesor.

## Modelo de mejora
Referencia de 4 camiones/grúa, 45 minutos por evento de relevo y 3 grúas. Espera nueva = espera histórica × 4 / camiones. Demora de relevo nueva = demora histórica × minutos / 45. El rango de camiones es 2–8; el modelo es una relación supuesta de sensibilidad, no un modelo calibrado de colas. No afecta averías, escotillas, clima o solicitudes de línea.

Se conservan movimientos y horas netas. Se suman horas de grúa y se reparten idealmente entre 2–4 grúas; no se modelan bahías, interferencias, costos, ni disponibilidad física. Cambiar grúas modifica el tiempo del buque, no GMPH en este modelo. Aumentar camiones por grúa aumenta también la flota total: se muestra explícitamente. Pre/Post-PCAT permanecen constantes. La base balanceada del simulador se diferencia de la escala histórica, donde hay desequilibrio entre grúas. El ahorro se compara contra esa base balanceada, no se atribuye el beneficio del balance a la propuesta. NCR permanece constante al eliminar demoras; GMPH y GCR pueden mejorar.

## Metas y fuente
Metas académicas supuestas, no benchmarks verificados: GMPH ≥26, GCR ≥28, NCR ≥30, BP ≥65, VOR ≥75 mov/h; pre/post ≤1 h; intensidad ≥2,5 grúas. Causas ordenadas por Pareto y porcentaje acumulado.

Fuente de fórmulas: José Abel Diez Cubilla, UMIP, “Proyecto semestral: Dashboard de KPI portuarios desarrollado con IA”, Idea 2 y requisitos técnicos, documento suministrado por el estudiante. No se emplean referencias industriales externas ni cifras operativas reales.

## Documentación y controles
- `docs/fichas_kpi.md`: fórmula, unidad, meta, fuente, decisión.
- `docs/verificacion.md`: tres KPI para reproducir a mano.
- `docs/bitacora_ia.md`: solicitudes y revisiones de IA.
- `docs/guion_presentacion.md`: guía de defensa.
- `node docs-check.js`: invariantes de fechas y fórmulas y conservación del volumen.

## Equipo (completar antes de entregar)
Integrantes: pendiente de completar por el grupo. Grupo, fecha y terminal de referencia: pendientes. Cada integrante debe realizar sus propios commits y revisiones; no se ha simulado participación. Este es un primer entregable funcional, no evidencia de hitos, participación ni defensa ya realizados.
