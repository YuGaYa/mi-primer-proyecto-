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


## Versión 2 · Módulos orientados a decisiones
- Resumen ejecutivo: diagnóstico en lenguaje sencillo y enlaces a la siguiente acción.
- Buques y escalas: línea de tiempo, preparación/operación/liberación y selección de una escala desde la tabla.
- Rendimiento de grúas: estados según metas configurables y diagnóstico de velocidad frente a paradas.
- Causas de las demoras: Pareto, responsables sugeridos, recomendaciones por causa y filtro de eventos.
- Comparar mejoras: escenarios predefinidos, controles interactivos, flota necesaria, ahorro de tiempo y balance económico parcial.
- Plan de acción: cuatro tareas con responsable, fecha, estado y notas editables; persistencia local, exportación JSON e impresión.
- Datos y ayuda: diccionario, metas editables, descarga de muestra y respaldo/restauración de configuración y plan.

### Persistencia y economía
Metas, escenario y plan usan localStorage. No se comparten entre usuarios ni dispositivos. Si el navegador bloquea almacenamiento, usar la descarga de respaldo. Abrir archivos mediante file:// puede tener comportamiento de almacenamiento distinto según el navegador; el dashboard se puede consultar igualmente.

El balance económico es parcial: horas de buque recuperadas × valor/hora menos el cambio de camión-horas × costo/hora. Incluye la diferencia de duración de ambas operaciones y la flota simultánea. No incluye costos de grúas adicionales ni implementación, y el beneficio del tiempo puede corresponder a la naviera. No equivale a ahorro contractual o ganancia de la terminal.

Pruebas: `node docs-check.js` verifica cálculos y datos. `node tests/dashboard.cjs` verifica renderizado JavaScript de los siete módulos y handlers en un DOM simulado; no sustituye una prueba visual de navegador. La vista previa del entorno no estuvo disponible durante esta revisión por timeout del relay.

### Antes de ofrecerlo como producto operativo
Esta versión es una demostración funcional y explicable. Integración con TOS, ingreso y validación de datos operativos reales, autenticación/roles, auditoría, almacenamiento compartido, acuerdos de disponibilidad y calibración del modelo requieren desarrollo y validación específicos con el puerto. No se simulan como capacidades disponibles.

## PORT PERFORMANCE 360 · Módulo 2
La identidad visual y la pantalla de Productividad por Grúa siguen la propuesta del grupo: azul marino, naranja industrial, fondo portuario ilustrativo y tarjetas GMPH/GCR/NCR. Se abre inicialmente este módulo. Ver `docs/modulo2_port_performance.md` para uso, fórmulas, supuestos y archivos de integración.

Meta común configurable del módulo 2: 30 mph inicialmente, guardada en este navegador. No es una meta oficial. Los porcentajes se calculan, no se toman de la imagen de referencia. La base de datos y los otros módulos siguen disponibles. Las metas específicas de otras pantallas se conservan.

Ejecutar `node tests/crane-performance.cjs` para verificar agregación, filtros cruzados, rankings, N/D, porcentaje frente a meta y los tres KPI del ejemplo 450 movimientos / 18 horas.

### Soluciones visibles y diseño de color
Las tres causas con más horas en el filtro generan recomendaciones en tarjetas de colores (`js/solutions.js`). «Comparar esta mejora» carga 6 camiones/45 minutos para transporte o 4 camiones/15 minutos para relevo, ambos con 3 grúas. El resto enlaza al plan de acción. Las horas históricas de demora no son una promesa de ahorro. Responsables y seguimiento están disponibles al desplegar cada solución.

### Ilustración animada
`js/port-scene.js` dibuja una escena SVG con grúas, camión y buque. Los botones de equipo permiten seleccionar una grúa; los movimientos mostrados proceden del filtro actual. El movimiento es decorativo y no indica conexión en vivo. Se puede pausar y se respeta la preferencia de movimiento reducido del dispositivo.

### Explicaciones, flota visual e interacción por contenedor
Los KPI muestran qué miden y para qué se usan. La escena permite recoger el contenedor del mismo ID/color, detenerse al sujetarlo y continuar con «Elevar» o «Devolver». Cada grúa conserva su propio estado durante la sesión y los movimientos ilustrados no alteran los KPI históricos.

`js/vessel-gallery.js` asocia una recreación distinta a cada uno de los doce buques. `assets/flota-ilustrativa.png` es una composición de imágenes generadas con IA, mostradas individualmente mediante fondos CSS. No son fotos de los buques ficticios ni evidencia de una terminal real. La galería y el detalle de escala lo indican explícitamente.

### Recorrido automático de Q1, Q2 y Q3
Tocar el dibujo, el botón Q1/Q2/Q3 o «Iniciar recorrido» ejecuta buscar → bajar → sujetar → elevar → trasladar → depositar → completar. No requiere pulsar cada etapa. El ciclo finalizado se puede repetir. Los nombres Q1/Q2/Q3 son las etiquetas visuales de QC-01/QC-02/QC-03. Junto al buque se muestran la imagen ilustrativa y el conteo real de registros de grúas asignadas en la muestra (3 por escala).

### Referencia visual de operación real
La escena principal usa `assets/operacion-realista.png`, una recreación con IA inspirada en la referencia de grúa STS enviada por el estudiante. Las cargas y controles SVG se superponen a la imagen; no se presenta como fotografía de una terminal identificada ni simulación física certificada. En pantallas pequeñas la escena se desplaza horizontalmente para mantener proporciones. Ver `docs/cumplimiento_modulos.md` para la revisión de los cinco módulos.

### Ilustraciones diferenciadas por módulo
- Inicio: centro de control y explicación visual de medir, entender y mejorar.
- Escala del buque: imágenes de buques ficticios, datos y grúas asignadas. Las recreaciones no se presentan como fotos reales de los nombres simulados.
- Productividad por grúa: escena interactiva de carga. La carga se deposita sobre la plataforma de un camión; sale cargado y llega otro vacío.
- Demoras: seis ilustraciones por causa, con horas, responsabilidad según registro y acción propuesta. Sin escena general de grúas.
- Simulador y plan: esquemas específicos del proceso de decisión y seguimiento.

Archivos: `js/module-illustrations.js`, `assets/resumen-ejecutivo.png`, `assets/causas-demora.png`. Las imágenes fueron generadas con IA para el proyecto. No hay conexión en vivo a una terminal.
