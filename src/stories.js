const stories = [
    {
        "id": 1,
        "title": "Bullying",
        "descriptionP": "Os colegas de Pedrinho ficam empurrando suas costas durante a aula, está sendo muito chato ir para a escola, e pedrinho se sente muito triste",
        "descriptionA": "Os colegas de Aninha ficam empurrando suas costas durante a aula, está sendo muito chato ir para a escola, e Aninha se sente muito triste",        
        "img": require("./imagens/bully.jpg"),
        "vertices":[
            {
                "value": "A",
                "textP": "É um dia chuvoso. A  mãe de Pedrinho foi acordar-lo. O que ele deve fazer?",
                "textA": "É um dia chuvoso. A  mãe de Aninha foi acordar-la. O que ela deve fazer?",
                "audios": ["rain.mp3", "thunder.mp3"],
                "img": require("./imagens/bully.jpg"),
                "arestas": [
                    {
                        "destiny": "B",
                        "text": "Levantar"
                    },
                    {
                        "destiny": "C",
                        "text":"Fingir que está doente"
                    },
                    {
                        "destiny": "D",
                        "text":"Contar para a sua mãe"
                    }
                ]
            },
            {
                "value": "B",
                "textP": "Pedrinho nem tomou café da manhã, ir para escola deixa ele sem fome. Ele entrou no carro com sua mãe, e sua mãe lhe perguntou o que estava acontecendo.",
                "textA": "Aninha nem tomou café da manhã, ir para escola deixa ela sem fome. Ela entrou no carro com sua mãe, e sua mãe lhe perguntou o que estava acontecendo.",
                "audios": ["rain.mp3"],
                "img": require("./imagens/bully.jpg"),
                "arestas":[
                    {
                        "destiny": "E",
                        "text":"Contar para ela"
                    },
                    {
                        "destiny": "F",
                        "text":"Melhor não falar nada"
                    }
                ]
            },
            {
                "value": "C",
                "textP":"A mãe de Pedrinho, tentou medir a temperatura dele com a mão, e percebeu que ele não estava quente. Após isso ela perguntou o que ele tem",
                "textA":"A mãe de Aninha, tentou medir a temperatura dela com a mão, e percebeu que ela não estava quente. Após isso ela perguntou o que Aninha tem",
                "audios": ["rain.mp3"],
                "img": require("./imagens/bully.jpg"),
                "arestas":[
                    {
                        "destiny":"B",
                        "text": "Falar que não é nada e levantar."
                    },
                    {
                        "destiny":"G",
                        "text": "Fingir que está com dor de barriga."
                    }
                ]
            },
            {
                "value": "D",
                "img": require("./imagens/bully.jpg"),
                "textP": "A mãe de Pedrinho ficou um pouco impressionada com o que estava acontecendo, ela o abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "textA": "A mãe de Aninha ficou um pouco impressionada com o que estava acontecendo, ela a abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "audios": ["rain.mp3"],
                "arestas": []
            },
            {
                "value": "E",
                "img": require("./imagens/bully.jpg"),
                "textP": " A mãe de Pedrinho ficou um pouco impressionada com o que estava acontecendo, ela o abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "textA": " A mãe de Aninha ficou um pouco impressionada com o que estava acontecendo, ela a abraçou e disse que iria até a escola conversar com a professora, as coisas finalmente vão começar a melhorar.",
                "audios": ["rain.mp3"],
                "arestas": []
            },
            {
                "value": "F",
                "img": require("./imagens/bully.jpg"),
                "textP": "Agora ele está na sala de aula, a professora está explicando a matéria, mas sempre que a professora vira para a lousa, os colegas  de classe de Pedrinho empurram as costas dele e dão risada, para Pedrinho isso é muito irritante.",
                "textA": "Agora ela está na sala de aula, a professora está explicando a matéria, mas sempre que a professora vira para a lousa, os colegas  de classe de Aninha empurram as costas dele e dão risada, para Aninha isso é muito irritante.",
                "audios": ["rain.mp3"],
                "arestas": [
                    {
                        "destiny": "H",
                        "text":"Conversar com a professora."
                    },
                    {
                        "destiny": "I",
                        "text":"Empurrar os colegas de classe também."
                    },
                    {
                        "destiny": "J",
                        "text": "Não fazer nada, um dia isso vai passar."
                    }
                ]
            },
            {
                "value": "G",
                "img": require("./imagens/bully.jpg"),
                "textP": "A mãe de Pedrinho disse que ele não precisa ir para escola. Mas ele sabe que não pode continuar mentindo todos os dias. E percebeu que nada mudou, e ele só se livrou por hoje. Ele sabe que amanhã as crianças continuarão irritando ele.",
                "textA": "A mãe de Aninha disse que ela não precisa ir para escola. Mas ela sabe que não pode continuar mentindo todos os dias. E percebeu que nada mudou, e ela só se livrou por hoje. Ela sabe que amanhã as crianças continuarão irritando ela.",
                "audios": ["rain.mp3"],
                "arestas": []
            },
            {
                "value": "H",
                "img": require("./imagens/bully.jpg"),
                "textP": "Ele contou para a professora no final da aula o que estava acontecendo, ela disse que vai prestar mais atenção. E que vai ajudar ele a encarar isso. Pedrinho, agora, se sente melhor em saber que irão ajudar ele com isso.",
                "textA": "Ela contou para a professora no final da aula o que estava acontecendo, ela disse que vai prestar mais atenção. E que vai ajudar ela a encarar isso. Aninha, agora, se sente melhor em saber que irão ajudar ela com isso.",
                "audios": ["rain.mp3"],
                "arestas": []
            },
            {
                "value": "I",
                "img": require("./imagens/bully.jpg"),
                "textP": "A professora viu que Pedrinho empurrou os colegas de classe. Ele tentou se explicar mas não adiantou contar que eles também estavam fazendo isso. Ligaram para mãe de Pedrinho e ela vai ter que ir até a escola para conversar com a diretora.",
                "textA": "A professora viu que Aninha empurrou os colegas de classe. Ela tentou se explicar mas não adiantou contar que eles também estavam fazendo isso. Ligaram para mãe de Aninha e ela vai ter que ir até a escola para conversar com a diretora.",
                "audios": ["rain.mp3"],
                "arestas": []
            },
            {
                "value": "J",
                "img": require("./imagens/bully.jpg"),
                "textP": "Ele odiou o dia de hoje foi um péssimo dia e nada mudou, amanhã as coisas vão continuar a mesma coisa.",
                "textA": "Ela odiou o dia de hoje foi um péssimo dia e nada mudou, amanhã as coisas vão continuar a mesma coisa.",
                "audios": ["rain.mp3"],
                "arestas": []
            }
        ]
    },
    {
        "id": 2,
        "title": "Perda",
        "descriptionP": "Pedrinho perdeu seu cachorrinho de estimação, ele está muito triste, e está sempre chorando.",
        "descriptionA": "Aninha perdeu seu cachorrinho de estimação, ele está muito triste, e está sempre chorando.",        
        "img": require("./imagens/death.png"),
        "vertices":[
            {
                "value": "A",
                "text": "estamos na situação A, o que vamos fazer?",
                "img": "imagens/death.png",
                "arestas": [
                    {
                        "destiny": "A",
                        "text": "se me selecionar, irei para o ponto A novamente"
                    },
                    {
                        "destiny": "B",
                        "text":"se me selecionar, irei para o ponto B"
                    }
                ]
            },
            {
                "value": "B",
                "text": "estamos na situação B, o que vamos fazer?",
                "img": "imagens/death.png",
                "arestas":[
                    {
                        "destiny": "A",
                        "text":"Se me selecionar, irei para o ponto A"
                    },
                    {
                        "destiny": "C",
                        "text":"Se me selecionar, irei para o ponto C"
                    },
                    {
                        "destiny": "D",
                        "text":"Se me selecionar, irei para o ponto D"
                    }
                ]
            },
            {
                "value": "C",
                "text": "estamos na situação C, Fechou!",
                "img": "imagens/death.png",
                "arestas":[]
            },
            {
                "value": "D",
                "text": "estamos na situação D, Fechou!",
                "img": "imagens/death.png",
                "arestas":[]
            }
        ]
    }
]
export default stories