export default class Delay {
  sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
  }
}
