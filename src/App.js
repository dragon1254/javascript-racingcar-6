import constroller from "./domain/controller/controller";

class App {
  async play() {
    const control = new constroller();
    await control.run()
  }
}

export default App;
