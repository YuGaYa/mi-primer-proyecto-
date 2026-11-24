# Fichas de KPI

Todas las metas son académicas; fuente de fórmulas: guía UMIP, Idea 2. Fuente numérica: data/escalas.json generado con semilla 20261124. M = movimientos; H = horas.

## GMPH
- Fórmula: M / H brutas.
- Unidad: mov/h.
- Meta: ≥26.
- Dato de origen: Movimientos y ventana bruta por grúa.
- Decisión: Comparar productividad total y detectar pérdida por demoras.

## GCR
- Fórmula: M / (H brutas − H externas).
- Unidad: mov/h.
- Meta: ≥28.
- Dato de origen: Movimientos y eventos externos.
- Decisión: Separar demoras fuera del control de la terminal.

## NCR
- Fórmula: M / (H brutas − todas las demoras).
- Unidad: mov/h.
- Meta: ≥30.
- Dato de origen: Movimientos y tiempo neto.
- Decisión: Evaluar velocidad durante trabajo efectivo; eliminar espera no cambia este KPI.

## BP
- Fórmula: M buque / (ATD − ATB).
- Unidad: mov/h.
- Meta: ≥65.
- Dato de origen: Movimientos de todas las grúas y marcas ATB/ATD.
- Decisión: Evaluar uso total del muelle.

## VOR
- Fórmula: M buque / (Complete − Commence).
- Unidad: mov/h.
- Meta: ≥75.
- Dato de origen: Movimientos y marcas Commence/Complete.
- Decisión: Evaluar ritmo de operación del buque.

## Pre-PCAT
- Fórmula: Commence − ATB.
- Unidad: h.
- Meta: ≤1.
- Dato de origen: Marcas de amarre e inicio.
- Decisión: Reducir preparación antes de operar.

## Post-PCAT
- Fórmula: ATD − Complete.
- Unidad: h.
- Meta: ≤1.
- Dato de origen: Marcas fin de operación y salida.
- Decisión: Reducir liberación posterior a operación.

## Crane intensity
- Fórmula: Σ working time / Long Crane working time.
- Unidad: grúas.
- Meta: ≥2,5.
- Dato de origen: Ventanas brutas asignadas de grúa; Long Crane = máximo por escala.
- Decisión: Evaluar intensidad equivalente; validar definición con profesor.

## Demoras por causa
- Fórmula: H causa / H de todas las demoras × 100.
- Unidad: %.
- Meta: Reducir espera camiones ≥25% respecto a base (piloto).
- Dato de origen: Registro de eventos con causa y tipo.
- Decisión: Priorizar causas por Pareto. La meta del piloto se refiere a horas de espera, no participación porcentual.

## Camiones internos por grúa
- Fórmula: Camiones simultáneos / grúas trabajando.
- Unidad: camiones/grúa.
- Meta: 6 en propuesta.
- Dato de origen: Asignación supuesta, base 4.
- Decisión: Explorar sensibilidad del transporte interno.

## Agregación
Tasas = cocientes de sumas. PCAT = promedio por escala. Intensidad agregada = suma de working time / suma de Long Crane por escala. No promediar tasas sin ponderación. Denominadores nulos se presentan como —.
