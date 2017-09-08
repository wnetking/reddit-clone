export const helper = {
  getDayExist(date) {
    let nowDate = new Date();
    let delta   = nowDate.getTime() - date;
    return Math.floor(delta / 1000 / 60 / 60);
  }
}