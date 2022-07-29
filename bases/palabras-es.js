function getWord(id){
	return words[id];
}

words = [
{"word":"Aceite", "app":"Me gusta poner un poco de aceite en la ensalada.", "dic":"Óleo, azeite"},
{"word":"Acordar", "app":"Él acordó com los términos del contrato ", "dic":"Concordar"},
{"word":"Borrar", "app":"La niña borro los apuntes que la madre dejó en el papel.", "dic":"Apagar"},
{"word":"Asignatura", "app":"Este semestre tengo que estudiar la asignatura de español.", "dic":"Disciplina, matéria"},
{"word":"Padre", "app":"Pablo tuvo un hijo. Ahora es padre.", "dic":"Pai"},
{"word":"Ala", "app":"La ala del pájaro está herida.", "dic":"Asa"},
{"word":"Azar", "app":"El azar hizo que nos volviéramos a encontrar años después.", "dic":"Acaso"},
{"word":"Alejarse", "app":"El niño se alejó de su madre, mientras atravesaban la calle.", "dic":"Distanciar-se"},
{"word":"apellido", "app":"El apellido de Ana es Silva.", "dic":"Sobrenome"},
{"word":"aposento", "app":"Necesito de un aposento para esta noche.", "dic":"Hospedagem"},
{"word":"aula", "app":"El aula era pequeña para tantos alumños.", "dic":"Sala de aula"},
{"word":"berro", "app":"Ya resulta fácil ver berros en las fruterías.", "dic":"Agrião"},
{"word":"balón", "app":"Para jugar fútbol es imprescindible un balón.", "dic":"Bola"},
{"word":"bolsa", "app":"Salí del supermercado con muchas bolsas.", "dic":"Sacola plástica"},
{"word":"brincar", "app":"El canguro es un animal que brinca mucho.", "dic":"Saltar"},
{"word":"cana", "app":"Aunque es muy joven, ya tiene muchas canas.", "dic":"Cabelo branco"},
{"word":"cena", "app":"La cena será servida a las siete de la noche.", "dic":"Jantar"},
{"word":"chato", "app":"Aqui el suelo es plano.", "dic":"Liso, plano"},
{"word":"copo", "app":"Está cayendo copos de nieve afuera.", "dic":"Floco"},
{"word":"cachorro", "app":"Tengo un cachorro de gato.", "dic":"Filhote de mamífero"},
{"word":"calzada", "app":"El carro está en la calzada.", "dic":"Pista"},
{"word":"camada", "app":"Hay aqui una camada de pollitos.", "dic":"Ninhada"},
{"word":"cartón", "app":"Quiero una caja de cartón.", "dic":"Papelão"},
{"word":"cola", "app":"Hay una cola muy grande en la entrada del cine.", "dic":"Fila, rabo"},
{"word":"corrida", "app":"Estoy muy corrida con esta situación.", "dic":"Envergonhado, confuso"},
{"word":"crianza", "app":"Dejó su trabajo para dedicarse a la crianza de sus hijos.", "dic":"Criação"},
{"word":"caprichoso", "app":"María no desiste nunca. Es muy caprichosa.", "dic":"Teimoso"},
{"word":"cerrar", "app":"Cierre la puerta, por favor. ", "dic":"Fechar"},
{"word":"copa ", "app":"Tomar una copa de vino diarimente es benéfico.", "dic":"Taça"},
{"word":"doce", "app":"Tengo doce años.", "dic":"Doze"},
{"word":"dirección", "app":"Mi dirección es: calle Mayor, número dos.", "dic":"Endereço"},
{"word":"distinto", "app":"Las pruebas son distintas.", "dic":"Diferente"},
{"word":"engrasado", "app":"El sapato está engrasado.", "dic":"Engraxado"},
{"word":"escoba", "app":"La escoba nos ayuda a limpiar la casa.", "dic":"Vassoura"},
{"word":"escritorio", "app":"Los libros están sobre el escritorio.", "dic":"Escrivaninha"},
{"word":"esposas", "app":"No le quitaron las esposas hasta que el juez lo autorizó.", "dic":"Algemas"},
{"word":"experto", "app":"Pablo es experto en literatura.", "dic":"Experto, especialista"},
{"word":"exquisito", "app":"Esta comida está muy exquisita.", "dic":"Saboroso"},
{"word":"embarazada", "app":"María está embarazada de una niña.", "dic":"Grávida "},
{"word":"escena", "app":"Está es la escena más importante de la película", "dic":"cena"},
{"word":"flaco", "app":"Pablo está muy flaco. Ya perdío diez kilos.", "dic":"Magro"},
{"word":"fechar", "app":"María y Pablo van a fechar la boda.", "dic":"Datar"},
{"word":"ganancia", "app":"El negocio le reporta buenas ganancias.", "dic":"Lucro"},
{"word":"Película", "app":"La película tuvo dos horas de duración.", "dic":"Filme"},
{"word":"grasa", "app":"Hay mucha grasa en la cocina.", "dic":"Gordura"},
{"word":"habitación", "app":"Mi habitación es amplia.", "dic":"Quarto"},
{"word":"jornal", "app":"Los trabajadores piden que aumenten sus sueldos jornales.", "dic":"Diária"},
{"word":"largo", "app":"Marcos tiene cabellos largos.", "dic":"Comprido, longo"},
{"word":"lienzo", "app":"Este es un lienzo de Picasso.", "dic":"Tela, quadro"},
{"word":"mala", "app":"Eres una chica muy mala.", "dic":"Má"},
{"word":"oso", "app":"El oso es un mamífero carnívoro.", "dic":"Urso"},
{"word":"oficina", "app":"Cerca del hospital hay una oficina de publicidad.", "dic":"Escritório"},
{"word":"palco", "app":"Todos los palcos estaban ocupados en el espectáculo", "dic":"Camarote"},
{"word":"papelón", "app":"¡Vaya papelón hiciste al equivocarte en todas las preguntas!", "dic":"Papel de ridículo"},
{"word":"pipa", "app":"El señor siempre llevaba su pipa.", "dic":"Cachimbo"},
{"word":"polvo", "app":"Los muebles están llenos de polvo.", "dic":"Pó"},
{"word":"pelo", "app":"Tengo pelo negro y liso.", "dic":"Cabelo"},
{"word":"prejuicio", "app":"¡El prejuicio racial es un absurdo!", "dic":"Preconceito"},
{"word":"presunto", "app":"El hombre fue detenido por un presunto delito de violencia doméstica.", "dic":"Suposto"},
{"word":"presupuesto", "app":"Este es el presupuesto de la fiesta.", "dic":"Orçamento"},
{"word":"pronto", "app":"La comida fue preparada muy pronto.", "dic":"Rápido"},
{"word":"rato", "app":"Hace un rato que estoy esperándote.", "dic":"Momento, instante"},
{"word":"ratón", "app":"El ratón es un mamífero roedor.", "dic":"Rato"},
{"word":"rasgo", "app":"Tienes los mismos rasgos que tus padres.", "dic":"Característica, traço específico de algo ou alguém."},
{"word":"risco", "app":"El río fluye entre riscos formando muchas cascadas.", "dic":"Penhasco, falésia"},
{"word":"rojo", "app":"La bandera de España es roja y amarilla.", "dic":"Vermelho"},
{"word":"rubio", "app":"La chica de cabello rubio es mi hermana.", "dic":"Loiro"},
{"word":"salada", "app":"Este plato está muy salado.", "dic":"Salgada"},
{"word":"sitio", "app":"La inscripción del torneo se puede hacer en el sitio del instituto.", "dic":"Lugar, página web"},
{"word":"salsa", "app":"A mí me gusta la ensalada con mucha salsa.", "dic":"Molho"},
{"word":"sótano", "app":"En el sótano guardamos cosas viejas.", "dic":"Porão"},
{"word":"sobrenombre", "app":"Bibi es mi sobrenombre.", "dic":"Apelido"},
{"word":"suceso", "app":"Esta fue una semana llena de sucesos.", "dic":"Acontecimento"},
{"word":"tapa", "app":"Antes del plato principal, pediremos unas tapas.", "dic":"Aperitivo"},
{"word":"tapete", "app":"El tapete a cuadros está muy bonito.", "dic":"Pano de mesa"},
{"word":"taza", "app":"Dámelo una taza de café, por favor.", "dic":"Xícara"},
{"word":"Helado", "app":"Me gusta helado de fresa.", "dic":"Sorvete"},
{"word":"tienda", "app":"Esta es una tienda de zapatos.", "dic":"Loja"},
{"word":"tirar", "app":"El hombre tiró una flecha.", "dic":"Atirar, arremessar."},
{"word":"vaso", "app":"Pedi un vaso de agua.", "dic":"Copo"},
{"word":"zueco", "app":"Quiero este zueco rojo de tacón.", "dic":"Tamanco"},
{"word":"zurdo", "app":"No consigo escribir con la mano derecha. Soy zurdo.", "dic":"Canhoto"},
{"word":"balcón", "app":"La vista desde el balcón de tu habitación es muy bella.", "dic":"Varanda"},
{"word":"feria", "app":"Compré las legumbres en la feria.", "dic":"Feira"},
{"word":"taller", "app":"Voy a llevar mi carro a un taller para saber cúal es su problema.", "dic":"Oficina"},
{"word":"cubo", "app":"El cubo está lleno de agua sucia", "dic":"Balde"},
{"word":"raro", "app":"Este sonido es muy raro. ", "dic":"Esquisito"},
{"word":"escupir", "app":"No he dejado de escupir, desde que llegué.", "dic":"Cuspir"},
{"word":"despido", "app":"El empleado fue despido por retraso en el trabajo.", "dic":"Demitido"},
{"word":"comisaría", "app":"Llamaron en la comisaría con urgencia. ", "dic":"Delegacia"},
{"word":"boliche", "app":"Todos los sábados compraban bebidas en el boliche.", "dic":"Bar"},
{"word":"torta", "app":"Quiero una torta de chocolate.", "dic":"Bolo"},
{"word":"pastel", "app":"Comí un pastel de maíz hoy.", "dic":"Bolo"},
{"word":"abono", "app":"Las plantas necesitan de un poco más de abono.", "dic":"Adubo"},
{"word":"borracha", "app":"La mujer bebió mucho, Estaba borracha.", "dic":"Bêbada"},
{"word":"juguete", "app":"Los niños siempre esperan juguetes de navidad.", "dic":"Brinquedo"},
{"word":"Pelado", "app":"Generalmente, cuando somos mayores, nos quedamos pelados. ", "dic":"Careca"},
{"word":"Clase", "app":"Hoy tengo clase de español a las siete.", "dic":"Aula"},
{"word":"Almacenaje", "app":"El almacenaje de agua es importante en regiones con poca lluvia.", "dic":"Armazenagem"},
{"word":"Análisis", "app":"Voy a hacer un análisis de un poema.", "dic":"Análise"},
{"word":"Árbol", "app":"El árbol necesita de más agua.", "dic":"Árvore"},
{"word":"Cartílago", "app":"El cartílago de mi nariz está roto.", "dic":"Cartilagem"},
{"word":"Carruaje", "app":"El carruaje de la cenicienta fue hecho de calabaza.", "dic":"Carruagem"},
{"word":"Chantaje", "app":"Los terroristas secuestraron a su hijo para hacerle chantaje.", "dic":"Chantagem"},
{"word":"Color", "app":"El color de la blusa es verde.", "dic":"Cor"},
{"word":"Coraje", "app":"Tenho coraje para intentar nuevamente.", "dic":"Coragem"},
{"word":"Dolor", "app":"El niño lloraba mucho con dolor en su oído.", "dic":"Dor"},
{"word":"Espionaje", "app":"Me gustó aquella película de trataba de espionaje americana.", "dic":"Espionagem"},
{"word":"Equipaje", "app":"Voy a viajar y aún no terminé mi equipaje.", "dic":"Bagagem"},
{"word":"Equipo", "app":"La competición será entre equipos con cinco contricantes.", "dic":"Equipe"},
{"word":"Garaje", "app":"El carro está en el garaje.", "dic":"Garagem"},
{"word":"Homenaje", "app":"El homenaje a las madres fue muy bonita.", "dic":"Homenagem"},
{"word":"Hospedaje", "app":"El hospedaje completo cuesta ciento noventa euros.", "dic":"Hospedagem"},
{"word":"Humo", "app":"El humo de los carros es muy perjudicial a nuestra salud.", "dic":"Fumaça"},
{"word":"Kilometraje", "app":"El kilometraje permitido en esta carretera es hasta ochenta.", "dic":"Quilometragem"},
{"word":"Lenguaje", "app":"Se dirigió a ellos en un lenguaje que desconocían.", "dic":"Linguagem"},
{"word":"Linaje", "app":"Hago parte de un linaje indígena.", "dic":"Linhagem"},
{"word":"Mensaje", "app":"Te envié un mensaje ayer.", "dic":"Mensagem"},
{"word":"Montaje", "app":"El montaje de los muebles será a las cinco.", "dic":"Montagem"},
{"word":"Origen", "app":"Mi país de origen es China.", "dic":"Origem"},
{"word":"Paisaje", "app":"Este es un paisaje muy bonito.", "dic":"Paisagem"},
{"word":"Pasaje", "app":"El pasaje cuesta doce euros.", "dic":"Passagem"},
{"word":"Pétalo", "app":"Algunas flores carecen de pétalos.", "dic":"Pétala"},
{"word":"Plumaje", "app":"La armadura del caballero iba adornada por un plumaje rojo.", "dic":"Plumagem"},
{"word":"Porcentaje", "app":"El porcentaje del inmueble será depositado en su cuenta.", "dic":"Porcentagem"},
{"word":"Puente", "app":"En mi ciudad hay un puente.", "dic":"Ponte"},
{"word":"Sabotaje", "app":"Lo que hicieron aquí fue un gran sabotaje", "dic":"Sabotagem"},
{"word":"Tatuaje", "app":"Voy a hacer un tatuaje de calaveras.", "dic":"Tatuagem"},
{"word":"Testigo", "app":"El testigo sufrió un desmayo por la tensión del juicio.", "dic":"Testemunha"},
{"word":"Tulipán", "app":"Quiero un jardín de tulipán.", "dic":"Tulipa"},
{"word":"Vals", "app":"Me gusta bailar vals.", "dic":"Valsa"},
{"word":"Vendaje", "app":"Tenía que cambiar el vendaje de la herida a diario.", "dic":"Vendagem"},
{"word":"Vértigo", "app":"Cuando me levanto de la cama me da vértigo.", "dic":"Vertigem"},
{"word":"Viaje", "app":"Há sido un largo viaje.", "dic":"Viagem"},
{"word":"Voltaje", "app":"Este es un cable de alto voltaje.", "dic":"Voltagem"},
{"word":"Alarma", "app":"La alarma sonó a las siete en punto.", "dic":"Alarme"},
{"word":"Baraja", "app":"Saca dos barajas para jugar.", "dic":"Baralho"},
{"word":"Cárcel", "app":"El ladrón está en la cárcel.", "dic":"Cárcere"},
{"word":"Costumbre", "app":"Las torradas son una costumbre española.", "dic":"Costume"},
{"word":"Crema", "app":"Quiero un helado de chocolate con crema.", "dic":"Creme"},
{"word":"Cumbre", "app":"Construyeron un hotel en la cumbre.", "dic":"Cume"},
{"word":"Labor", "app":"Ha hecho una buena labor de restauración.", "dic":"Labor"},
{"word":"Leche", "app":"Quiero un café con leche.", "dic":"Leite"},
{"word":"Legumbre", "app":"Cenamos sopa de legumbres.", "dic":"Legume"},
{"word":"Licuadora", "app":"Ponga los ingredientes en la licuadora. ", "dic":"Liquidificador"},
{"word":"Miel", "app":"Me gusta un poco de miel en el desayuno.", "dic":"Mel"},
{"word":"Nariz", "app":"Pablo se hirió la nariz en la puerta.", "dic":"Nariz"},
{"word":"Pesadilla", "app":"Tuve una pesadilla ayer.", "dic":"Pesadelo"},
{"word":"Sangre", "app":"La sangre es roja.", "dic":"Sangue"},
{"word":"Señal", "app":"La Paloma es una señal de paz.", "dic":"Sinal"},
{"word":"Sonrisa", "app":"Tienes una sonrisa encantadora.", "dic":"Sorriso"},
{"word":"Academia", "app":"Voy a la academia todos los martes y viernes.", "dic":"Academia"},
{"word":"Alcohol", "app":"El alcohol es perjudicial a la salud.", "dic":"Álcool"},
{"word":"Alergia", "app":"Tengo alergia a polvo.", "dic":"Alergia"},
{"word":"Alguien", "app":"Alguien está llamándome afuera. ", "dic":"Alguém"},
{"word":"Atmósfera", "app":"En la reunión se respiraba una atmósfera acogedora.", "dic":"Atmosfera"},
{"word":"Burocracia", "app":"Con tanta burocracia, le atenderán cuando no lo necesite más.", "dic":"Burocracia"},
{"word":"Cerebro", "app":"Es usted un cerebro para la física.", "dic":"Cérebro"},
{"word":"Cóctel", "app":"El cóctel será servido a las ocho de la noche.", "dic":"Coquetel"},
{"word":"Cráter", "app":"En Marte se ha descubierto un cráter de un kilómetro y medio.", "dic":"Cratera"},
{"word":"Diplomacia", "app":"Mandaron expertos en diplomacia para negociar el tratado.", "dic":"Diplomacia"},
{"word":"Élite", "app":"La elite de la moda presentó la nueva colección.", "dic":"Elite"},
{"word":"Elogio", "app":"Elogio demasiado envanece.", "dic":"Elogio"},
{"word":"Epidemia", "app":"Una epidemia de crímenes asoló nuestra ciudad.", "dic":"Epidemia"},
{"word":"Euforia", "app":"El alcohol le produjo una euforia pasajera.", "dic":"Euforia"},
{"word":"Fobia", "app":"Tiene fobia a las arañas.", "dic":"Fobia"},
{"word":"Fútbol", "app":"El fútbol es una pasión brasileña.", "dic":"Futebol"},
{"word":"Gaucho", "app":"Los gauchos son excelentes jinetes.", "dic":"Gaúcho"},
{"word":"Hemorragia", "app":"Las hemorragias se detienen por el proceso de coagulación de la sangre.", "dic":"Hemorragia"},
{"word":"Héroe", "app":"Hércules es un héroe o semidiós.", "dic":"Herói"},
{"word":"Imán", "app":"Tú eres el imán y yo soy el metal", "dic":"Ímã"},
{"word":"Imbécil", "app":"No te comportes como un imbécil.", "dic":"Imbecil"},
{"word":"Límite", "app":"He llegado al límite de mi paciencia.", "dic":"Limite"},
{"word":"Magia", "app":"Hay magia en los cuentos de hadas.", "dic":"Magia"},
{"word":"Metro", "app":"Si vas en metro llegarás antes.", "dic":"Metrô"},
{"word":"Micrófono", "app":"El micrófono está posicionado para el cantante.", "dic":"Microfone"},
{"word":"Miope", "app":"No consigo ver de tan lejos, Soy miope.", "dic":"Míope"},
{"word":"Nivel", "app":"Ponga la lavadora en el nivel correcto de agua.", "dic":"Nível"},
{"word":"Nostalgia", "app":"Ver las fotos de familia me dá una nostalgia.", "dic":"Nostalgia"},
{"word":"Ortopedia", "app":"La ortopedia fabrica prótesis que funcionan cada vez mejor.", "dic":"Ortopedia"},
{"word":"Oxígeno", "app":"El oxígeno es un elemento químico gaseoso,esencial en la respiración.", "dic":"Oxigênio"},
{"word":"Pantano", "app":"El pantano huele muy mal.", "dic":"Pântano"},
{"word":"Parálisis", "app":"El señor tuvo parálisis en una de las piernas.", "dic":"Paralisia"},
{"word":"Parásito", "app":"Los piojos son parásitos del hombre.", "dic":"Parasita"},
{"word":"Policía", "app":"Un policía nos pidió la documentación.", "dic":"Polícia"},
{"word":"Prototipo", "app":"El prototipo de belleza va modificándose por épocas.", "dic":"Protótipo"},
{"word":"Psicópata", "app":"Psicópata es un enfermo mental.", "dic":"Psicopata"},
{"word":"Periferia", "app":"La periferia de la ciudad es olvidada por muchos governantes.", "dic":"Periferia"},
{"word":"Rúbrica", "app":"Tiene una rúbrica muy difícil de falsificar.", "dic":"Rubrica"},
{"word":"Régimen", "app":"En el régimen monárquico el centro es el rey.", "dic":"Regime"},
{"word":"Sarampión", "app":"El sarampión suele pasarse en la infancia.", "dic":"Sarampo"},
{"word":"Siderurgia", "app":"La siderurgia se dedica a la extracción y transformación del hierro.", "dic":"Siderurgia"},
{"word":"Síntoma", "app":"La fiebre suele ser síntoma de infección.", "dic":"Sintonia"},
{"word":"Teléfono", "app":"Todos los teléfonos de Madrid comienzan por 91.", "dic":"Telefone"},
{"word":"Télex", "app":"Las redacciones de los periódicos tienen télex.", "dic":"Telex, telegrama"},
{"word":"Firma", "app":"Necesito de tu firma en el contrato.", "dic":"assinatura."},
{"word":"Miércoles", "app":"El miércoles es un día de la semana.", "dic":"Quarta-feira"},
{"word":"Jueves", "app":"El jueves es el último día útil de la semana.", "dic":"Quinta-feira"},
{"word":"Ayuntamiento", "app":"El ayuntamiento es la sed del poder municipal.", "dic":"Prefeitura"}
]
