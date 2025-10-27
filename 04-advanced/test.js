const book = {
  title: 'Life of an IT Girl',
  showTitle () {
    const inner = () => {
      console.log(this.title);
    };
    inner();
}}
book.showTitle();
