# Bitácora de IA

## 24 de noviembre de 2026 · Codex
Solicitud del estudiante: «debo trabajar en base al tema 2 y quiero mi pagina web en base a eso»; documento Proyecto_Semestral_Dashboard_KPI_con_IA.pdf. Posteriormente confirmó los permisos del repositorio.

Trabajo realizado: extracción de requisitos; selección de Idea 2; implementación de HTML/CSS/JS sin dependencias; datos reproducibles; indicadores y filtros; Pareto; simulador; A3; documentación.

Revisión: diferenciación entre horas de grúa y horas de buque, tasas ponderadas, NCR constante al reducir demoras, referencia balanceada del simulador explícita para no atribuir el balance ideal a la mejora, datos y metas identificados como supuestos, exportación de eventos identificada como no aditiva en movimientos repetidos.

Verificación automatizada: orden temporal ATA–ATB–Commence–Complete–ATD; duración de eventos; GMPH ≤ GCR ≤ NCR; conservación de movimientos; escenario de 6 camiones y 15 minutos mejora respecto a 4 y 45; control de filtros vacíos.

Pendiente del equipo: contrastar la convención de working time y metas con el profesor, revisar cálculos con calculadora, completar integrantes, aportar commits reales por persona, ensayar defensa y validar supuestos con observación operativa. No se afirma que estas tareas se hayan realizado.


## Revisión de los módulos tras comentarios del estudiante
Solicitudes: «no se entiende», orientación comercial para puertos y «resuelveme todos los modulos que estan en el dashboard».
Cambios: nombres y explicaciones claros, resumen de decisiones, detalle navegable de buques, diagnóstico por grúa, filtro de causa, controles de escenario y costo, plan editable, metas configurables y respaldo validado. No se alteran los datos de muestra ni se atribuyen resultados reales a la terminal.
Verificación: siete módulos renderizan, filtros y controles recalculan, base de simulación consistente, costos negativos rechazados, exportación y persistencia local; pruebas de JavaScript con DOM simulado. La comprobación visual completa sigue limitada por el relay de vista previa del entorno.

## Nueva propuesta · PORT PERFORMANCE 360
Solicitud: adoptar la identidad y el alcance del texto entregado y la imagen de referencia. Trabajo concentrado en Módulo 2 sin eliminar los restantes. Se separan cálculos/validación y presentación, se reutilizan datos comunes y se añade meta configurable, filtros por grúa, comparación por turno/buque y hallazgos calculados. Se corrige la inconsistencia de la referencia entre KPI y porcentaje de cumplimiento: todos los porcentajes reales se derivan del indicador seleccionado y la meta.

Imagen portuaria: fondo generado con IA, exclusivamente ilustrativo. Pruebas incluyen ejemplo manual didáctico, agregación ponderada, filtros sin coincidencia, denominadores inválidos y conservación de otros módulos.
