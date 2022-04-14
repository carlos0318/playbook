const trendingTopic = {
  title: "Elon Musk hizo una oferta para comprar Twitter",
  des: "Este jueves, el multimillonario Elon Musk anunció que hizo una oferta el día anterior para comprar Twitter a 54,20 dólares la acción. La oferta llega pocas semanas después de que se convirtiera en el mayor accionista de la compañía y rechazara un puesto en la junta directiva.",
  dateCreated: "14 de Abril de 2022",

  getTitleAndDate: function() {
    return `Title: ${this.title}, Date: ${this.dateCreated}`;
  },

  getDes: function() {
    return `Description: ${this.des}`;
  }
}

console.log(trendingTopic.getTitleAndDate());
console.log(trendingTopic.getDes());
