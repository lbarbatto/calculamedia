const mediaDeCorte = 6;

const herois = [
    aluno = {
      nome: "Tiago dos Santos",
      disciplina: "Matemática",
      notas: [6.5, 4.3, 6.1, 6.0]
    },
    aluno = {
      nome: "Alex Carneiro",
      disciplina: "Matemática",
      notas: [7.5, 8.3, 9.1, 10.0]
    }
  ];

  for (let h=0;h<herois.length;h++){
    let soma = 0;
    let media = 0;
    for (let n=0;n<herois[h].notas.length;n++){
      let nota = herois[h].notas[n];
      soma += nota;
      media = soma / herois[h].notas.length;
    }
    let status = "Indefinido";
    if (media < mediaDeCorte){
      status = "Reprovado"
    } else {
      status = "Aprovado"
    }
    console.log(`--------- \r\nAluno: ${herois[h].nome} - Disciplina: ${herois[h].disciplina} - Média Final: ${media} - Condição: ${status}\r\n---------`); 
  }
  
  // console.log("Média: " + mediaDeCorte);

  // const aluno1 = herois[0];
  // const aluno2 = herois[1];

  // const mediaAluno1 = (aluno1.notas[0] + aluno1.notas[1] + aluno1.notas[2] + aluno1.notas[3]) / 4;
  // // console.log("Média do " + aluno1.nome + " é: " + mediaAluno1);
  // var statusAluno1 = "Indefinido";

  // if (mediaAluno1 < mediaDeCorte) { // se mediaAluno for menor do que a mediaDeCorte (6)
  //   statusAluno1 = "Reprovado";
  // } else {
  //   statusAluno1 = "Aprovado"
  // }

  // const mediaAluno2 = (aluno2.notas[0] + aluno2.notas[1] + aluno2.notas[2] + aluno2.notas[3]) / 4;
  // // console.log("Média do " + aluno1.nome + " é: " + mediaAluno2);
  // var statusAluno2 = "Indefinido";

  // if (mediaAluno2 < mediaDeCorte) { // se mediaAluno for menor do que a mediaDeCorte (6)
  //   statusAluno2 = "Reprovado";
  // } else {
  //   statusAluno2 = "Aprovado"
  // }

  // console.log(`Aluno: ${aluno1.nome} - Disciplina: ${aluno1.disciplina} - Méida Final: ${mediaAluno1} - Condição: ${statusAluno1}`);
  // console.log(`Aluno: ${aluno2.nome} - Disciplina: ${aluno2.disciplina} - Méida Final: ${mediaAluno2} - Condição: ${statusAluno2}`);