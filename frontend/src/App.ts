
class App {
    main_div: any;
    
    init(id: string) {
        this.main_div = $(`#${id}`);
        this.draw();
    }

    draw() {
        console.log(this.main_div);
        console.log('Application started');
    }

}

export default App;

