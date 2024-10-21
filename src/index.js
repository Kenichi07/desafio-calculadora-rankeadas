test(101, 21);

function saldoRankeadas(vitoria, derrota) {
  return (vitoria - derrota);
}

function nivelComSwitch(saldoRankeadas) {
    switch (true) {
      case (saldoRankeadas <= 10):
        return "Ferro";
        break;
      case (saldoRankeadas > 10 && saldoRankeadas <= 20):
        return "Bronze";
        break;
      case (saldoRankeadas > 20 && saldoRankeadas <= 50):
        return "Prata";
        break;
      case (saldoRankeadas > 50 &&  saldoRankeadas <= 80):
        return "Ouro";
        break;
      case (saldoRankeadas > 80 &&  saldoRankeadas <= 90):
        return "Diamante";
        break;
      case (saldoRankeadas > 90 && saldoRankeadas <= 100):
        return "Lendário";
        break; 
      default:
        return "Imortal";
        break;
    }
}

function nivelComIF (saldoRankeadas) {
  if (saldoRankeadas <= 10) {
    return "Ferro";
  } else if (saldoRankeadas > 10 && saldoRankeadas <= 20){
    return "Bronze";
  } else if (saldoRankeadas > 20 && saldoRankeadas <= 50){
    return "Prata";
  } else if (saldoRankeadas > 50 &&  saldoRankeadas <= 80){
    return "Ouro";
  } else if (saldoRankeadas > 80 &&  saldoRankeadas <= 90){
    return "Diamante";
  } else if (saldoRankeadas > 90 && saldoRankeadas <= 100){
    return "Lendário";
  } else {
    return "Imortal";
  }
}

function test(vitoria, derrota) {
  let saldo = saldoRankeadas(vitoria, derrota);
  let nivel1 = nivelComIF(saldo);
  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel1} com IF`);

  let nivel2 = nivelComSwitch(saldo);
  console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel2} com Switch`);
}