# Soluciones operativas · La grúa que no llega a la meta

Estas propuestas acompañan el dashboard del tema 2. Los datos, metas y escenarios son simulados. Cada solución debe validarse con operaciones antes de implementarse en un puerto real.

## Soluciones por módulo

| Módulo | Problema | Solución propuesta | Verificación |
|---|---|---|---|
| Resumen ejecutivo | La gerencia no identifica qué atender primero. | Mostrar principal pérdida de tiempo, responsable y acción prioritaria. | Comparar productividad, metas y horas de demora semanalmente. |
| Buques y escalas | Esperas antes de operar y después de terminar. | Preparar equipos, personal y documentación antes del amarre; coordinar liberación y servicios correspondientes. | Reducir Pre-PCAT y Post-PCAT sin omitir controles de seguridad. |
| Rendimiento de grúas | Producción inferior a la meta. | Distinguir baja velocidad activa de exceso de paradas; mejorar el método de trabajo o la causa de demora según corresponda. | Comparar GMPH, GCR y NCR por grúa y escala. |
| Causas de las demoras | Interrupciones repetidas sin respuesta organizada. | Registrar causa, duración y responsable; priorizar por horas acumuladas. | Medir horas por causa y frecuencia de repetición. |
| Comparar mejoras | Recursos asignados sin conocer su efecto. | Probar alternativas de transporte, relevo y grúas, considerando disponibilidad y costos. | Comparar horas de buque y recursos bajo igual volumen de trabajo. |
| Plan de acción | Recomendaciones sin ejecutar. | Asignar responsable, fecha, estado y evidencia; revisar semanalmente. | Confirmar cumplimiento y efecto sobre KPI. |
| Datos y ayuda | Interpretaciones diferentes de los indicadores. | Acordar fórmulas, metas, unidades y origen; revisar datos incompletos y duplicados. | Reproducir cálculos y contrastar registros con la operación. |

## Soluciones por causa

### Espera de camiones internos
Revisar el ciclo completo del transporte y su asignación. Probar más camiones por grúa solo si el patio puede recibirlos sin generar congestión. Responsable propuesto: coordinación de transporte y supervisor de muelle. Medir horas de espera y GMPH, además de vigilar congestión y seguridad.

### Averías
Programar mantenimiento preventivo, inspecciones antes del turno, repuestos críticos y respuesta técnica. Responsable propuesto: mantenimiento. Medir horas de avería y recurrencia; no atribuir a esta acción beneficios que el simulador actual no calcula.

### Cambio de turno
Preparar el relevo antes del cambio y transferir pendientes de forma coordinada. Responsable propuesto: jefatura de operaciones. Medir duración real de las paradas de relevo y comprobar que no se omitan verificaciones de seguridad.

### Tapas de escotilla
Coordinar la secuencia con el plan de carga y descarga y preparar personal y equipos. Responsable propuesto: planificación del buque y supervisor de muelle. Medir horas de demora por tapas y cumplimiento de la secuencia.

### Clima
Aplicar límites operativos seguros, registrar interrupciones y preparar la reanudación. Responsable propuesto: operaciones y seguridad. No operar fuera de límites para intentar alcanzar una meta de productividad.

### Solicitudes de la naviera
Confirmar instrucciones con anticipación y registrar cambios tardíos, motivo e impacto. Responsable propuesto: planificación y coordinación con agencia/naviera. Medir horas por cambios y recurrencia.

## Propuesta principal para el piloto
Comparar mejor asignación de transporte interno y relevo preparado:
- Base del modelo: 4 camiones por grúa, relevo de referencia de 45 minutos y 3 grúas.
- Alternativa: 6 camiones por grúa, relevo de referencia de 15 minutos y 3 grúas.
- Horizonte sugerido: dos semanas con escalas comparables, sujeto a aprobación de operaciones.
- Antes del piloto: verificar flota, capacidad de patio, circulación segura, dotación y costos.
- Durante el piloto: registrar movimientos, horas de trabajo, demoras y marcas temporales de cada escala.
- Después: comparar productividad, horas de buque y costos; documentar diferencias de carga, buque y condiciones operativas.

Los valores 4/6 camiones y 45/15 minutos son supuestos de simulación, no una dotación óptima validada. El ahorro se calcula frente a la base balanceada del modelo, no directamente frente al registro histórico. La estimación económica es parcial y no incluye todos los costos ni equivale a ahorro contractual.

## Interpretación correcta de resultados
Reducir paradas puede aumentar GMPH, mejorar GCR según la causa y acortar la permanencia del buque. No aumenta automáticamente NCR: esa tasa mejora cuando el trabajo activo se ejecuta más eficientemente. Las horas de demora de grúa no equivalen a horas de buque porque varios equipos pueden detenerse al mismo tiempo.

## Alcance del entregable
Este documento contiene recomendaciones. No demuestra que se hayan ejecutado las acciones, completado un piloto o integrado sistemas operativos del puerto. El dashboard es una demostración; su uso comercial operativo requiere datos reales, calibración y validación con la terminal.
