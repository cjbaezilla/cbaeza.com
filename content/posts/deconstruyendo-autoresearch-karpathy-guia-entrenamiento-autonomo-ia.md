---
title: "Deconstruyendo Autoresearch de Andrej Karpathy: Guía Línea por Línea para el Entrenamiento Autónomo de IA con Ejemplos Prácticos"
date: "18-05-2026"
excerpt: "Guía completa y exhaustiva sobre Autoresearch de Andrej Karpathy: cómo funciona un agente de IA que optimiza su propio código de entrenamiento de forma autónoma mediante un ciclo de experimentos de 5 minutos, analizando prepare.py, train.py y program.md al detalle."
author: "Carlos Baeza Negroni"
categories: ["AI", "Tutoriales"]
tags: ["Autoresearch", "Andrej Karpathy", "Agentes de IA", "Machine Learning", "Deep Learning", "PyTorch", "Transformers", "GPT", "Optimizadores", "Muon", "Entrenamiento Autónomo"]
coverImage: "/images/blog/autoresearch_cover.png"
readTime: "45 min de lectura"
featured: false
---

![Progreso de Autoresearch](/images/blog/autoresearch-progress.png)

## Publicaciones Originales de Andrej Karpathy y Repositorio:

1. **Tweet Oficial del Lanzamiento**: https://x.com/karpathy/status/2030371219518931079
2. **Tweet de Actualización**: https://x.com/karpathy/status/2031135152349524125
3. **Repositorio en GitHub**: https://github.com/karpathy/autoresearch

## Introducción: ¿Qué es Autoresearch?

Imagina un laboratorio de investigación donde el científico nunca duerme, jamás se cansa y no deja de experimentar ni un segundo. Este científico trabaja con absoluta concentración, ejecutando cientos de experimentos en una sola noche. Cada prueba explora una idea diferente: una nueva arquitectura de red neuronal, un hiperparámetro ajustado, un optimizador distinto. Cuando un experimento muestra potencial, el científico lo conserva y construye sobre él. Cuando falla, el intento se descarta y se olvida. Al llegar la mañana, el laboratorio está lleno de evidencias de una noche entera de descubrimientos: un camino claro de mejoras, avances tangibles y un modelo que funciona notablemente mejor que el día anterior. Esto no es ciencia ficción. Esto es exactamente lo que significa "autoresearch": un agente de inteligencia artificial que lleva a cabo investigación autónoma sobre sí mismo, ejecutando experimentos las 24 horas del día y descubriendo optimizaciones que incluso investigadores humanos con amplia experiencia podrían pasar por alto.

La idea fundamental es sorprendentemente sencilla: proporcionarle a un agente de IA una pieza de código funcional (en este caso, el script de entrenamiento de un modelo de lenguaje grande) e instruirlo para que mejore ese código ejecutando experimentos y aprendiendo de los resultados. El agente modifica el código, entrena durante un tiempo fijo, mide si el rendimiento mejoró y luego decide si conserva el cambio o lo revierte. Repite este ciclo cientos de veces, donde cada iteración se apoya en el último éxito alcanzado. El resultado es una cascada de modificaciones pequeñas y aditivas que, combinadas, generan un progreso sustancial.

Lo que hace que esto sea particularmente potente es que ataca directamente un cuello de botella central en la investigación de inteligencia artificial. Entrenar modelos de lenguaje modernos exige tomar innumerables decisiones sobre arquitectura, hiperparámetros, optimizadores y procedimientos de entrenamiento. Tradicionalmente, cada una de estas elecciones ha sido tomada por investigadores humanos mediante intuición, lectura de artículos científicos y experimentación meticulosa; un proceso lento, costoso y con frecuencia frustrante. Una sola corrida de entrenamiento puede costar miles de dólares en tiempo de cómputo y semanas de atención humana rastreando métricas, analizando fallos y concibiendo nuevas hipótesis. Autoresearch automatiza todo este ciclo iterativo, permitiendo que la IA explore el espacio de posibles mejoras de manera sistemática e incansable. En el experimento presentado por Karpathy, el agente ejecutó aproximadamente 700 experimentos a lo largo de dos días. De ellos, cerca de 20 representaron mejoras genuinas que se acumularon para producir un modelo un 11% superior.

El resultado concreto fue una reducción en la métrica del leaderboard "Time to GPT-2" de 2.02 horas a 1.80 horas. Esto significa que con los mismos recursos computacionales, ahora podemos entrenar un modelo a nivel de GPT-2 casi 22 minutos más rápido, una ganancia sustancial en un campo donde cada punto porcentual de eficiencia cuenta. Y lo más importante: todas estas mejoras fueron aditivas y se transfirieron con éxito a modelos más grandes (pasando de una profundidad de 8 a 24 capas), demostrando su solidez. Los hallazgos incluyeron descubrimientos técnicos muy específicos: el agente detectó que la normalización QK existente carecía de un multiplicador de escala, lo que hacía que la atención fuera demasiado difusa; descubrió que los Value Embeddings (vectores aprendidos adicionales incorporados al mecanismo de atención) se beneficiaban de una regularización que faltaba; ajustó el patrón de atención en ventanas (banded attention) que había sido configurado de forma muy conservadora; corrigió parámetros beta subóptimos en el optimizador AdamW; refinó el cronograma de decaimiento de pesos (weight decay); y optimizó los parámetros de inicialización de la red. No se trata de ajustes triviales o vagos, sino de decisiones de diseño reales en las que investigadores humanos habrían invertido semanas de análisis. Según el propio autor, fueron mejoras que pasaron inadvertidas a pesar de haber realizado un ajuste manual exhaustivo durante bastante tiempo.

La relevancia general de este proyecto trasciende con creces a este repositorio específico. Este experimento demuestra una vía viable hacia enjambres (swarms) de investigación en IA completamente autónomos. La arquitectura es minimalista: tres archivos que cubren la preparación de datos, el código de entrenamiento y las instrucciones del agente. El ser humano configura el entorno y redacta el archivo inicial `program.md` que guía el comportamiento del agente. A partir de allí, el agente toma el control total, modificando el script de entrenamiento de forma indefinida mientras el usuario duerme o se dedica a otras tareas. En teoría, se podrían tener múltiples agentes ejecutándose en paralelo con diferentes prompts o en distintas escalas de modelos, colaborando o compitiendo para acelerar los descubrimientos. Como señala Karpathy, todos los laboratorios de frontera de IA terminarán adoptando este enfoque; representa la "batalla final" de la ingeniería de IA. La complejidad aumenta a escalas mayores (ya no se trata solo de ajustar un único archivo `train.py`), pero la idea central escala perfectamente: se despliegan enjambres de agentes, se les encarga optimizar modelos pequeños primero, se promueven las ideas más prometedoras a escalas mayores y se permite que los humanos contribuyan en las capas estratégicas. De manera más amplia, cualquier métrica que pueda evaluarse eficientemente (ya sea rendimiento de modelos, corrección de código, métricas de producto o resultados científicos) puede convertirse en el objetivo de un agente de investigación autónomo. Esto abre las puertas al descubrimiento automatizado en múltiples disciplinas.

El verdadero ingenio de esta implementación radica en su deliberada simplicidad. Al restringir al agente para que modifique exclusivamente un archivo (`train.py`), el alcance se mantiene manejable y los diffs son fácilmente auditables. Al fijar el presupuesto de tiempo a exactamente 5 minutos por cada experimento, todos los resultados son directamente comparables independientemente de los cambios arquitectónicos: la métrica mide el mejor modelo alcanzable dentro de una inversión computacional fija, no la convergencia final teórica. El flujo de trabajo con ramas de git proporciona una red de seguridad natural: los experimentos fallidos se revierten automáticamente, mientras que los exitosos hacen avanzar la rama, generando una cadena limpia de mejoras. Y al optimizar en función de `val_bpb` (bits por byte en validación), una métrica independiente del tamaño del vocabulario, el agente puede comparar con total justicia cambios que alteren el tokenizador o las dimensiones del modelo.

Autoresearch no busca reemplazar a los investigadores humanos. Su propósito es eliminar las tareas tediosas y repetitivas de la optimización iterativa (los miles de microajustes, el ensayo y error constante, la espera interminable a que terminen las ejecuciones) para que los científicos puedan concentrarse en la estrategia de alto nivel, en nuevas direcciones conceptuales y en saltos creativos. Se trata de democratizar capacidades: un equipo pequeño con cómputo limitado ahora puede apoyarse en un agente de IA para realizar búsquedas exhaustivas de hiperparámetros que antes requerían grandes laboratorios financiados con legiones de ingenieros. Se trata de acelerar el progreso en general: iteraciones más rápidas significan que las ideas pasan de la concepción a la validación en menos tiempo, lo que acelera el avance global de la tecnología.

Esto es crucial porque las implicaciones van mucho más allá de los modelos de lenguaje. Si los agentes de IA pueden mejorar autónomamente sus propios procedimientos de entrenamiento, también pueden optimizar otros sistemas de software, refinar procesos de manufactura, perfeccionar experimentos científicos o iterar sobre diseños de ingeniería. El patrón es universal: un agente capaz de leer código, proponer modificaciones, evaluar resultados y aprender de la retroalimentación puede automatizar la optimización en cualquier dominio que cuente con un objetivo cuantificable y una forma segura de probar cambios. Hoy esto es posible para el entrenamiento de modelos porque la evaluación es rápida (5 minutos), el código es autocontenido y la métrica es transparente. Mañana se aplicará a innumerables flujos de trabajo técnicos.

En cierto sentido, autoresearch marca el inicio de una nueva era en el descubrimiento científico y de ingeniería, una era donde los sistemas de IA no se limitan a asistir a los investigadores humanos, sino que se convierten en investigadores propiamente tales, ejecutando experimentos abiertos a largo plazo que se componen con el tiempo. La visión planteada por el autor es elocuente: un futuro donde "la investigación pertenezca enteramente a enjambres autónomos de agentes de IA operando en megaestructuras de clusters de cómputo en la nube", iterando a través de generaciones de código sin intervención humana directa. Quizás ese futuro aún esté en el horizonte, pero este proyecto demuestra que ya estamos dando pasos concretos en esa dirección. La analogía del chef robot resume la esencia: define el objetivo, entrega los utensilios e ingredientes, y deja que el sistema explore durante toda la noche. Al regresar, no solo encontrarás una mejor receta, sino una comprensión renovada de lo que es posible alcanzar.

![Portada](/images/blog/autoresearch-1.jpg)

### ¿Quién es Andrej Karpathy?

Quizás te preguntes quién ideó este concepto del chef robot. Andrej Karpathy es un científico de la computación que ha dedicado muchos años al desarrollo de la inteligencia artificial. Realizó sus estudios en la Universidad de Stanford, una de las instituciones líderes en investigación informática, donde profundizó en el aprendizaje profundo (deep learning), la tecnología fundamental detrás de la IA moderna. Tras su paso por Stanford, se incorporó a Tesla, la empresa de vehículos eléctricos. En Tesla, lideró el equipo responsable de construir Autopilot, el sistema que asiste a los automóviles en la conducción autónoma, frenado de emergencia y mantenimiento de carril. Este hito representó una de las primeras ocasiones en que la tecnología de IA avanzada se integró en un producto comercial masivo al alcance del público general.

Posteriormente, formó parte del equipo fundacional de OpenAI, el laboratorio de investigación que desarrolló la serie de modelos GPT, incluyendo ChatGPT. Karpathy estuvo en la primera línea sentando las bases del auge actual de la IA generativa. Aunque más tarde emprendió nuevos proyectos independientes, sus contribuciones ayudaron a moldear la industria en su conjunto. Hoy en día es ampliamente reconocido por su extraordinaria habilidad para explicar conceptos complejos de IA en términos claros y accesibles para cualquier persona. Publica videos educativos y artículos detallados sobre el funcionamiento interno de estos sistemas. La comunidad técnica valora enormemente su perspectiva porque combina un profundo rigor técnico con una vocación pedagógica excepcional.

Su proyecto `autoresearch` continúa con esta tradición de hacer accesibles y aplicables ideas de vanguardia. El proyecto aborda un reto crítico: el entrenamiento de modelos de IA es costoso y consume mucho tiempo. Si un sistema de IA puede colaborar en optimizar su propio código de entrenamiento, podemos acelerar el ritmo de avance en toda la disciplina. La trayectoria de Karpathy respalda la seriedad de esta línea de trabajo. Más importante aún, su historial demuestra un enfoque centrado en problemas prácticos del mundo real, no solo en ejercicios teóricos. No es únicamente alguien que redacta artículos académicos; ha construido plataformas que impactan la vida de millones de personas a través de Autopilot. Esa experiencia pragmática hace que sus desarrollos sean especialmente dignos de atención.

### ¿Qué son estas tecnologías?

Para comprender por qué autoresearch resulta tan fascinante, es necesario entender qué ocurre tras bambalinas cuando se construye una IA como ChatGPT. Crear un modelo de lenguaje grande implica tomar miles de pequeñas decisiones de ingeniería. ¿Cuántas capas debe tener la red neuronal? ¿Cuál es la tasa de aprendizaje óptima? ¿Qué variante del mecanismo de atención conviene utilizar? Durante años, los investigadores han tenido que dedicar meses o incluso años a experimentar manualmente con estas configuraciones. Cada intento puede costar miles o millones de dólares en tiempo de cómputo, ya que entrenar estos modelos requiere una potencia de procesamiento masiva.

Los Modelos de Lenguaje Grandes (LLMs, por sus siglas en inglés), frecuentemente denominados modelos GPT (que significa Transformador Generativo Preentrenado), son sistemas de IA que aprenden procesando enormes volúmenes de texto. Su funcionamiento se basa en predecir cuál es la siguiente palabra (o token) más probable en una secuencia. Al practicar esta tarea miles de millones de veces con infinidad de ejemplos, aprenden a generar texto coherente, responder preguntas complejas, programar código y emular diversos estilos de escritura. Estos modelos constituyen el núcleo de la mayoría de los asistentes de IA contemporáneos.

En el corazón de estos sistemas se encuentra una **red neuronal**. Puedes imaginar una red neuronal como un equipo compuesto por miles o millones de pequeños aprendices trabajando en conjunto. Cada aprendiz se especializa en identificar una pieza diminuta del rompecabezas. Al interconectar a todos estos aprendices, el conjunto es capaz de reconocer patrones sumamente complejos. Al principio, la red no sabe absolutamente nada y realiza predicciones puramente aleatorias. Luego practica una y otra vez con millones de datos. Este proceso de práctica constante es lo que denominamos **entrenamiento**. El entrenamiento es similar a practicar escalas en el piano: ejecutas los mismos ejercicios repetidamente y en cada ocasión realizas microajustes en la posición de tus dedos, hasta que gradualmente logras tocar con fluidez y precisión de manera intuitiva.

Sin embargo, el entrenamiento requiere reglas y pautas, al igual que la práctica del piano necesita una guía estructurada. ¿Cuánto tiempo debes practicar al día? ¿A qué velocidad debes avanzar entre ejercicios? A estas configuraciones de control se les llama **hiperparámetros**. Son equivalentes a la temperatura y el tiempo de horneado cuando preparas pan: si el horno está demasiado caliente, el pan se quema; si está muy frío, la masa no se cocina. Los hiperparámetros determinan qué tan rápido aprende la IA, cuánta información retiene y múltiples detalles operativos de sus sesiones de práctica. Encontrar buenos hiperparámetros marca la diferencia entre un sistema que aprende de forma óptima y uno que se estanca sin progresar.

Por último, tenemos la **optimización**. El optimizador actúa como el instructor que observa tu práctica de piano y te indica correcciones: quizás debas reducir la velocidad en ciertos compases o modificar la digitación en un pasaje complicado. En la red neuronal, el optimizador calcula, tras cada ciclo de práctica, cómo ajustar los millones de parámetros internos (pesos) para reducir los errores en predicciones futuras. Guía el proceso de aprendizaje hacia un rendimiento superior.

Todas estas piezas encajan armónicamente: la arquitectura GPT define la estructura cerebral general, la red neuronal es el equipo de aprendices, el entrenamiento es la práctica reiterada, los hiperparámetros son las condiciones de la sesión y el optimizador es el entrenador que guía los ajustes. Cuando todos estos elementos se sincronizan a la perfección, obtenemos un sistema de IA de alto rendimiento.

Este proyecto podría parecer a simple vista un truco técnico ingenioso, pero apunta a una transformación mucho más profunda en la metodología científica. Por primera vez, los sistemas de IA pueden liderar investigaciones significativas sobre sus propios componentes, ejecutando pruebas sin descanso y descubriendo mejoras que incluso especialistas humanos no habrían imaginado.

### ¿Por qué debería importarnos?

Es natural preguntarse por qué la automatización de la investigación en IA debería interesarnos a todos. La respuesta reside en que acelerar la investigación en IA puede ayudar a resolver algunos de los retos más apremiantes de la humanidad. Pensemos en los científicos que buscan nuevos medicamentos: a menudo deben evaluar miles o millones de combinaciones moleculares, un proceso que tradicionalmente puede tomar décadas. Si los modelos de IA que asisten en este cribado se vuelven más veloces y precisos, podremos descubrir tratamientos médicos vitales en una fracción del tiempo.

Una mejor IA se traduce en mejores herramientas para los profesionales de la salud. Imaginemos sistemas capaces de analizar imágenes médicas con precisión sobrehumana, detectando anomalías o tumores en etapas tempranas que el ojo humano podría pasar por alto, o modelos predictivos que ayuden a priorizar la atención de urgencia en hospitales. Estos sistemas requieren refinamiento continuo para alcanzar su máximo potencial, y la investigación autónoma puede acelerar esas optimizaciones drásticamente.

Consideremos la educación. Actualmente, muchos estudiantes interactúan con plataformas de tutoría basadas en programas rígidos. ¿Qué ocurriría si los modelos detrás de estas herramientas aprendieran a adaptarse de forma dinámica al estilo cognitivo de cada estudiante? Podrían personalizar explicaciones en matemáticas, lectura o ciencias según las necesidades individuales de cada alumno. Lo mismo aplica a la ciencia climática: modelar patrones meteorológicos y proyecciones de cambio climático demanda una capacidad computacional descomunal. Modelos de IA más eficientes podrían ejecutarse en infraestructuras más accesibles, acercando pronósticos avanzados a comunidades que hoy carecen de supercomputadoras.

Incluso en la industria cotidiana, optimizaciones de IA permiten diseñar procesos productivos con menor desperdicio de materiales, trazar rutas logísticas que ahorran combustible y ofrecer servicios más personalizados a menor costo. El impacto real no consiste en crear robots humanoides espectaculares, sino en utilizar la tecnología para resolver problemas concretos de las personas. La investigación autónoma en IA equivale a entregarle a los científicos un asistente incansable que además perfecciona continuamente sus propias destrezas.

Esto acelera el ritmo de desarrollo tecnológico: modelos avanzados que antes tomaban años en gestarse podrían estar listos en semanas. También democratiza la investigación, permitiendo que equipos pequeños exploren hipótesis sin requerir presupuestos multimillonarios. Como veremos a continuación, el agente de Karpathy descubrió mejoras reales que se sumaron para lograr un modelo un 11% superior. Esto no es una promesa a futuro: está funcionando ahora mismo.

![El Panorama General: ¿Cómo Funciona?](/images/blog/autoresearch-2.jpg)

## El Panorama General: ¿Cómo Funciona?

Expliquemos este ciclo autónomo utilizando analogías cotidianas. Entrenar una red neuronal es muy similar a enseñarle a un estudiante a reconocer gatos en fotografías. Empiezas desde cero, le muestras ejemplos, corriges sus equivocaciones y gradualmente va aprendiendo. Sin embargo, como profesor debes decidir qué tan rápido aprende el estudiante (tasa de aprendizaje), cuántas sesiones de estudio necesita (épocas) y qué método pedagógico aplicar (elección del optimizador). Estas decisiones son los hiperparámetros, y encontrarlos suele ser tanto un arte como una ciencia.

### Analogías Cotidianas para Conceptos Clave

**Redes neuronales como estudiantes en formación:** Imagina a un estudiante aprendiendo una materia nueva. Al inicio no conoce los conceptos. Lee libros, asiste a clases y rinde pruebas prácticas. Cada vez que comete un error, ajusta su razonamiento. Con el tiempo, adquiere maestría. Una red neuronal opera de forma idéntica: comienza con conexiones aleatorias, procesa ejemplos, detecta sus fallos y reajusta su estructura interna. La red construye comprensión reconociendo patrones subyacentes, no memorizando datos aislados.

**Entrenamiento como practicar piano:** Dominar el piano exige práctica diaria. Se inicia con escalas simples, luego piezas breves y finalmente conciertos complejos. Cada sesión fortalece la memoria muscular. Del mismo modo, el modelo de IA practica con miles de ejemplos de texto, ejecutando sus "escalas" de predicción una y otra vez hasta incrementar su precisión de manera gradual y consistente.

**Mecanismo de atención como leer con un resaltador:** Cuando lees un texto denso, no le prestas la misma atención a cada palabra. Tu mirada se enfoca naturalmente en títulos, términos clave y cifras relevantes. Tu atención se concentra en lo esencial para comprender el mensaje. El mecanismo de atención en IA funciona igual: permite al modelo ponderar la relevancia de distintas palabras al generar una predicción. Al leer "El gato descansaba en la alfombra porque estaba cansado", la atención le permite inferir que "estaba" se refiere al gato y no a la alfombra, emulando la priorización humana de información.

**Optimizadores como entrenadores deportivos:** Un buen entrenador evalúa el desempeño de un atleta y propone ajustes específicos: mayor trabajo cardiovascular, cambios en la alimentación o correcciones técnicas en la postura. El optimizador cumple exactamente esa función en la red neuronal: tras cada sesión, analiza las desviaciones y calcula cómo mover las perillas internas de la red para minimizar futuros errores.

**Hiperparámetros como recetas de cocina:** Preparar una sopa perfecta exige la temperatura adecuada en la estufa, el tiempo exacto de cocción y la cantidad precisa de sal. Si alteras una variable, el resultado cambia por completo. Los hiperparámetros son precisamente esas configuraciones de temperatura y tiempo aplicadas al entrenamiento de IA: controlan la velocidad de aprendizaje, la retención de memoria y la dinámica de las sesiones.

Para formalizar estos conceptos técnicos:

Una **red neuronal** es un programa computacional inspirado conceptualmente en el cerebro humano, estructurado en capas de unidades de procesamiento llamadas neuronas. Cada conexión posee un valor numérico (peso) que determina la influencia de una neurona sobre otra. Durante el entrenamiento, estos pesos se ajustan progresivamente para maximizar la precisión de las respuestas.

El **entrenamiento** es el proceso iterativo de aprendizaje: el modelo procesa datos, genera predicciones, evalúa su margen de error mediante una función de pérdida (loss function) y actualiza sus pesos para reducir dicho error.

Los **hiperparámetros** son las variables de configuración definidas previamente al inicio del entrenamiento: tasa de aprendizaje (learning rate, que define el tamaño del paso de actualización), tamaño de lote (batch size, cuántos ejemplos se procesan antes de actualizar pesos), algoritmo optimizador, cantidad de capas, entre otros.

La **optimización** corresponde a los métodos matemáticos empleados para actualizar los pesos en base a los gradientes (vectores que indican la dirección que reduce la función de pérdida). Optimizadores como SGD, AdamW o Muon aplican distintas estrategias para gestionar momentos, adaptar pasos y evitar oscilaciones.

Autoresearch automatiza esta búsqueda sistemática. El flujo opera de la siguiente manera:

El agente de IA parte de una versión funcional del código de entrenamiento. Ejecuta una corrida de exactamente 5 minutos, midiendo el desempeño del modelo en un conjunto de validación mediante la métrica `val_bpb` (bits por byte en validación). Un valor menor de `val_bpb` indica una mayor capacidad predictiva del modelo.

| Concepto de IA | Analogía Cotidiana | Explicación Sencilla |
| :--- | :--- | :--- |
| Red neuronal | Estudiante aprendiendo | Múltiples unidades interconectadas reconociendo patrones |
| Entrenamiento | Práctica de piano | Ejercicios reiterados que perfeccionan una habilidad |
| Mecanismo de atención | Lectura con resaltador | Enfoque selectivo en la información más relevante |
| Optimizador | Entrenador deportivo | Retroalimentación y ajustes para maximizar el rendimiento |
| Hiperparámetros | Receta de cocina | Variables de control (temperatura, tiempo) que definen el resultado |

### Entendiendo las Métricas: Bits por Byte y Pérdida de Validación

¿Cómo determinamos si un modelo de lenguaje es genuinamente bueno? Requerimos métricas objetivas, al igual que los profesores utilizan exámenes para evaluar el aprendizaje. En la investigación de IA, dos medidas fundamentales son los "bits por byte" (`val_bpb`) y la "pérdida de validación" (`validation loss`).

Pensemos en los bits por byte de la siguiente forma: el modelo lee un fragmento de texto e intenta predecir el siguiente token. Una vez que le mostramos la palabra real, evaluamos: ¿qué tan sorprendido quedó el modelo? Si predijo la palabra con total certeza, su nivel de sorpresa fue cero. Si su predicción fue completamente errónea, la sorpresa fue máxima. Bits por byte es un número que cuantifica esa sorpresa acumulada a lo largo de millones de caracteres. Un valor más bajo significa que el modelo experimentó menor sorpresa, es decir, cometió menos errores predictivos.

La analogía escolar es directa: imagina un examen de ortografía. Un estudiante que escribe correctamente casi todas las palabras obtiene una calificación sobresaliente (equivalente a un `val_bpb` bajo). Quien comete múltiples faltas obtiene una nota deficiente. `val_bpb` funciona como esa calificación para una IA evaluada frente a millones de palabras.

La otra métrica clave es la **pérdida de validación**. Esta comprueba si el modelo realmente comprendió los conceptos o si simplemente memorizó las respuestas. Durante el entrenamiento, el modelo practica con un conjunto de datos específico (training set). Sin embargo, los investigadores también lo evalúan con un conjunto de datos completamente nuevo que jamás ha visto (validation set). El rendimiento sobre estos datos nuevos constituye la pérdida de validación. Un valor bajo demuestra que el modelo puede generalizar su conocimiento a situaciones inéditas.

Es igual al alumno que practica con ejercicios modelo antes de una prueba. Si las preguntas del examen cambian ligeramente los números pero evalúan los mismos principios matemáticos, el estudiante que comprendió la materia aprobará sin problemas. Quien solo memorizó las respuestas de práctica fallará. La pérdida de validación garantiza que la IA no sufra de sobreajuste (overfitting).

### El Ciclo de Experimentos de 5 Minutos

Veamos ahora cómo ejecuta el sistema autónomo cada uno de sus experimentos paso a paso:

**Paso 1: Partir de una versión funcional.** El agente inicia con una versión verificada del código de entrenamiento (ya sea el código base original o la mejor variante descubierta hasta el momento).

**Paso 2: Ejecutar un experimento de 5 minutos.** El agente inicia el script de entrenamiento y le permite ejecutarse durante exactamente 5 minutos de tiempo neto de cómputo (sin contabilizar el arranque ni la compilación inicial). Durante este lapso, la red neuronal se entrena desde cero aprendiendo de los datos.

**Paso 3: Medir los resultados.** Al cumplirse los 5 minutos, el script finaliza e imprime métricas clave, destacando el valor de `val_bpb`. Esto refleja la calidad alcanzada por el modelo bajo esa configuración exacta.

**Paso 4: Registrar el experimento.** El agente documenta en una bitácora qué cambios probó y qué resultado obtuvo, construyendo un historial exhaustivo de aciertos y fallos.

**Paso 5: Modificar el código inteligentemente.** Aquí entra en juego el razonamiento del agente. Lee el código actual y aplica una modificación deliberada: incrementar la tasa de aprendizaje, alterar capas de normalización, ajustar parámetros del optimizador o modificar la profundidad de la arquitectura.

**Paso 6: Guardar el cambio con git.** El agente registra la modificación en el sistema de control de versiones git, creando un commit en una rama experimental dedicada.

**Paso 7: Evaluar la versión modificada.** Se ejecuta una nueva corrida de 5 minutos con el código modificado para verificar el impacto del cambio.

**Paso 8: Conservar o descartar.** Al concluir la corrida, el agente compara el nuevo `val_bpb` con el récord anterior. Si el nuevo valor es menor (mejor desempeño), conserva el cambio, consolidando la nueva línea base. Si es igual o peor, descarta la modificación revirtiendo el commit y regresando al estado anterior antes de intentar otra hipótesis.

**Paso 9: Repetir indefinidamente.** El ciclo se reitera cientos de veces. El agente no actúa al azar: analiza el historial de éxitos y fallos, interpreta la lógica del código y formula hipótesis basadas en los patrones observados.

La genialidad de este diseño reside en el presupuesto fijo de 5 minutos. Cada experimento dura exactamente 300 segundos netos, sin importar qué alteraciones proponga el agente. Esto estandariza las comparaciones: si el agente propone una red más profunda (que tarda más en procesar cada lote), dicha red debe demostrar que aprende más rápido en ese tiempo fijo para justificar su costo. Se optimiza la eficiencia de aprendizaje por unidad de tiempo de cómputo.

### Ramas de Git: La Máquina del Tiempo para el Código

Git es el sistema estándar que emplean los desarrolladores para rastrear cambios en el código fuente. Funciona como un punto de guardado en un videojuego: en cualquier momento puedes registrar el estado exacto de tu proyecto y regresar a él si una prueba posterior sale mal.

Una "rama" (branch) en git representa una línea temporal alternativa. Imagina que escribes un libro y vas en el capítulo 10 en tu rama principal (`master`). Deseas explorar un giro argumental alternativo, por lo que creas la rama `experimento-1`. Si el nuevo rumbo funciona, lo integras a la historia principal; si no te convence, simplemente descartas la rama y retomas tu historia en el capítulo 10 sin alteraciones.

En autoresearch, el agente crea una rama específica para su sesión (por ejemplo, `autoresearch/mar15`). Cada prueba genera un commit en esa rama. Si la hipótesis triunfa, la rama avanza; si fracasa, el agente ejecuta un `git reset` hacia el commit previo, borrando el intento fallido y dejando el código limpio para la siguiente iteración.

### Comparando Experimentos: ¿Qué se Conserva?

La decisión de preservar o desechar una modificación sigue reglas estrictas basadas en `val_bpb`:

El agente compara el `val_bpb` obtenido contra la mejor marca histórica registrada entre los experimentos conservados (`keep`).

Si el nuevo `val_bpb` es menor (mejor rendimiento), la prueba es exitosa. El código se conserva, el commit se mantiene y se establece la nueva línea base para las pruebas venideras.

Si el nuevo `val_bpb` es superior (peor rendimiento), el cambio se descarta. El código se revierte mediante git al commit anterior. La prueba se anota en el registro con estado `discard` para no repetir el mismo error, pero el archivo vuelve a su estado óptimo.

Si el `val_bpb` es idéntico, por norma general se descarta, salvo una excepción: si la modificación simplifica significativamente el código reduciendo líneas innecesarias sin degradar el rendimiento, se conserva como una victoria de simplificación.

Este mecanismo constituye un algoritmo de escalada (hill climbing) automatizado. Cada cambio exitoso da un paso hacia la cima. Las 20 mejoras descubiertas en el experimento original demostraron ser ortogonales y acumulativas, sumándose armónicamente para elevar el rendimiento global del modelo.

## Los Tres Archivos: Entendiendo la Arquitectura

El sistema completo de autoresearch se compone únicamente de tres archivos, cada uno con una responsabilidad nítida y delimitada:

1. `prepare.py`: Representa los cimientos inmutables. Gestiona la descarga de datos desde internet, entrena el tokenizador BPE, organiza los dataloaders y define la función de evaluación oficial `evaluate_bpb`. Una vez ejecutado, genera un directorio de caché con los datos procesados. El agente de IA tiene estrictamente prohibido modificar este archivo; constituye infraestructura de solo lectura.

2. `train.py`: Es la mesa de trabajo mutable. Este único archivo de aproximadamente 630 líneas contiene la definición de la arquitectura GPT, el optimizador híbrido MuonAdamW, los hiperparámetros y el bucle de entrenamiento de 5 minutos. El agente tiene total libertad para modificar cualquier sección de este archivo.

3. `program.md`: Es el manual de instrucciones para el agente. El investigador humano redacta este documento en lenguaje natural, estableciendo las reglas del juego: cómo configurar la sesión, qué archivos puede editar, cuál es la métrica objetivo, cómo estructurar el archivo de resultados `results.tsv` y la directiva de no detenerse jamás de forma autónoma.

## Análisis Profundo: prepare.py - La Base que Nunca Cambia

Examinemos `prepare.py` detalladamente para comprender cómo se preparan los datos y se define el estándar de evaluación.

```python
"""
One-time data preparation for autoresearch experiments.
Downloads data shards and trains a BPE tokenizer.

Usage:
    python prepare.py                  # full prep (download + tokenizer)
    python prepare.py --num-shards 8   # download only 8 shards (for testing)

Data and tokenizer are stored in ~/.cache/autoresearch/.
"""
```

El docstring inicial documenta el propósito del script: descargar fragmentos de datos y entrenar el tokenizador BPE, almacenando los artefactos en el directorio `~/.cache/autoresearch/`.

```python
MAX_SEQ_LEN = 2048       # context length
TIME_BUDGET = 300        # training time budget in seconds (5 minutes)
EVAL_TOKENS = 40 * 524288  # number of tokens for val eval
```

Constantes globales fijas:
- `MAX_SEQ_LEN = 2048`: Longitud de contexto (ventana de atención de 2048 tokens).
- `TIME_BUDGET = 300`: Presupuesto de entrenamiento fijado en 300 segundos (5 minutos exactos).
- `EVAL_TOKENS`: Cantidad de tokens destinados a la evaluación de validación (aproximadamente 20.97 millones de tokens).

```python
CACHE_DIR = os.path.join(os.path.expanduser("~"), ".cache", "autoresearch")
DATA_DIR = os.path.join(CACHE_DIR, "data")
TOKENIZER_DIR = os.path.join(CACHE_DIR, "tokenizer")
BASE_URL = "https://huggingface.co/datasets/karpathy/climbmix-400b-shuffle/resolve/main"
MAX_SHARD = 6542
VAL_SHARD = MAX_SHARD
VOCAB_SIZE = 8192
```

Rutas y fuentes de datos:
- `DATA_DIR` y `TOKENIZER_DIR` organizan los archivos locales.
- `BASE_URL`: Apunta al dataset `climbmix-400b-shuffle` alojado en Hugging Face.
- `MAX_SHARD = 6542`: Total de 6543 shards disponibles (del 0 al 6542). El último shard (`6542`) se reserva exclusivamente como partición de validación inmutable.
- `VOCAB_SIZE = 8192`: Tamaño del vocabulario del tokenizador BPE.

```python
SPLIT_PATTERN = r"""'(?i:[sdmt]|ll|ve|re)|[^\r\n\p{L}\p{N}]?+\p{L}+|\p{N}{1,2}| ?[^\s\p{L}\p{N}]++[\r\n]*|\s*[\r\n]|\s+(?!\S)|\s+"""
SPECIAL_TOKENS = [f"<|reserved_{i}|>" for i in range(4)]
BOS_TOKEN = "<|reserved_0|>"
```

Reglas de tokenización:
- `SPLIT_PATTERN`: Expresión regular estilo GPT-4 para segmentar contracciones, palabras, números y espacios en blanco.
- `SPECIAL_TOKENS`: Cuatro tokens reservados, designando a `<|reserved_0|>` como `BOS_TOKEN` (Beginning of Sequence) para marcar el inicio de cada documento.

```python
def download_single_shard(index):
    """Download one parquet shard with retries. Returns True on success."""
    filename = f"shard_{index:05d}.parquet"
    filepath = os.path.join(DATA_DIR, filename)
    if os.path.exists(filepath):
        return True

    url = f"{BASE_URL}/{filename}"
    max_attempts = 5
    for attempt in range(1, max_attempts + 1):
        try:
            response = requests.get(url, stream=True, timeout=30)
            response.raise_for_status()
            temp_path = filepath + ".tmp"
            with open(temp_path, "wb") as f:
                for chunk in response.iter_content(chunk_size=1024 * 1024):
                    if chunk:
                        f.write(chunk)
            os.rename(temp_path, filepath)
            print(f"  Downloaded {filename}")
            return True
        except (requests.RequestException, IOError) as e:
            print(f"  Attempt {attempt}/{max_attempts} failed for {filename}: {e}")
            for path in [filepath + ".tmp", filepath]:
                if os.path.exists(path):
                    try:
                        os.remove(path)
                    except OSError:
                        pass
            if attempt < max_attempts:
                time.sleep(2 ** attempt)
    return False
```

Descarga robusta:
- Implementa reintentos con retroceso exponencial (exponential backoff).
- Transfiere en bloques de 1 MB y escribe primero en un archivo temporal (`.tmp`), renombrándolo solo tras una descarga íntegra para prevenir archivos corruptos.

```python
def download_data(num_shards, download_workers=8):
    """Download training shards + pinned validation shard."""
    os.makedirs(DATA_DIR, exist_ok=True)
    num_train = min(num_shards, MAX_SHARD)
    ids = list(range(num_train))
    if VAL_SHARD not in ids:
        ids.append(VAL_SHARD)

    existing = sum(1 for i in ids if os.path.exists(os.path.join(DATA_DIR, f"shard_{i:05d}.parquet")))
    if existing == len(ids):
        print(f"Data: all {len(ids)} shards already downloaded at {DATA_DIR}")
        return

    needed = len(ids) - existing
    print(f"Data: downloading {needed} shards ({existing} already exist)...")

    workers = max(1, min(download_workers, needed))
    with Pool(processes=workers) as pool:
        results = pool.map(download_single_shard, ids)

    ok = sum(1 for r in results if r)
    print(f"Data: {ok}/{len(ids)} shards ready at {DATA_DIR}")
```

Descarga paralela con `multiprocessing.Pool` para maximizar el ancho de banda y asegurar que el shard de validación siempre esté disponible.

```python
def train_tokenizer():
    """Train BPE tokenizer using rustbpe, save as tiktoken pickle."""
    tokenizer_pkl = os.path.join(TOKENIZER_DIR, "tokenizer.pkl")
    token_bytes_path = os.path.join(TOKENIZER_DIR, "token_bytes.pt")

    if os.path.exists(tokenizer_pkl) and os.path.exists(token_bytes_path):
        print(f"Tokenizer: already trained at {TOKENIZER_DIR}")
        return

    os.makedirs(TOKENIZER_DIR, exist_ok=True)

    parquet_files = list_parquet_files()
    if len(parquet_files) < 2:
        print("Tokenizer: need at least 2 data shards (1 train + 1 val). Download more data first.")
        sys.exit(1)

    tokenizer = rustbpe.Tokenizer()
    vocab_size_no_special = VOCAB_SIZE - len(SPECIAL_TOKENS)
    tokenizer.train_from_iterator(text_iterator(), vocab_size_no_special, pattern=SPLIT_PATTERN)

    pattern = tokenizer.get_pattern()
    mergeable_ranks = {bytes(k): v for k, v in tokenizer.get_mergeable_ranks()}
    tokens_offset = len(mergeable_ranks)
    special_tokens = {name: tokens_offset + i for i, name in enumerate(SPECIAL_TOKENS)}
    enc = tiktoken.Encoding(
        name="rustbpe",
        pat_str=pattern,
        mergeable_ranks=mergeable_ranks,
        special_tokens=special_tokens,
    )

    with open(tokenizer_pkl, "wb") as f:
        pickle.dump(enc, f)
```

Entrenamiento de BPE de alto rendimiento mediante la librería en Rust `rustbpe`, empaquetando el resultado en un objeto serializado compatible con `tiktoken`.

```python
    token_bytes_list = []
    for token_id in range(enc.n_vocab):
        token_str = enc.decode([token_id])
        if token_str in special_set:
            token_bytes_list.append(0)
        else:
            token_bytes_list.append(len(token_str.encode("utf-8")))
    token_bytes_tensor = torch.tensor(token_bytes_list, dtype=torch.int32)
    torch.save(token_bytes_tensor, token_bytes_path)
```

Generación de `token_bytes.pt`: Se almacena una tabla de búsqueda que contiene la longitud exacta en bytes UTF-8 de cada token. Esto es fundamental para computar `val_bpb`, dividiendo la pérdida en nats entre el logaritmo natural de 2 y ponderando por los bytes reales de texto, excluyendo tokens especiales.

El script también provee la función `make_dataloader()`, que implementa un algoritmo de empaquetado óptimo (best-fit packing) para combinar documentos de diferentes longitudes en secuencias exactas de 2048 tokens sin necesidad de padding, logrando un 100% de utilización del cómputo en GPU.

## Análisis Profundo: train.py - El Archivo que Modifica el Agente de IA

`train.py` es el núcleo donde se ejecuta todo el entrenamiento. Analicemos sus componentes principales.

```python
"""
Autoresearch pretraining script. Single-GPU, single-file.
Cherry-picked and simplified from nanochat.
Usage: uv run train.py
"""
import os
os.environ["PYTORCH_ALLOC_CONF"] = "expandable_segments:True"
os.environ["HF_HUB_DISABLE_PROGRESS_BARS"] = "1"

import gc
import math
import time
from dataclasses import dataclass, asdict

import torch
import torch.nn as nn
import torch.nn.functional as F

from kernels import get_kernel
cap = torch.cuda.get_device_capability()
repo = "varunneal/flash-attention-3" if cap == (9, 0) else "kernels-community/flash-attn3"
fa3 = get_kernel(repo).flash_attn_interface
from prepare import MAX_SEQ_LEN, TIME_BUDGET, Tokenizer, make_dataloader, evaluate_bpb
```

Configuración inicial del entorno:
- `PYTORCH_ALLOC_CONF="expandable_segments:True"`: Evita la fragmentación de memoria en la GPU.
- Carga dinámica del kernel de **Flash Attention 3** según la arquitectura de la GPU (detectando si es Hopper H100 con capacidad 9.0 o modelos previos).

### Configuración del Modelo y Bloques Constructivos

```python
@dataclass
class GPTConfig:
    sequence_len: int = 2048
    vocab_size: int = 32768
    n_layer: int = 12
    n_head: int = 6
    n_kv_head: int = 6
    n_embd: int = 768
    window_pattern: str = "SSSL"
```

La clase `GPTConfig` encapsula la arquitectura:
- `n_layer = 12`: Número de bloques transformadores.
- `n_head = 6` y `n_kv_head = 6`: Cabezales de atención y de Key-Value (permitiendo Grouped Query Attention).
- `n_embd = 768`: Dimensión del embedding.
- `window_pattern = "SSSL"`: Patrón de atención deslizante donde 'S' indica ventana corta (la mitad del contexto) y 'L' ventana larga (contexto completo).

```python
def norm(x):
    return F.rms_norm(x, (x.size(-1),))

def has_ve(layer_idx, n_layer):
    """Returns True if layer should have Value Embedding (alternating, last always included)."""
    return layer_idx % 2 == (n_layer - 1) % 2

def apply_rotary_emb(x, cos, sin):
    assert x.ndim == 4
    d = x.shape[3] // 2
    x1, x2 = x[..., :d], x[..., d:]
    y1 = x1 * cos + x2 * sin
    y2 = x1 * (-sin) + x2 * cos
    return torch.cat([y1, y2], 3)
```

Funciones auxiliares:
- `norm(x)`: Implementa RMSNorm (Root Mean Square Normalization), más eficiente que LayerNorm tradicional.
- `has_ve`: Determina qué capas incorporan Value Embeddings (ResFormer) de manera alternada.
- `apply_rotary_emb`: Aplica Rotary Position Embeddings (RoPE) rotando pares de coordenadas en el espacio vectorial.

### Mecanismo de Atención y Perceptrón Multicapa (MLP)

```python
class CausalSelfAttention(nn.Module):
    def __init__(self, config, layer_idx):
        super().__init__()
        self.n_head = config.n_head
        self.n_kv_head = config.n_kv_head
        self.n_embd = config.n_embd
        self.head_dim = self.n_embd // self.n_head
        assert self.n_embd % self.n_head == 0
        assert self.n_kv_head <= self.n_head and self.n_head % self.n_kv_head == 0
        self.c_q = nn.Linear(self.n_embd, self.n_head * self.head_dim, bias=False)
        self.c_k = nn.Linear(self.n_embd, self.n_kv_head * self.head_dim, bias=False)
        self.c_v = nn.Linear(self.n_embd, self.n_kv_head * self.head_dim, bias=False)
        self.c_proj = nn.Linear(self.n_embd, self.n_embd, bias=False)
        self.ve_gate_channels = 32
        self.ve_gate = nn.Linear(self.ve_gate_channels, self.n_kv_head, bias=False) if has_ve(layer_idx, config.n_layer) else None

    def forward(self, x, ve, cos_sin, window_size):
        B, T, C = x.size()
        q = self.c_q(x).view(B, T, self.n_head, self.head_dim)
        k = self.c_k(x).view(B, T, self.n_kv_head, self.head_dim)
        v = self.c_v(x).view(B, T, self.n_kv_head, self.head_dim)

        if ve is not None:
            ve = ve.view(B, T, self.n_kv_head, self.head_dim)
            gate = 2 * torch.sigmoid(self.ve_gate(x[..., :self.ve_gate_channels]))
            v = v + gate.unsqueeze(-1) * ve

        cos, sin = cos_sin
        q, k = apply_rotary_emb(q, cos, sin), apply_rotary_emb(k, cos, sin)
        q, k = norm(q), norm(k)

        y = fa3.flash_attn_func(q, k, v, causal=True, window_size=window_size)
        y = y.contiguous().view(B, T, -1)
        y = self.c_proj(y)
        return y
```

Detalles de la atención:
- Proyecciones lineales sin sesgo (`bias=False`).
- Integración de Value Embeddings modulados por una compuerta sigmoide escalada por 2 (`2 * sigmoid(...)`).
- Normalización QK (`q, k = norm(q), norm(k)`) antes de invocar la función optimizada de Flash Attention 3.

```python
class MLP(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.c_fc = nn.Linear(config.n_embd, 4 * config.n_embd, bias=False)
        self.c_proj = nn.Linear(4 * config.n_embd, config.n_embd, bias=False)

    def forward(self, x):
        x = self.c_fc(x)
        x = F.relu(x).square()
        x = self.c_proj(x)
        return x

class Block(nn.Module):
    def __init__(self, config, layer_idx):
        super().__init__()
        self.attn = CausalSelfAttention(config, layer_idx)
        self.mlp = MLP(config)

    def forward(self, x, ve, cos_sin, window_size):
        x = x + self.attn(norm(x), ve, cos_sin, window_size)
        x = x + self.mlp(norm(x))
        return x
```

El bloque MLP expande la dimensión por 4 y aplica la función de activación **ReLU al cuadrado** (`relu(x).square()`), una variante no lineal de alto desempeño en transformadores recientes. La estructura del bloque adopta un esquema de pre-normalización (Pre-LN).

### La Red GPT Completa y Escalado Adaptativo

```python
class GPT(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.config = config
        self.window_sizes = self._compute_window_sizes(config)
        self.transformer = nn.ModuleDict({
            "wte": nn.Embedding(config.vocab_size, config.n_embd),
            "h": nn.ModuleList([Block(config, i) for i in range(config.n_layer)]),
        })
        self.lm_head = nn.Linear(config.n_embd, config.vocab_size, bias=False)
        self.resid_lambdas = nn.Parameter(torch.ones(config.n_layer))
        self.x0_lambdas = nn.Parameter(torch.zeros(config.n_layer))
        
        head_dim = config.n_embd // config.n_head
        kv_dim = config.n_kv_head * head_dim
        self.value_embeds = nn.ModuleDict({
            str(i): nn.Embedding(config.vocab_size, kv_dim)
            for i in range(config.n_layer) if has_ve(i, config.n_layer)
        })
        
        self.rotary_seq_len = config.sequence_len * 10
        cos, sin = self._precompute_rotary_embeddings(self.rotary_seq_len, head_dim)
        self.register_buffer("cos", cos, persistent=False)
        self.register_buffer("sin", sin, persistent=False)
```

Características avanzadas de `GPT`:
- `resid_lambdas` y `x0_lambdas`: Parámetros escalares aprendibles que ponderan las conexiones residuales en cada capa (`x = resid_lambdas[i] * x + x0_lambdas[i] * x0`), permitiendo regular con precisión el flujo de información a través de la red profunda.
- Búferes rotatorios precomputados con longitud 10 veces mayor para facilitar la extrapolación de contexto.

```python
    def forward(self, idx, targets=None, reduction='mean'):
        B, T = idx.size()
        assert T <= self.cos.size(1)
        cos_sin = self.cos[:, :T], self.sin[:, :T]

        x = self.transformer.wte(idx)
        x = norm(x)
        x0 = x
        for i, block in enumerate(self.transformer.h):
            x = self.resid_lambdas[i] * x + self.x0_lambdas[i] * x0
            ve = self.value_embeds[str(i)](idx) if str(i) in self.value_embeds else None
            x = block(x, ve, cos_sin, self.window_sizes[i])
        x = norm(x)

        softcap = 15
        logits = self.lm_head(x)
        logits = logits.float()
        logits = softcap * torch.tanh(logits / softcap)

        if targets is not None:
            loss = F.cross_entropy(logits.view(-1, logits.size(-1)), targets.view(-1),
                                   ignore_index=-1, reduction=reduction)
            return loss
        return logits
```

Nótese el uso de **softcapping**: `softcap * tanh(logits / softcap)` con un valor límite de 15. Esto acota la magnitud de los logits evitando inestabilidades numéricas en la entropía cruzada.

### El Optimizador Híbrido: MuonAdamW

El script implementa un optimizador combinado personalizado: utiliza **Muon** para matrices bidimensionales y **AdamW** para el resto de los parámetros (embeddings, cabezal de salida y escalares).

```python
polar_express_coeffs = [
    (8.156554524902461, -22.48329292557795, 15.878769915207462),
    (4.042929935166739, -2.808917465908714, 0.5000178451051316),
    (3.8916678022926607, -2.772484153217685, 0.5060648178503393),
    (3.285753657755655, -2.3681294933425376, 0.46449024233003106),
    (2.3465413258596377, -1.7097828382687081, 0.42323551169305323),
]
```

Coeficientes fijos para el procedimiento de ortogonalización **Polar Express**, que realiza pasos estilo Newton en la variedad matricial para alinear los gradientes.

```python
@torch.compile(dynamic=False, fullgraph=True)
def adamw_step_fused(p, grad, exp_avg, exp_avg_sq, step_t, lr_t, beta1_t, beta2_t, eps_t, wd_t):
    p.mul_(1 - lr_t * wd_t)
    exp_avg.lerp_(grad, 1 - beta1_t)
    exp_avg_sq.lerp_(grad.square(), 1 - beta2_t)
    bias1 = 1 - beta1_t ** step_t
    bias2 = 1 - beta2_t ** step_t
    denom = (exp_avg_sq / bias2).sqrt() + eps_t
    step_size = lr_t / bias1
    p.add_(exp_avg / denom, alpha=-step_size)
```

Paso fusionado de AdamW compilado con `torch.compile(fullgraph=True)`.

```python
@torch.compile(dynamic=False, fullgraph=True)
def muon_step_fused(stacked_grads, stacked_params, momentum_buffer, second_momentum_buffer,
                    muon_momentum_t, lr_t, wd_t, beta2_t, ns_steps, red_dim):
    # Nesterov momentum
    momentum = muon_momentum_t.to(stacked_grads.dtype)
    momentum_buffer.lerp_(stacked_grads, 1 - momentum)
    g = stacked_grads.lerp_(momentum_buffer, momentum)

    # Polar express orthogonalization
    X = g.bfloat16()
    X = X / (X.norm(dim=(-2, -1), keepdim=True) * 1.02 + 1e-6)
    if g.size(-2) > g.size(-1):
        for a, b, c in polar_express_coeffs[:ns_steps]:
            A = X.mT @ X
            B = b * A + c * (A @ A)
            X = a * X + X @ B
    else:
        for a, b, c in polar_express_coeffs[:ns_steps]:
            A = X @ X.mT
            B = b * A + c * (A @ A)
            X = a * X + B @ X
    g = X

    # NorMuon variance reduction
    beta2 = beta2_t.to(g.dtype)
    v_mean = g.float().square().mean(dim=red_dim, keepdim=True)
    red_dim_size = g.size(red_dim)
    v_norm_sq = v_mean.sum(dim=(-2, -1), keepdim=True) * red_dim_size
    v_norm = v_norm_sq.sqrt()
    second_momentum_buffer.lerp_(v_mean.to(dtype=second_momentum_buffer.dtype), 1 - beta2)
    step_size = second_momentum_buffer.clamp_min(1e-10).rsqrt()
    scaled_sq_sum = (v_mean * red_dim_size) * step_size.float().square()
    v_norm_new = scaled_sq_sum.sum(dim=(-2, -1), keepdim=True).sqrt()
    final_scale = step_size * (v_norm / v_norm_new.clamp_min(1e-10))
    g = g * final_scale.to(g.dtype)

    # Cautious weight decay + parameter update
    lr = lr_t.to(g.dtype)
    wd = wd_t.to(g.dtype)
    mask = (g * stacked_params) >= 0
    stacked_params.sub_(lr * g + lr * wd * stacked_params * mask)
```

El algoritmo Muon aplica:
1. Momento de Nesterov.
2. Ortogonalización Polar Express sobre matrices 2D.
3. Reducción de varianza **NorMuon** para normalizar el ruido por filas o columnas.
4. **Decaimiento de pesos cauteloso (cautious weight decay)**: Solo penaliza los pesos cuando el gradiente y el parámetro tienen el mismo signo (`(g * stacked_params) >= 0`).

### Hiperparámetros y Bucle de Entrenamiento

```python
# Arquitectura del modelo
ASPECT_RATIO = 64       # model_dim = depth * ASPECT_RATIO
HEAD_DIM = 128          # dimensión objetivo por cabezal
WINDOW_PATTERN = "SSSL" # patrón de atención deslizante

# Optimización
TOTAL_BATCH_SIZE = 2**19 # ~524K tokens por paso de optimizador
EMBEDDING_LR = 0.6      # learning rate para embeddings
UNEMBEDDING_LR = 0.004  # learning rate para lm_head
MATRIX_LR = 0.04        # learning rate para matrices (Muon)
SCALAR_LR = 0.5         # learning rate para escalares
WEIGHT_DECAY = 0.2      # decaimiento de peso en Muon
ADAM_BETAS = (0.8, 0.95) # betas en Adam
WARMUP_RATIO = 0.0      # fracción de calentamiento
WARMDOWN_RATIO = 0.5    # fracción de enfriamiento
FINAL_LR_FRAC = 0.0     # tasa final

# Tamaño del modelo
DEPTH = 8               # número de capas
DEVICE_BATCH_SIZE = 128  # tamaño de lote por dispositivo
```

El script calcula la acumulación de gradientes para procesar exactamente `TOTAL_BATCH_SIZE = 524,288` tokens por paso.

El bucle de entrenamiento ejecuta pasos continuos, actualizando los multiplicadores de tasa de aprendizaje y momento en función del progreso temporal (`min(total_training_time / TIME_BUDGET, 1.0)`). Excluye los primeros 10 pasos para no penalizar la sobrecarga de compilación de PyTorch en el cómputo de los 300 segundos netos. Al terminar, invoca `evaluate_bpb()` e imprime las estadísticas finales que el agente parsea.

## Análisis Profundo: program.md - Cómo Darle Instrucciones al Agente

El archivo `program.md` establece las directrices operativas que rigen al agente autónomo. Revisemos sus secciones principales:

```markdown
# autoresearch

This is an experiment to have the LLM do its own research.

## Setup

To set up a new experiment, work with the user to:

1. **Agree on a run tag**: propose a tag based on today's date (e.g. `mar5`). The branch `autoresearch/<tag>` must not already exist, this is a fresh run.
2. **Create the branch**: `git checkout -b autoresearch/<tag>` from current master.
3. **Read the in-scope files**: The repo is small. Read these files for full context:
   - `README.md`, repository context.
   - `prepare.py`, fixed constants, data prep, tokenizer, dataloader, evaluation. Do not modify.
   - `train.py`, the file you modify. Model architecture, optimizer, training loop.
4. **Verify data exists**: Check that `~/.cache/autoresearch/` contains data shards and a tokenizer. If not, tell the human to run `uv run prepare.py`.
5. **Initialize results.tsv**: Create `results.tsv` with just the header row. The baseline will be recorded after the first run.
6. **Confirm and go**: Confirm setup looks good.
```

El protocolo de inicio exige:
- Proponer un tag descriptivo basado en la fecha.
- Crear una rama git aislada.
- Verificar que los datos y el tokenizador estén presentes en la caché.
- Inicializar `results.tsv` sin rastrearlo en git.

```markdown
## Experimentation

Each experiment runs on a single GPU. The training script runs for a **fixed time budget of 5 minutes** (wall clock training time, excluding startup/compilation). You launch it simply as: `uv run train.py`.

**What you CAN do:**
- Modify `train.py`, this is the only file you edit. Everything is fair game: model architecture, optimizer, hyperparameters, training loop, batch size, model size, etc.

**What you CANNOT do:**
- Modify `prepare.py`. It is read-only. It contains the fixed evaluation, data loading, tokenizer, and training constants.
- Install new packages or add dependencies.
- Modify the evaluation harness.

**The goal is simple: get the lowest val_bpb.**

**Simplicity criterion**: All else being equal, simpler is better. A small improvement that adds ugly complexity is not worth it. Conversely, removing something and getting equal or better results is a great outcome.
```

Reglas estrictas de juego:
- Solo se puede modificar `train.py`.
- No se pueden añadir dependencias externas ni modificar `prepare.py`.
- Se prioriza el criterio de simplicidad sobre mejoras marginales con alta complejidad.

```markdown
## The experiment loop

LOOP FOREVER:

1. Look at the git state: the current branch/commit we are on
2. Tune `train.py` with an experimental idea by directly hacking the code.
3. git commit
4. Run the experiment: `uv run train.py > run.log 2>&1`
5. Read out the results: `grep "^val_bpb:\|^peak_vram_mb:" run.log`
6. If the grep output is empty, the run crashed. Run `tail -n 50 run.log` to read the Python stack trace and attempt a fix.
7. Record the results in the tsv (NOTE: do not commit the results.tsv file)
8. If val_bpb improved (lower), you "advance" the branch, keeping the git commit
9. If val_bpb is equal or worse, you git reset back to where you started

**NEVER STOP**: Once the experiment loop has begun, do NOT pause to ask the human if you should continue. The human might be asleep and expects you to continue working indefinitely until you are manually stopped.
```

La directiva **NEVER STOP** es el corazón de la autonomía: una vez iniciado el ciclo, el agente no debe consultar al usuario si debe continuar, sino iterar indefinidamente explorando ideas, combinando variaciones y acumulando mejoras.

## ¿Qué Descubrió Realmente el Agente?

En las notas compartidas por Andrej Karpathy, el agente ejecutó cerca de 700 experimentos en dos días, encontrando unas 20 modificaciones que mejoraron consistentemente la pérdida de validación. Todas estas optimizaciones fueron aditivas y se trasladaron con éxito a arquitecturas mayores (de profundidad 8 a 24 capas).

Entre los hallazgos más destacados se encuentran:

1. **Multiplicador de escala en QK Normalization**:
   El autor había implementado una normalización QK sin parámetros (`norm(q), norm(k)`). El agente detectó que la atención resultante era demasiado difusa e introdujo multiplicadores aprendibles que agudizaron la distribución de atención, elevando la precisión predictiva.

2. **Regularización en Value Embeddings**:
   Los Value Embeddings se encontraban en un grupo de parámetros sin decaimiento de peso (`weight_decay=0.0`). El agente descubrió que aplicar regularización prevenía el sobreajuste y reducía significativamente el error de validación.

3. **Ajuste de la Atención en Ventanas (Banded Attention)**:
   La configuración original de ventanas de atención deslizante era excesivamente restrictiva. El agente reajustó las proporciones de contexto largo y corto mejorando la captura de dependencias a distintas distancias.

4. **Corrección de los parámetros Beta en AdamW**:
   Los valores iniciales `(0.8, 0.95)` resultaban subóptimos. El agente encontró configuraciones de momento y segundo momento más estables para la dinámica del modelo.

5. **Cronograma de Decaimiento de Pesos**:
   El agente reconfiguró la curva de decaimiento en el optimizador Muon, optimizando la regularización a lo largo del tiempo de entrenamiento.

6. **Inicialización de Pesos de la Red**:
   Ajustó las constantes de inicialización uniforme en las proyecciones lineales, mejorando el flujo de gradientes en las primeras etapas de aprendizaje.

El impacto global: una reducción en la métrica "Time to GPT-2" de **2.02 horas a 1.80 horas** (casi 22 minutos de aceleración), logrando el mismo nivel de calidad con un 11% menos de cómputo.

## Por Qué Importa: El Futuro de la Investigación en IA

Autoresearch demuestra que la optimización de código y arquitecturas de aprendizaje profundo puede ser delegada con éxito a agentes de lenguaje autónomos. En lugar de que un ingeniero pase semanas ajustando perillas a mano, un enjambre de agentes puede explorar miles de combinaciones sistemáticamente durante la noche.

Para desarrolladores independientes y equipos pequeños, esto democratiza capacidades de investigación antes reservadas a gigantes tecnológicos. Para los grandes laboratorios de frontera, representa la automatización del ciclo de experimentación, escalando ideas prometedoras desde modelos pequeños hacia clusters masivos de supercómputo.

## ¿Es Seguro? Consideraciones de Riesgo y Supervisión

La investigación autónoma mediante agentes acotados presenta un perfil de seguridad altamente controlado:
- **Límites estrictos de ejecución**: El agente opera confinado en un único archivo (`train.py`), sin permisos para alterar infraestructura (`prepare.py`) ni instalar dependencias externas.
- **Entorno cerrado y reproducible**: Las ejecuciones están limitadas en tiempo (5 minutos) y los fallos simplemente se revierten mediante git.
- **Supervisión humana estratégica**: El investigador humano define el marco conceptual, las restricciones y valida los resultados finales antes de promoverlos a producción.

## Conclusión

El proyecto Autoresearch de Andrej Karpathy demuestra de manera tangible el poder de los agentes de IA aplicados a la ciencia y la ingeniería de software:
- Una arquitectura minimalista de tres archivos (`prepare.py`, `train.py`, `program.md`).
- Un protocolo de evaluación riguroso y justo basado en un presupuesto fijo de 5 minutos y la métrica `val_bpb`.
- Un mecanismo de control de versiones con git que garantiza avances acumulativos sin riesgo de regresiones.
- Descubrimientos reales y aditivos que aceleraron el entrenamiento de modelos tipo GPT-2 en un 11%.

La investigación en inteligencia artificial está transitando de la experimentación manual a la dirección de enjambres autónomos de investigación. El código está disponible en código abierto para que cualquier desarrollador con acceso a una GPU pueda desplegar sus propios agentes y explorar nuevas fronteras de optimización.
