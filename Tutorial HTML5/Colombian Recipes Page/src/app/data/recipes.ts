export interface Recipe {
  id: number;
  name: string;
  region: string;
  image: string;
  description: string;
  history: string;
  ingredients: string[];
  difficulty: 'Fácil' | 'Media' | 'Difícil';
  time: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Ajiaco Bogotano",
    region: "Andina",
    image: "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhamlhY28lMjBjb2xvbWJpYW5vJTIwc291cHxlbnwxfHx8fDE3NzQ0OTM2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sopa espesa con tres tipos de papa, pollo y mazorca, servida con crema de leche, alcaparras y aguacate.",
    history: "El Ajiaco es considerado el plato más representativo de Bogotá. Su origen se remonta a la época precolombina, cuando los muiscas preparaban sopas con papas nativas. Con la llegada de los españoles, se incorporó el pollo, creando la receta que conocemos hoy. El nombre 'ajiaco' proviene del ají, aunque la versión moderna no es picante. Tradicionalmente se servía los jueves y domingos en las casas bogotanas.",
    ingredients: ["Pollo", "Papa criolla", "Papa sabanera", "Papa pastusa", "Mazorca", "Guascas", "Crema de leche", "Alcaparras", "Aguacate"],
    difficulty: "Media",
    time: "2 horas"
  },
  {
    id: 2,
    name: "Bandeja Paisa",
    region: "Andina",
    image: "https://images.unsplash.com/photo-1723693407562-bb4fcae76797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kZWphJTIwcGFpc2ElMjBjb2xvbWJpYW4lMjBmb29kfGVufDF8fHx8MTc3NDQ5MzY3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Plato abundante que incluye frijoles, arroz, carne molida, chicharrón, chorizo, huevo frito, plátano maduro, aguacate y arepa.",
    history: "La Bandeja Paisa es el símbolo gastronómico de Antioquia. Nació como la comida de los arrieros que transportaban café y mercancías por las montañas. Necesitaban alimentos calóricos y nutritivos para sus largas jornadas. Cada ingrediente tiene un propósito: los frijoles dan energía, la carne proteínas, el chicharrón grasas necesarias, y el plátano azúcares. En 2005 fue declarada patrimonio cultural de Antioquia.",
    ingredients: ["Frijoles rojos", "Arroz", "Carne molida", "Chicharrón", "Chorizo", "Huevo", "Plátano maduro", "Aguacate", "Arepa"],
    difficulty: "Media",
    time: "3 horas"
  },
  {
    id: 3,
    name: "Lechona Tolimense",
    region: "Andina",
    image: "https://images.unsplash.com/photo-1595506416490-8fc5f2e1fb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWNob25hJTIwY29sb21iaWFuYSUyMHBvcmt8ZW58MXx8fHwxNzc0NDkzNjc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Cerdo entero relleno de arroz, arveja, carne de cerdo y especias, asado durante horas en horno de leña.",
    history: "La Lechona es el plato más importante del Tolima y el Huila. Su origen está en las festividades indígenas y coloniales, donde se sacrificaba un cerdo para celebraciones importantes. La preparación es todo un ritual que comienza la noche anterior, y tradicionalmente se hace en horno de barro. El secreto está en el punto de cocción perfecto: la piel debe quedar crocante y el interior jugoso. Se vende en las lechonerías desde la madrugada.",
    ingredients: ["Cerdo entero", "Arroz", "Arveja", "Cebolla", "Ajo", "Comino", "Sal", "Pimienta"],
    difficulty: "Difícil",
    time: "10-12 horas"
  },
  {
    id: 4,
    name: "Arepa de Huevo",
    region: "Caribe",
    image: "https://images.unsplash.com/photo-1719531491346-f4ff6785585f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmVwYSUyMGNvbG9tYmlhbmElMjBmcmllZHxlbnwxfHx8fDE3NzQ0OTM2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Arepa frita de maíz amarillo que se abre y se rellena con un huevo, luego se vuelve a freír hasta dorar.",
    history: "La Arepa de Huevo es un ícono del Caribe colombiano, especialmente de Cartagena y Barranquilla. Se cree que nació en los pueblos costeros como una forma de hacer más sustanciosa la arepa tradicional. El truco está en freír la arepa, abrirla cuidadosamente con un corte, introducir el huevo crudo, sellarla y volver a freír. Las areperas callejeras son famosas por su destreza al prepararlas sin que se rompa el huevo.",
    ingredients: ["Harina de maíz amarillo", "Huevos", "Sal", "Aceite para freír"],
    difficulty: "Media",
    time: "30 minutos"
  },
  {
    id: 5,
    name: "Sancocho de Pescado",
    region: "Caribe",
    image: "https://images.unsplash.com/photo-1665594051407-7385d281ad76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwc291cCUyMHNhbmNvY2hvfGVufDF8fHx8MTc3NDQ5MzY4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Sopa espesa de pescado fresco con yuca, plátano verde, mazorca y verduras, característico de la costa Caribe.",
    history: "El Sancocho de Pescado es el plato tradicional del litoral Caribe colombiano. Tiene raíces africanas, indígenas y españolas. Los pescadores lo preparaban con el pescado del día y los tubérculos disponibles. Cada pueblo costero tiene su versión: en Santa Marta usan róbalo, en Cartagena prefieren pargo. Se cocina en fogón de leña y se sirve con arroz de coco y patacones. Es el plato dominical por excelencia en los pueblos pesqueros.",
    ingredients: ["Pescado fresco", "Yuca", "Plátano verde", "Mazorca", "Ñame", "Cilantro", "Cebolla", "Tomate", "Ajo"],
    difficulty: "Media",
    time: "1.5 horas"
  },
  {
    id: 6,
    name: "Arroz con Coco",
    region: "Caribe",
    image: "https://images.unsplash.com/photo-1708631000778-51afb6ba2639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcmljZSUyMGFycm96fGVufDF8fHx8MTc3NDQ5MzY4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Arroz cocinado con leche de coco, que puede ser blanco (titoté) o tostado (con titi), dulce y aromático.",
    history: "El Arroz con Coco es una herencia directa de la cultura africana en el Caribe colombiano. Los esclavos africanos trajeron la técnica de cocinar con coco, que se fusionó con el arroz introducido por los españoles. El 'titi' es el coco caramelizado que se forma al cocinar la leche de coco, dándole un color marrón y sabor ahumado al arroz. Es el acompañamiento perfecto para pescados y mariscos. En Cartagena y San Andrés es impensable un plato de pescado sin este arroz.",
    ingredients: ["Arroz", "Coco rallado", "Agua", "Azúcar", "Sal", "Pasas (opcional)"],
    difficulty: "Media",
    time: "1 hora"
  },
  {
    id: 7,
    name: "Empanadas Vallunas",
    region: "Pacífica",
    image: "https://images.unsplash.com/photo-1726514734441-dde9eabd9208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBlbXBhbmFkYXMlMjBmcmllZHxlbnwxfHx8fDE3NzQ0OTM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Empanadas grandes de harina de maíz con relleno de papa, carne molida y hogao, típicas de Cali y el Valle del Cauca.",
    history: "Las Empanadas Vallunas son el snack más popular del Valle del Cauca. A diferencia de otras empanadas colombianas, estas se hacen con harina de maíz blanco y son más grandes y gruesas. El relleno lleva papa criolla, carne molida y un hogao bien condimentado. Se dice que nacieron en las galerías de Cali como comida rápida para los trabajadores. El secreto está en el punto de fritura: deben quedar doradas y crujientes por fuera, suaves por dentro.",
    ingredients: ["Harina de maíz", "Papa criolla", "Carne molida", "Cebolla", "Tomate", "Comino", "Ajo", "Aceite"],
    difficulty: "Fácil",
    time: "45 minutos"
  },
  {
    id: 8,
    name: "Mamona (Ternera a la Llanera)",
    region: "Orinoquía",
    image: "https://images.unsplash.com/photo-1708615017161-2eff302d0389?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwYmVlZiUyMHN0ZWFrfGVufDF8fHx8MTc3NDQ4ODkwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Ternera asada lentamente en varas de madera alrededor del fuego, marinada solo con sal, típica de los Llanos Orientales.",
    history: "La Mamona es el plato emblemático de los Llanos Orientales colombianos. Proviene de la tradición ganadera llanera, donde los vaqueros asaban la carne de ternera lechal (de menos de un año) en el campo. Se cocina ensartada en varas de madera alrededor de una fogata, dejando que el calor indirecto cocine la carne lentamente durante horas. Solo se sazona con sal gruesa. La carne queda tierna, jugosa y con un sabor ahumado único. Se acompaña con yuca y plátano maduro.",
    ingredients: ["Ternera lechal", "Sal gruesa", "Yuca", "Plátano maduro"],
    difficulty: "Difícil",
    time: "4-6 horas"
  },
  {
    id: 9,
    name: "Tamales",
    region: "Andina",
    image: "https://images.unsplash.com/photo-1732118070605-8c5faa62d284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW1hbGVzJTIwd3JhcHBlZCUyMGNvcm58ZW58MXx8fHwxNzc0NDkzNjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Masa de maíz rellena de carne de cerdo, pollo, arroz, verduras y especias, envuelta en hojas de plátano y cocida al vapor.",
    history: "Los Tamales son uno de los platos más antiguos de Colombia, con raíces precolombinas. Cada región tiene su versión: tolimenses, santafereños, vallunos, antioqueños. Los indígenas ya envolvían alimentos en hojas para cocinarlos al vapor. Con la colonia se agregaron ingredientes europeos. Preparar tamales es una tradición familiar que se hace en grandes cantidades, especialmente en Navidad y festividades. El proceso puede tomar todo un día, y es común reunir a la familia para armarlos.",
    ingredients: ["Masa de maíz", "Cerdo", "Pollo", "Arroz", "Zanahoria", "Arveja", "Huevo", "Hojas de plátano", "Especias"],
    difficulty: "Difícil",
    time: "4-5 horas"
  },
  {
    id: 10,
    name: "Buñuelos",
    region: "Andina",
    image: "https://images.unsplash.com/photo-1738717201678-412395e65b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidSVDMyVCMXVlbG9zJTIwZnJpZWQlMjBkb3VnaHxlbnwxfHx8fDE3NzQ0OTM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Bolitas fritas de masa de maíz y queso, crujientes por fuera y suaves por dentro, tradicionales en Navidad.",
    history: "Los Buñuelos llegaron a Colombia con los españoles, pero se adaptaron usando ingredientes locales como el maíz y el queso costeño. Se convirtieron en el símbolo de la Navidad colombiana. Cada familia tiene su receta secreta para lograr buñuelos perfectamente redondos y sin grietas. Se preparan en grandes cantidades durante diciembre y se comparten con vecinos y amigos. En muchos pueblos hay concursos de buñuelos. El reto es lograr que queden dorados, sin reventar y con el centro bien cocido.",
    ingredients: ["Harina de maíz", "Queso costeño", "Almidón de yuca", "Huevos", "Azúcar", "Polvo de hornear", "Aceite"],
    difficulty: "Media",
    time: "1 hora"
  },
  {
    id: 11,
    name: "Pescado Moquillado",
    region: "Amazonía",
    image: "https://images.unsplash.com/photo-1764150673466-da28d5d5ad5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwZmlzaCUyMHRyb3BpY2FsfGVufDF8fHx8MTc3NDQ5MzY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Pescado de río envuelto en hojas de bijao, cocido al vapor con especias amazónicas y hierbas nativas.",
    history: "El Pescado Moquillado es una técnica de cocción ancestral de las comunidades indígenas amazónicas. La palabra 'moquillado' viene de 'moquer', que significa ahumar o cocinar al vapor. Se utiliza pescado fresco del río Amazonas como el pirarucú o el gamitana, envuelto en hojas de bijao (una planta aromática) y cocido sobre brasas. Las hojas le dan un sabor único al pescado. Es una preparación ecológica y saludable que respeta los ingredientes nativos de la selva.",
    ingredients: ["Pescado de río", "Hojas de bijao", "Ajo", "Cebolla", "Tomate", "Cilantro", "Ají amazónico", "Limón"],
    difficulty: "Media",
    time: "1 hora"
  },
  {
    id: 12,
    name: "Rondón",
    region: "Insular",
    image: "https://images.unsplash.com/photo-1641529148223-093a513ed44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJpYmJlYW4lMjBzZWFmb29kJTIwc3Rld3xlbnwxfHx8fDE3NzQ0OTM2ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Guiso caribeño de San Andrés y Providencia con pescado, caracol, yuca, ñame y plátano en leche de coco.",
    history: "El Rondón es el plato tradicional de San Andrés, Providencia y Santa Catalina. Su nombre proviene del inglés 'run down', que significa reducir o cocinar lentamente. Es una herencia de los esclavos africanos que mezclaron sus técnicas culinarias con ingredientes caribeños. Se prepara con los pescados y mariscos del día, cocinados en leche de coco con tubérculos y plátano. Cada familia tiene su receta, y es el plato que se prepara en celebraciones importantes de las islas.",
    ingredients: ["Pescado", "Caracol", "Yuca", "Ñame", "Plátano verde", "Leche de coco", "Ají", "Albahaca", "Pimienta"],
    difficulty: "Media",
    time: "2 horas"
  }
];

export const regions = [
  "Todas",
  "Andina",
  "Caribe",
  "Pacífica",
  "Orinoquía",
  "Amazonía",
  "Insular"
];
